#!/usr/bin/env node
// prepare-images.mjs — bereitet das Originalmaterial für den Build auf.
//
// Quelle: ~/Desktop/Eigene Website Tina  (Fotos in ./Content, Reels teils dort,
//         teils im übergeordneten Ordner)
// Ziel:   public/img (WebP, mehrere Breiten) und public/video (mp4 + Poster)
//
// Anders als bei der Vision-Tennis-Seite laufen die Bilder hier in FARBE. Das
// Angebot ist ästhetischer Interior- und Lifestyle-Content — Graustufen würden
// genau das entwerten, was verkauft wird. Material, Licht und Farbtemperatur
// sind das Argument.
//
// Die Zuordnung Quelldatei → Zielname steht bewusst als Tabelle im Skript: Die
// WhatsApp-Dateinamen sind nicht sprechend, und ohne diese Tabelle wäre nach
// zwei Wochen nicht mehr nachvollziehbar, welches Bild wo auf der Seite landet.
//
// Aufruf:  npm run images

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const ROOT = process.argv[2] ?? path.join(os.homedir(), "Desktop/Eigene Website Tina");
const CONTENT = path.join(ROOT, "Content");
const IMG_OUT = "public/img";
const VID_OUT = "public/video";

fs.mkdirSync(IMG_OUT, { recursive: true });
fs.mkdirSync(VID_OUT, { recursive: true });

// Der Quellordner liegt auf dem Schreibtisch und damit im Zugriffsschutz von
// macOS. Fehlt die Freigabe, meldet sharp nur „unsupported image format" —
// eine irreführende Meldung, die nach kaputten Dateien klingt. Deshalb hier
// einmal vorab prüfen und im Klartext sagen, woran es liegt.
try {
  fs.readdirSync(CONTENT);
} catch (err) {
  console.error(
    `\nQuellordner nicht lesbar: ${CONTENT}\n` +
      `  (${err.code})\n\n` +
      `  Das ist in aller Regel der macOS-Zugriffsschutz, nicht ein Problem mit\n` +
      `  den Dateien. Dem Terminal in den Systemeinstellungen unter\n` +
      `  „Datenschutz & Sicherheit → Dateien und Ordner" Zugriff auf den\n` +
      `  Schreibtisch geben — oder den Ordner an einen Ort außerhalb von\n` +
      `  Schreibtisch, Dokumente und Downloads legen und den Pfad als Argument\n` +
      `  übergeben: npm run images -- /pfad/zum/ordner\n`,
  );
  process.exit(1);
}

const c = (f) => path.join(CONTENT, f);

/**
 * ratio  = Zielseitenverhältnis (Breite/Höhe)
 * widths = erzeugte Breiten; die erste ist die Standardgröße im <img src>,
 *          alle zusammen bilden das srcset
 * focus  = "attention" für Bilder mit Personen (sharp sucht das Gesicht),
 *          "centre" für Interior — dort liegt das Motiv verlässlich mittig
 */
// Bewusst knapp gehalten: zehn Bilder, zwei Reels. Aus dem Quellordner ließen
// sich leicht dreimal so viele aufbereiten — aber eine Portfolio-Seite überzeugt
// über Auswahl, nicht über Menge. Jedes Bild hier hat eine feste Aufgabe.
const IMAGES = [
  // ---- Personenbilder -----------------------------------------------------
  {
    out: "tina-hero", // Hero der Startseite
    src: c("WhatsApp Image 2026-08-14 at 21.26.07 (4).jpeg"),
    ratio: 3 / 4,
    widths: [900, 600],
    focus: "attention",
  },
  {
    out: "tina-portrait", // Abschnitt „Über mich" + OG-Bild
    src: c("WhatsApp Image 2026-08-12 at 17.09.30.jpeg"),
    ratio: 4 / 5,
    widths: [900, 600],
    focus: "attention",
  },
  {
    out: "tina-work", // Säule Creator Marketing
    src: c("WhatsApp Image 2026-08-14 at 21.26.09.jpeg"),
    ratio: 4 / 5,
    widths: [800, 560],
    focus: "attention",
  },

  // ---- Produktion ---------------------------------------------------------
  {
    out: "bts-set", // Säule Content Creation
    src: c("WhatsApp Image 2026-08-14 at 21.25.49.jpeg"),
    ratio: 4 / 5,
    widths: [800, 560],
    focus: "centre",
  },
  {
    out: "bts-studio", // Säule Strategie & Projekt-Support
    src: c("WhatsApp Image 2026-08-14 at 21.36.29 (5).jpeg"),
    ratio: 4 / 5,
    widths: [800, 560],
    focus: "centre",
  },

  // ---- Arbeiten -----------------------------------------------------------
  {
    out: "case-wohnraum", // Arbeiten-Raster, @pempelhome
    src: c("WhatsApp Image 2026-08-14 at 21.44.03 (1).jpeg"),
    ratio: 4 / 5,
    widths: [1000, 640],
    focus: "centre",
  },
  {
    out: "interior-garten", // Arbeiten-Raster
    src: c("WhatsApp Image 2026-08-14 at 21.26.10 (3).jpeg"),
    ratio: 4 / 5,
    widths: [800, 560],
    focus: "centre",
  },
  {
    out: "interior-wohnraum", // Säule Social Media Management
    src: c("WhatsApp Image 2026-08-14 at 21.36.29 (3).jpeg"),
    ratio: 4 / 5,
    widths: [800, 560],
    focus: "centre",
  },
  {
    out: "interior-regal", // Arbeiten-Raster
    src: c("WhatsApp Image 2026-08-14 at 21.36.29 (8).jpeg"),
    ratio: 4 / 5,
    widths: [800, 560],
    focus: "centre",
  },
  {
    out: "interior-textur", // Arbeiten-Raster, Materialdetail
    src: c("WhatsApp Image 2026-08-14 at 21.26.08 (5).jpeg"),
    ratio: 4 / 5,
    widths: [800, 560],
    focus: "centre",
  },
];

/** Reels. Die mp4 werden nicht umkodiert — ffmpeg ist auf dem Rechner nicht
 *  installiert, und die WhatsApp-Dateien sind mit ~2 MB bereits H.264-komprimiert.
 *  Sie laden erst beim Klick (preload="none"), das Poster trägt die Vorschau. */
const VIDEOS = [
  { out: "reel-sofa", src: c("WhatsApp Video 2026-08-14 at 21.26.11.mp4") },
  { out: "reel-material", src: c("WhatsApp Video 2026-08-14 at 21.26.10.mp4") },
];

const done = [];
const missing = [];

/**
 * Manifest für die Picture-Komponente: Breiten und Maße jedes Bildes.
 * Ohne das müssten srcset und width/height in jeder Seite von Hand stehen und
 * würden beim nächsten Zuschnitt still falsch werden.
 */
const manifest = {};

for (const img of IMAGES) {
  if (!fs.existsSync(img.src)) {
    missing.push(`${img.out} → ${path.basename(img.src)}`);
    continue;
  }
  manifest[img.out] = {
    widths: img.widths,
    w: img.widths[0],
    h: Math.round(img.widths[0] / img.ratio),
  };
  for (const w of img.widths) {
    const h = Math.round(w / img.ratio);
    // Die schmalste Breite behält den Basisnamen, damit `src` ohne srcset
    // funktioniert; die größeren bekommen ein Breiten-Suffix.
    const isBase = w === img.widths[0];
    const file = path.join(IMG_OUT, isBase ? `${img.out}.webp` : `${img.out}-${w}.webp`);
    await sharp(img.src)
      .rotate() // EXIF-Orientierung anwenden, sonst liegen Handyfotos quer
      .resize(w, h, {
        fit: "cover",
        position: img.focus === "attention" ? sharp.strategy.attention : "centre",
      })
      .webp({ quality: 80 })
      .toFile(file);
  }
  done.push(`${img.out} (${img.widths.join(", ")} px breit)`);
}

for (const vid of VIDEOS) {
  if (!fs.existsSync(vid.src)) {
    missing.push(`${vid.out} → ${path.basename(vid.src)}`);
    continue;
  }
  fs.copyFileSync(vid.src, path.join(VID_OUT, `${vid.out}.mp4`));

  // Posterbild über QuickLook — ohne ffmpeg ist das auf macOS der einzige Weg
  // an einen Frame. Das Ergebnis ist ein PNG, das anschließend zu WebP wird.
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "poster-"));
  try {
    execFileSync("qlmanage", ["-t", "-s", "1200", "-o", tmp, vid.src], {
      stdio: "ignore",
    });
    const png = fs.readdirSync(tmp).find((f) => f.endsWith(".png"));
    if (png) {
      await sharp(path.join(tmp, png))
        .flatten({ background: "#ffffff" })
        .resize(720, 1280, { fit: "cover", position: "centre" })
        .webp({ quality: 78 })
        .toFile(path.join(IMG_OUT, `${vid.out}-poster.webp`));
      manifest[`${vid.out}-poster`] = { widths: [720], w: 720, h: 1280 };
      done.push(`${vid.out}.mp4 + Poster`);
    } else {
      missing.push(`${vid.out}: kein Poster erzeugt`);
    }
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

fs.writeFileSync(
  "src/data/images.json",
  JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n",
);

console.log(`${done.length} Assets aufbereitet:`);
for (const d of done) console.log(`  ✓ ${d}`);
if (missing.length) {
  console.log(`\n${missing.length} fehlen:`);
  for (const m of missing) console.log(`  ✗ ${m}`);
}
