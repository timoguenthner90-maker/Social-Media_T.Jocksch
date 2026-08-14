#!/usr/bin/env node
// make-og.mjs — erzeugt public/og.png (1200×630) für Social-Media-Vorschauen.
//
// Rechts steht ein Ausschnitt aus dem Portraitfoto, links Name und Kernaussage
// auf Sandton. Die Schrift kommt aus dem System (librsvg kennt die
// Fraunces-Datei aus node_modules nicht) — eine klassische Serife trifft die
// Anmutung nah genug, und das Bild wird nur als Vorschaukachel gesehen.
//
// Aufruf: npm run og  (nach jeder Änderung an Claim oder Portraitfoto)

import sharp from "sharp";
import fs from "node:fs";

const W = 1200;
const H = 630;
const PHOTO = "public/img/tina-portrait.webp";

const bg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#f3ede5"/>
  <rect x="0" y="0" width="8" height="${H}" fill="#9c7c5f"/>
  <text x="80" y="132" font-family="Helvetica, Arial, sans-serif" font-size="21"
        letter-spacing="4.2" fill="#857a6f">SOCIAL · CONTENT · CREATOR MARKETING</text>
  <text x="76" y="248" font-family="Iowan Old Style, Palatino, Georgia, serif"
        font-size="76" fill="#1e1a17">Tina Jocksch</text>
  <text x="76" y="352" font-family="Iowan Old Style, Palatino, Georgia, serif"
        font-size="42" fill="#4f4842">Sichtbar ist nicht genug.</text>
  <text x="76" y="404" font-family="Iowan Old Style, Palatino, Georgia, serif"
        font-size="42" fill="#4f4842">Marken und Orte sollen</text>
  <text x="76" y="456" font-family="Iowan Old Style, Palatino, Georgia, serif"
        font-size="42" fill="#4f4842">erlebbar sein.</text>
  <text x="80" y="556" font-family="Helvetica, Arial, sans-serif" font-size="22"
        fill="#857a6f">Interior · Hospitality · Gastronomie · Lifestyle</text>
</svg>`);

if (!fs.existsSync(PHOTO)) {
  console.error(`${PHOTO} fehlt — erst "npm run images" laufen lassen.`);
  process.exit(1);
}

const photo = await sharp(PHOTO)
  .resize(420, H, { fit: "cover", position: "top" })
  .toBuffer();

await sharp(bg)
  .composite([{ input: photo, left: W - 420, top: 0 }])
  .png({ compressionLevel: 9 })
  .toFile("public/og.png");

console.log(`public/og.png erzeugt (${W}×${H})`);
