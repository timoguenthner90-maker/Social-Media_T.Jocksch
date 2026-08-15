# Spec — Website Tina Jocksch

Stand: 15.08.2026 · Version 2.0 (One-Pager)

## 1. Zweck

Die Website ist der wichtigste Akquisekanal. Besucher kommen über LinkedIn,
Empfehlungen oder Instagram und wollen prüfen, ob diese Person das kann, was sie
brauchen — und was es kostet. Sie muss also nicht überzeugen, dass Social Media
wichtig ist, sondern dass **diese** Person es kann.

## 2. Gestaltung

Grundlage ist Tinas eigener Entwurf in
`~/Desktop/Eigene Website Tina/webseite vorlage` (sieben Screenshots). Aufbau,
Wortlaut, Preise und Farben stammen von dort; ergänzt um Wettbewerbsvorbilder
(verweyensocialclub.com, alwaysonline.studio).

| | |
|---|---|
| **Babyblau** | `#b9d0fb` — Kopfzeile, Leistungsfläche, Paketkarten, Signal-Buttons |
| **Dunkelbraun** | `#3b2f27` — Textfarbe statt Schwarz, wärmer und weniger hart |
| **Beige** | `#e9dfcd` / `#f1e9dc` — Kontrastflächen |
| **Papier** | `#f8f5ef` — Grundfläche |
| Display | Fraunces (variabel, selbst gehostet) |
| Text | Figtree (variabel, selbst gehostet) |

Abschnittstitel englisch, klein, mit Punkt (`hi, I'm Tina.`, `what I do.`) —
Tinas Handschrift. Fließtext deutsch, durchgehend **Du-Form**.

## 3. Aufbau — One-Pager

Eine Inhaltsseite mit sieben Abschnitten; die Navigation springt per Anker.

| Anker | Titel | Inhalt |
|---|---|---|
| `#start` | — | Hero: Haltungssatz, ein Foto, Signal-Button |
| `#about` | hi, I'm Tina. | Positionierung und Anspruch, Porträt |
| `#leistungen` | what I do. | Drei Leistungen mit Tags, auf Babyblau |
| `#erfahrung` | track record. | Werkzeuge, vier Kennzahlen, zwei Stationen, Showroom-Band |
| `#arbeiten` | creative work. | Drei Content-Beispiele in Telefonrahmen |
| `#pakete` | let's work together. | Vier Pakete mit Preisen |
| `#kontakt` | contact. | Formular, E-Mail, Telefon/WhatsApp, Social |

Eigene Seiten nur für `/impressum/`, `/datenschutz/`, `/danke/` und `/404`.

## 4. Preise

Aus Tinas Entwurf übernommen, netto zzgl. USt. Was **nicht** enthalten ist,
steht mit auf der Karte — das erzeugt weniger Rückfragen als Schweigen.

| Paket | Preis |
|---|---|
| 01 Content Studio | ab 850 € / Projekt |
| 02 Social Management | ab 1.200 € / Monat |
| 03 Social + Content | ab 2.200 € / Monat |
| 04 Creator Partnerships | ab 1.300 € / Kampagne |

Quelle: `src/data/services.ts`.

## 5. Inhaltsquellen

| Inhalt | Quelle |
|---|---|
| Aufbau, Wortlaut, Preise, Farben | `~/Desktop/Eigene Website Tina/webseite vorlage` |
| Berufserfahrung, Kennzahlen, Werkzeuge, Kontaktdaten | `CV-Tina-Jocksch.pdf` |
| Positionierung und Zielgruppe (Hintergrund) | `docs/6P-Positionierung.md`, `docs/Website-Story.md` |
| Fotos und Videos | `~/Desktop/Eigene Website Tina/Content/` |

## 6. Medien — bewusst knapp

**Drei Fotos, zwei Videos, ein Platzhalter.** Die Seite trägt über Farbflächen
und Typografie, nicht über eine Galerie.

- `hero-dreh` — Tina beim Dreh (Hero)
- `tina-portrait` — Porträt (about)
- `vetsak-showroom` — Band im track record
- `trend-reel.mp4` — 47.500 Views · 3.920 Likes
- `produkt-reel.mp4` — 6.300 Views · 143 Likes
- Carousel — als „in Arbeit" ausgewiesen, kein erfundener Inhalt

@pempelhome erscheint nur als Fußnote unter den Beispielen: Der Account läuft
erst seit Mitte Juni 2026 (490 Follower) und ist ein Arbeitsbeispiel, kein
Aushängeschild.

## 7. Technik

- Astro 5, statisch, `@astrojs/sitemap`
- Keine externen Requests (Schriften mitgebaut, kein Tracking, keine Embeds)
  → **kein Cookie-Banner erforderlich**
- Kontaktformular über Netlify Forms, mit Honeypot, ohne JavaScript
- CSP in `netlify.toml`; `form-action 'self'` und `media-src 'self'`
- Videos mit `preload="none"` und Poster — sie laden erst beim Klick
- **Der Build läuft lokal**, Netlify liefert nur das geprüfte `dist/` aus
  (Begründung in `netlify.toml`)

## 8. Offene Angabe — vor Production zwingend

Eine einzige, in `src/data/site.ts`, erkennbar am Präfix `TODO — `:

- [ ] `vatId` — USt-IdNr., Steuernummer oder Hinweis auf § 19 UStG

`npm run verify:prod` schlägt fehl, solange dieser Wert im Build steht, und
`robots.txt` sperrt die Seite für Suchmaschinen.

Alle übrigen Stammdaten (Name, Anschrift, E-Mail, Telefon, LinkedIn) stammen aus
dem Lebenslauf und sind eingetragen.

## 9. Bewusst nicht auf der Seite

- **Die aktuelle Suchsituation** und der Grund für das Ende der letzten
  Anstellung. Beides steht im Lebenslauf und gehört in ein Gespräch, nicht auf
  eine Angebotsseite. Die laufende Performance-Marketing-Weiterbildung steht
  dagegen als Pluspunkt drin.
- **Testimonials und Kundenlogos** — es liegen keine vor, erfundene kommen nicht
  auf die Seite.
- **Der private Instagram-Account** bleibt privat; verlinkt ist nur @pempelhome.
- **FAQ und Ablauf-Sektion** — in Version 1 vorhanden, für die Straffung
  entfernt.
