# Spec — Website Tina Jocksch

Stand: 15.08.2026 · Version 3.0 (One-Pager, Fokus laufende Betreuung)

## 1. Zweck

Die Website ist der wichtigste Akquisekanal. Besucher kommen über LinkedIn,
Empfehlungen oder Instagram und wollen prüfen, ob diese Person das kann, was sie
brauchen — und was es kostet. Sie muss also nicht überzeugen, dass Social Media
wichtig ist, sondern dass **diese** Person es kann.

## 2. Positionierung

Verkauft wird **laufende Kanalbetreuung**: Strategie, Audit, Redaktionsplanung,
Posting und Community Management. **Creator Partnerships** sind die zweite
Säule. **Content-Produktion** ist eine Fähigkeit, die dazukommt, wenn Material
fehlt — kein eigenständiges Angebot. Tina ist keine UGC-Creatorin, die Assets
für fremde Marken produziert, und die Seite darf das nicht suggerieren.

Diese Gewichtung steuert Reihenfolge der Abschnitte, Reihenfolge der drei
Disziplinen, Paketzuschnitt und die Rollenzeile im Hero.

## 3. Gestaltung

Grundlage ist Tinas eigener Entwurf in
`~/Desktop/Eigene Website Tina/webseite vorlage` (sieben Screenshots). Aufbau,
Wortlaut und Farben stammen von dort; ergänzt um Wettbewerbsvorbilder
(verweyensocialclub.com, alwaysonline.studio). Die Preise kommen aus der
Wettbewerbsanalyse, nicht aus dem Entwurf.

| | |
|---|---|
| **Babyblau** | `#b9d0fb` — Kopfzeile, Leistungsfläche, Paketkarten, Signal-Buttons |
| **Dunkelbraun** | `#3b2f27` — Textfarbe statt Schwarz, wärmer und weniger hart |
| **Beige** | `#e9dfcd` / `#f1e9dc` — Kontrastflächen |
| **Papier** | `#f8f5ef` — Grundfläche |
| Display | Playfair Display (variabel, selbst gehostet) |
| Text | Jost (variabel, selbst gehostet) |

Abschnittstitel englisch, klein, mit Punkt (`hi, I'm Tina.`, `track record.`) —
Tinas Handschrift. Fließtext deutsch, durchgehend **Du-Form**.

Zwei Elemente über den Entwurf hinaus: ein **Laufband** unter dem Hero (reine
Dekoration, `aria-hidden`, steht bei reduzierter Bewegung still) und ein
**mitscrollender CTA** in der Kopfzeile — auf einem One-Pager war der nächste
Schritt sonst über mehrere Bildschirmhöhen nicht erreichbar.

## 4. Aufbau — One-Pager

Eine Inhaltsseite mit sechs Abschnitten; die Navigation springt per Anker.

| Anker | Titel | Inhalt |
|---|---|---|
| `#start` | — | Hero: Haltungssatz, ein Medium, Signal-Button; darunter das Laufband |
| `#erfahrung` | track record. | Werkzeuge, vier Kennzahlen, zwei Stationen, Showroom-Band |
| `#leistungen` | what I do — and what it costs. | Drei Disziplinen **und** die vier Pakete mit Preisen, auf Babyblau |
| `#arbeiten` | creative work. | Drei Content-Beispiele in Telefonrahmen |
| `#about` | hi, I'm Tina. | Positionierung und Anspruch, Porträt |
| `#kontakt` | contact. | Formular, E-Mail, Telefon/WhatsApp, Social |

**Die Reihenfolge ist Positionierung.** Verkauft wird die laufende Betreuung
eines Kanals — dafür ist der Track Record das stärkste Argument, nicht ein
Reel. Deshalb steht die Erfahrung direkt hinter dem Hero, das Angebot mit Preis
danach, und die Content-Beispiele erst dahinter: Sie belegen, dass Material
auch selbst entstehen kann, sind aber nicht das Hauptgeschäft.

Angebot und Preis stehen in **einem** Block. Vorher beschrieben zwei Abschnitte
dasselbe mit anderen Worten, und der Leser musste das eine aufs andere abbilden.

Eigene Seiten nur für `/impressum/`, `/datenschutz/`, `/danke/` und `/404`.

## 5. Preise

Netto zzgl. USt. Was **nicht** enthalten ist, steht mit auf der Karte — das
erzeugt weniger Rückfragen als Schweigen.

Hergeleitet aus der Wettbewerbsanalyse: Die Düsseldorfer Tagessätze liegen bei
275–350 € (Junior) und 600–700 € (etabliert). Anker ist ein **Tagessatz von
650 €**, Mitte des oberen Bandes; alle Pakete sind daraus in Tagewerten
gerechnet. Die vollständige Rechnung steht als Tabelle in `src/data/services.ts`.

| Paket | Preis | Tagewerte |
|---|---|---|
| 01 Social Media Audit | 950 € einmalig | 1,5 |
| 02 Social Media Management | ab 1.590 € / Monat | 2,5 |
| 03 Management + Content | ab 2.890 € / Monat | 4,5 |
| 04 Creator Partnerships | ab 1.950 € / Kampagne | 3 |
| Projekt & Interim | 650 € / Tag | — |

Das reine Content-Paket aus dem ersten Entwurf ist entfallen: Es stellte die
Produktion an den Anfang und ließ das Angebot nach UGC-Creatorin aussehen. An
seine Stelle tritt das Audit — der kleinste sinnvolle Einstieg und zugleich der
beste Türöffner für einen Retainer (es wird bei Abschluss angerechnet).

## 6. Inhaltsquellen

| Inhalt | Quelle |
|---|---|
| Aufbau, Wortlaut, Preise, Farben | `~/Desktop/Eigene Website Tina/webseite vorlage` |
| Berufserfahrung, Kennzahlen, Werkzeuge, Kontaktdaten | `CV-Tina-Jocksch.pdf` |
| Positionierung und Zielgruppe (Hintergrund) | `docs/6P-Positionierung.md`, `docs/Website-Story.md` |
| Fotos und Videos | `~/Desktop/Eigene Website Tina/Content/` |

## 7. Medien — bewusst knapp

**Vier Fotos, zwei Videos.** Die Seite trägt über Farbflächen und Typografie,
nicht über eine Galerie.

- `hero-sofa` — Cord-Sofa im Studio (Hero), von Tina ausgewählt. Der Slot nimmt
  auch ein Hintergrundvideo auf: `heroMedia` in `src/data/site.ts` umschalten.
- `tina-portrait` — Porträt (about)
- `post-sofa` — Foto-Post, drittes Content-Beispiel
- `vetsak-showroom` — Band im track record
- `trend-reel.mp4` — 47.500 Views · 3.920 Likes
- `produkt-reel.mp4` — 6.300 Views · 143 Likes

Zuschnitt: `focus` in `scripts/prepare-images.mjs` steuert die Strategie.
`attention` trifft bei Porträts nicht zuverlässig — es hat hier schon einmal die
Augen abgeschnitten; im Zweifel `top`.

@pempelhome erscheint nur als Fußnote unter den Beispielen: Der Account läuft
erst seit Mitte Juni 2026 (490 Follower) und ist ein Testfeld, kein
Aushängeschild.

Weitere Beispiele fehlen noch, weil es bisher keine Kundenprojekte gibt. Sobald
ein Case vorliegt, gehört er in `src/data/work.ts` — und ersetzt zuerst den
Carousel-Platzhalter.

## 8. Technik

- Astro 5, statisch, `@astrojs/sitemap`
- Keine externen Requests (Schriften mitgebaut, kein Tracking, keine Embeds)
  → **kein Cookie-Banner erforderlich**
- Kontaktformular über Netlify Forms, mit Honeypot, ohne JavaScript
- CSP in `netlify.toml`; `form-action 'self'` und `media-src 'self'`
- Videos mit `preload="none"` und Poster — sie laden erst beim Klick
- **Der Build läuft lokal**, Netlify liefert nur das geprüfte `dist/` aus
  (Begründung in `netlify.toml`)

## 9. Offene Angabe — vor Production zwingend

Eine einzige, in `src/data/site.ts`, erkennbar am Präfix `TODO — `:

- [ ] `vatId` — USt-IdNr., Steuernummer oder Hinweis auf § 19 UStG

`npm run verify:prod` schlägt fehl, solange dieser Wert im Build steht, und
`robots.txt` sperrt die Seite für Suchmaschinen.

Alle übrigen Stammdaten (Name, Anschrift, E-Mail, Telefon, LinkedIn) stammen aus
dem Lebenslauf und sind eingetragen.

## 10. Bewusst nicht auf der Seite

- **Die aktuelle Suchsituation** und der Grund für das Ende der letzten
  Anstellung. Beides steht im Lebenslauf und gehört in ein Gespräch, nicht auf
  eine Angebotsseite. Die laufende Performance-Marketing-Weiterbildung steht
  dagegen als Pluspunkt drin.
- **Testimonials und Kundenlogos** — es liegen keine vor, erfundene kommen nicht
  auf die Seite.
- **Der private Instagram-Account** bleibt privat; verlinkt ist nur @pempelhome.
- **FAQ und Ablauf-Sektion** — in Version 1 vorhanden, für die Straffung
  entfernt.
