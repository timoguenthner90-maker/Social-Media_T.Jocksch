#!/usr/bin/env node
// screenshots.mjs — Vollseiten-Screenshots für das Freigabe-Gate (Stage 5).
//
// Der Gauntlet prüft Struktur, Meta und Scores. Was er nicht prüfen kann, ist
// „sieht es richtig aus" — dafür braucht der Mensch am Gate Bilder. Dieses
// Skript liefert sie reproduzierbar in den drei Spec-Breakpoints.
//
// Voraussetzung: `dist` wird lokal ausgeliefert, per Default auf Port 4399:
//   npx serve dist -l 4399
//
// Aufruf:
//   node scripts/screenshots.mjs "<pfade,komma,getrennt>" <breite> <label> [outDir]
//   node scripts/screenshots.mjs ",training/,faq/" 1280 desktop
//
// Ein leerer Pfad bedeutet die Startseite.

import { launch } from "chrome-launcher";
import CDP from "chrome-remote-interface";
import fs from "node:fs";

const pages = (process.argv[2] ?? "").split(",");
const width = Number(process.argv[3] ?? 1280);
const label = process.argv[4] ?? "shot";
const outDir = process.argv[5] ?? "screenshots";
const BASE = process.env.PREVIEW_URL ?? "http://localhost:4399";

fs.mkdirSync(outDir, { recursive: true });

const chrome = await launch({
  chromeFlags: ["--headless=new", "--hide-scrollbars", `--window-size=${width},1000`],
});
const client = await CDP({ port: chrome.port });
const { Page, Emulation, Network, Runtime } = client;
await Page.enable();
await Network.enable();

for (const p of pages) {
  await Emulation.setDeviceMetricsOverride({
    width,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: width < 500,
  });
  await Page.navigate({ url: `${BASE}/${p}` });
  await Page.loadEventFired();

  // Zwei Dinge würden sonst leere Bilder in den Vollseiten-Screenshot bringen,
  // obwohl die Seite korrekt ist — beide Fehlalarme sind hier schon aufgetreten:
  //  1. loading="lazy" lädt unterhalb des Viewports nicht.
  //  2. Die Scroll-Einblendung hält Bilder auf opacity:0, bis der
  //     IntersectionObserver feuert — was beim Capture-über-den-Viewport-hinaus
  //     nicht passiert. Deshalb den Reveal-Modus für den Screenshot abschalten.
  // Bei Bildern mit srcset reicht es NICHT, nur src neu zu setzen — der Browser
  // wählt die Quelle aus srcset und ignoriert die Zuweisung. Deshalb srcset
  // leeren und erneut setzen; erst das stößt einen neuen Ladevorgang an.
  // Danach wird gewartet, bis wirklich jedes Bild fertig ist, statt blind eine
  // feste Zeitspanne zu schlafen.
  await Runtime.evaluate({
    expression: `
      document.documentElement.classList.remove('js-reveal');
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-in'));
      document.querySelectorAll('img').forEach(i => {
        i.loading = 'eager';
        const s = i.srcset;
        if (s) { i.srcset = ''; i.srcset = s; } else { i.src = i.src; }
      });
    `,
  });

  // Der entscheidende Schritt: Der Viewport wird auf die volle Seitenhöhe
  // gesetzt, BEVOR aufgenommen wird. Mit captureBeyondViewport allein blieben
  // die untersten Kacheln leer — Chrome verwirft Bilder weit außerhalb des
  // sichtbaren Bereichs, egal ob loading="lazy" vorher entfernt wurde. Ist die
  // ganze Seite der Viewport, gibt es kein „außerhalb" mehr.
  const { cssContentSize } = await Page.getLayoutMetrics();
  const fullHeight = Math.min(Math.ceil(cssContentSize.height), 15000);

  await Emulation.setDeviceMetricsOverride({
    width,
    height: fullHeight,
    deviceScaleFactor: 1,
    mobile: width < 500,
  });

  await Runtime.evaluate({
    awaitPromise: true,
    expression: `
      Promise.all([...document.images].map(i =>
        i.complete ? Promise.resolve() : new Promise(r => {
          i.addEventListener('load', r, { once: true });
          i.addEventListener('error', r, { once: true });
        })
      )).then(() => new Promise(r => setTimeout(r, 600)))
    `,
  });

  const data = await Page.captureScreenshot({
    format: "png",
    clip: { x: 0, y: 0, width, height: fullHeight, scale: 1 },
    captureBeyondViewport: true,
  });

  const name = (p || "home").replace(/\/$/, "") || "home";
  fs.writeFileSync(`${outDir}/${label}-${name}.png`, Buffer.from(data.data, "base64"));
  console.log(`${label}-${name}.png  ${width}×${Math.round(cssContentSize.height)}`);
}

await client.close();
chrome.kill();
