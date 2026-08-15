#!/usr/bin/env node
// prepare-images.mjs — bereitet das Originalmaterial für den Build auf.
//
// Quelle: ~/Desktop/Eigene Website Tina/Content  (Unterordner Ich, Shooting,
//         Showroom vetsak, pempelhome)
// Ziel:   public/img (WebP, mehrere Breiten) und public/video (mp4 + Poster)
//
// Bewusst sehr knapp gehalten: DREI Fotos und ZWEI Videos. Die Seite lebt von
// Farbflächen, Typografie und den Content-Beispielen — nicht von einer Galerie.
// Jedes Bild hier hat genau eine Aufgabe; wer eins austauscht, sollte dieselbe
// Aufgabe im Blick behalten.
//
// Die Zuordnung Quelldatei → Zielname steht als Tabelle im Skript, weil die
// WhatsApp-Dateinamen nicht sprechend sind.
//
// Aufruf:  npm run images   (optional mit abweichendem Quellpfad als Argument)

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
// macOS. Fehlt die Freigabe, meldet sharp nur „unsupported image format" — eine
// irreführende Meldung, die nach kaputten Dateien klingt. Deshalb vorab prüfen.
try {
  fs.readdirSync(CONTENT);
} catch (err) {
  console.error(
    `\nQuellordner nicht lesbar: ${CONTENT}\n  (${err.code})\n\n` +
      `  Das ist in aller Regel der macOS-Zugriffsschutz, nicht ein Problem mit\n` +
      `  den Dateien. Dem Terminal unter „Datenschutz & Sicherheit → Dateien und\n` +
      `  Ordner" Zugriff auf den Schreibtisch geben — oder den Ordner an einen\n` +
      `  anderen Ort legen und den Pfad übergeben:\n` +
      `      npm run images -- /pfad/zum/ordner\n`,
  );
  process.exit(1);
}

const c = (...p) => path.join(CONTENT, ...p);

/**
 * ratio  = Zielseitenverhältnis (Breite/Höhe)
 * widths = erzeugte Breiten; die erste ist die Standardgröße im <img src>
 * focus  = "attention" für Bilder mit Personen, "centre" sonst
 */
const IMAGES = [
  {
    // Hero: Tina bei der Produktion. Zeigt in einem Bild, worum es geht —
    // deutlich besser als ein weiteres Porträt.
    out: "hero-dreh",
    src: c("Shooting", "WhatsApp Image 2026-08-14 at 21.26.09.jpeg"),
    ratio: 4 / 5,
    widths: [900, 600],
    focus: "attention",
  },
  {
    // „hi, I'm Tina" — dieselbe Aufnahme wie in ihrem Entwurf.
    out: "tina-portrait",
    src: c("Ich", "WhatsApp Image 2026-08-12 at 16.55.59.jpeg"),
    ratio: 4 / 5,
    widths: [900, 600],
    focus: "attention",
  },
  {
    // Schmales Band im Abschnitt „track record", neben der vetsak-Station.
    out: "vetsak-showroom",
    src: c("Showroom vetsak", "WhatsApp Image 2026-08-14 at 21.36.29 (3).jpeg"),
    ratio: 16 / 9,
    widths: [1400, 800],
    focus: "centre",
  },
];

/**
 * Content-Beispiele. Beide Videos liegen im Hochformat 9:16 vor und werden
 * nicht umkodiert — sie laden erst beim Klick (preload="none"), bis dahin
 * trägt das Poster die Vorschau.
 */
const VIDEOS = [
  { out: "trend-reel", src: c("pempelhome", "Trend-Video.mp4") },
  { out: "produkt-reel", src: c("pempelhome", "Produktvideo-Beistelltisch.mp4") },
];

const done = [];
const missing = [];

/** Manifest für die Picture-Komponente: Breiten und Maße jedes Bildes. */
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
    // Die größte Breite behält den Basisnamen, damit `src` ohne srcset
    // funktioniert; die kleineren bekommen ein Breiten-Suffix.
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
