# Spec — Website Tina Jocksch

Stand: 17.08.2026 · Version 5.0 (One-Pager nach Ecomex-Wireframe)

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

**Branchen bewusst offen.** Der Schwerpunkt liegt bei Interior, Hospitality und
Lifestyle, aber die Seite grenzt nicht darauf ein: Tina betreut auch einen
Tennis-Account und arbeitet an Konzepten für Branchen, denen man Social Media
nicht ansieht. Der Vorstelltext benennt das ausdrücklich („Ob Sofa, Sandplatz
oder etwas völlig Unspektakuläres"), damit eine Anfrage aus einem anderen Feld
sich nicht von vornherein ausgeschlossen fühlt. Die Content-Beispiele stammen
derzeit alle aus dem Interior-Bereich — das ist der Bestand, nicht die Grenze.

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

**Sprachregel:** Englisch für kurze Beschilderung, Deutsch für alles, was eine
Aussage macht. Abschnittstitel bleiben englisch, klein, mit Punkt (`the
problem.`, `track record.`, `what I do.`) — das ist Tinas Handschrift und in
der Branche üblich. Der **Hero-Titel ist deutsch**: Er ist kein Schild, sondern
der eine Satz, der in der ersten Sekunde landen muss, und die Zielgruppe reicht
von Hospitality über Sport bis in Branchen ohne Englisch-Affinität. Aus
demselben Grund wurde `what I do — and what it costs.` auf `what I do.`
gekürzt — ein englischer Satz statt eines Labels brach die Regel.

Fließtext deutsch, durchgehend **Du-Form**.

Zwei Elemente über den Entwurf hinaus: ein **Laufband** unter dem Hero (reine
Dekoration, `aria-hidden`, steht bei reduzierter Bewegung still) und ein
**mitscrollender CTA** in der Kopfzeile — auf einem One-Pager war der nächste
Schritt sonst über mehrere Bildschirmhöhen nicht erreichbar.

## 4. Aufbau — One-Pager

Eine Inhaltsseite mit fünf Abschnitten (nach der Problem-Sektion); die
Navigation springt per Anker.

Der Aufbau folgt jetzt dem **Ecomex-Homepage-Wireframe** (12-Zonen-Checkliste:
Logo/Nav/CTA, Hero, Painpoints, Vorstellung/Autorität, Plan, Call-to-Action,
Auszeichnungen, Testimonials, Weitere Elemente & Footer). Die **inhaltliche
Substanz** der einzelnen Zonen kommt weiterhin aus dem StoryBrand-Framework
(Donald Miller) — der Kunde bleibt der Held, Tina der Guide. Das Wireframe
bestimmt Reihenfolge, Struktur und vor allem die **Wiederholung desselben
CTA-Buttons** an mehreren Stellen; StoryBrand bestimmt weiterhin, was in jeder
Zone inhaltlich steht.

| Anker | Titel | Wireframe-Zone | Inhalt |
|---|---|---|---|
| `#start` | — | Logo/Nav/CTA + Hero | Kopfzeile mit Logo, Nav, mitscrollendem CTA; Hero („gib den Kanal ab. nicht die Marke."), Medium, Signal-Button; darunter das Laufband |
| `#problem` | the problem. | Painpoints | Vier Zitate aus der Empathy Map als Kachel-Raster, ein sachlicher Schlusssatz, CTA |
| `#ueber-mich` | hi, I'm Tina. | Vorstellung/Autorität | Bio-Text (links) und Porträt (rechts), darunter Werkzeuge, Kennzahlen, Stationen als Autoritäts-Beleg (früher „track record", jetzt Teil desselben Blocks), CTA |
| `#plan` | the plan. | Plan + CTA | Drei Schritte, „was sich ändert", CTA, kleiner Einstieg |
| `#leistungen` | what I do. | — (Angebot, projektspezifisch ergänzt) | Drei Disziplinen **und** die vier Pakete mit Preisen, CTA |
| `#arbeiten` | creative work. | — (Beleg, projektspezifisch ergänzt) | Vier Content-Beispiele kompakt nebeneinander (13 rem), darunter „feed transformations." (2 große Vorher/Nachher-Plätze à 24 rem, noch offen) |
| `#kontakt` | contact. | Weitere Elemente & Footer | Formular, E-Mail, Telefon/WhatsApp, Social |

**Zwei Wireframe-Zonen fehlen bewusst:**

- **Auszeichnungen/Siegel** — es gibt keine echten Trust-Badges oder
  Kunden-Logos. Ein erfundenes Siegel wäre irreführend; der Abschnitt kommt,
  sobald es etwas Echtes zu zeigen gibt.
- **Testimonials** — Tina hat noch keine eigenen Kunden. Statt Platzhalter mit
  „Folgt" wurde der Abschnitt ganz weggelassen, damit die Seite nicht wie eine
  Baustelle wirkt. Nachrüsten, sobald die ersten echten Kundenstimmen da sind.

**Wiederkehrender CTA.** Der Wireframe verlangt denselben Button-Text an bis zu
sechs Stellen. Umgesetzt: Kopfzeile, Hero, nach den Painpoints, nach
Vorstellung/Autorität, nach dem Plan, nach den Paketen — überall identisch
„Let's work together" → `#kontakt`.

**Vorstellung/Autorität als ein Block.** Der frühere eigene Abschnitt „track
record." (Kennzahlen, Werkzeuge, Stationen) ist jetzt Teil von `#ueber-mich`
statt eines separaten Abschnitts davor — der Wireframe sieht für „wer wir sind
und warum uns vertrauen" genau eine Zone vor, nicht zwei. Die Nav-Punkte
„experience" und „about" sind deshalb zu einem einzigen „about" verschmolzen.

**Was bewusst NICHT aus dem StoryBrand-Ton übernommen wurde:** rhetorische
Fragen („Kennst du das?"), Angstmache, Ausmalen des Scheiterns. Die Zielgruppe
sind Marketingverantwortliche und Inhaberinnen; die reagieren auf Sachlichkeit.
Der Einsatz steht in genau einem Satz am Ende der Problem-Sektion.

Angebot und Preis stehen weiterhin in **einem** Block. Vorher beschrieben zwei
Abschnitte dasselbe mit anderen Worten.

Farbflächen: Hero beige → Problem hell → Vorstellung/Autorität beige →
**Plan blau** → Leistungen hell (Paketkarten blau wie im Entwurf) → Arbeiten
beige → Kontakt beige.

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
| Zitate der Zielgruppe, Problem und Einsatz | Empathy Map Canvas v1.0 → `src/data/story.ts` |
| Fotos und Videos | `~/Desktop/Eigene Website Tina/Content/` |

## 7. Medien — bewusst knapp

**Vier Fotos, zwei Videos.** Die Seite trägt über Farbflächen und Typografie,
nicht über eine Galerie.

**Feed Transformations.** Neuer Unterabschnitt in „creative work": zwei
Accounts, die Tina einen neuen Feed verpasst — Vorher/Nachher, je Account ein
Bildpaar. Bewusst auf zwei statt drei Plätze begrenzt: Die Paare sollen groß
und gut erkennbar bleiben (`--phone-w: 24rem`), ein dritter hätte den
Abschnitt nur unnötig in die Länge gezogen. Die Accounts stehen noch nicht
fest, deshalb zeigt jeder der vier Plätze bewusst „Folgt" statt eines
erfundenen Screenshots (`.phone--platzhalter` in global.css). Struktur in
`src/data/work.ts` → `feedTransformationen`. Sobald ein Account gewählt ist,
ersetzt ein echtes Bildpaar (9:16, wie die Reels) den Platzhalter — keine neue
Komponente nötig, nur Daten und zwei Bilddateien.

**Zwei Mockup-Größen, bewusst getrennt.** Die vier Content-Beispiele nutzen
`--phone-w-compact: 13rem`, damit alle vier auf dem Desktop in einer Reihe
stehen. Die Feed-Transformation-Paare nutzen das größere `--phone-w: 24rem`,
weil ein Vorher/Nachher-Vergleich gut erkennbar sein muss, um zu überzeugen.
Beide Werte sind fest (kein `1fr`) — vorher hatte dieselbe Grid-Regel mit
`1fr` je nach Elementanzahl im Grid unterschiedlich große Mockups erzeugt.
Auf dem Handy fällt `.beispiele` per Media Query zurück auf volle Breite,
weil "vier in einer Reihe" ein Desktop-Anliegen ist und die kompakte Breite
dort sonst nur Leerraum neben jeder Karte hinterlassen hätte.

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
