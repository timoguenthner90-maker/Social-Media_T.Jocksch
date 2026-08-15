# Freigabe-Paket — Website Tina Jocksch

Stand: 15.08.2026 · Version 3.0 (One-Pager, Fokus laufende Betreuung)

## Status

| | |
|---|---|
| **URL** | https://tina-jocksch.netlify.app |
| **Sichtbarkeit** | **Nicht öffentlich.** Netlify verlangt Team-Login — nur mit deinem Netlify-Konto sichtbar. |
| **Netlify-Projekt** | https://app.netlify.com/projects/tina-jocksch |
| **Suchmaschinen** | Gesperrt, solange die Steuerangabe im Impressum fehlt. |
| **Build** | 5 Seiten · 0 TypeScript-Fehler · 0 harte Verify-Fehler |

Ein One-Pager, dazu Impressum, Datenschutz, Danke- und Fehlerseite. Gestaltung
und Wortlaut stammen aus deinem eigenen Entwurf, Erfahrung und Kontaktdaten aus
deinem Lebenslauf, die Preise aus der Wettbewerbsanalyse.

Reihenfolge: Hero → track record → services (Angebot **und** Preis) → creative
work → about → contact.

## Was du prüfen solltest

### 1. Die eine fehlende Angabe

- [ ] **Steuerangabe fürs Impressum** — USt-IdNr., Steuernummer oder der Hinweis
      „Kleinunternehmerin gemäß § 19 UStG". Eintragen in `src/data/site.ts`.

Das ist alles, was noch fehlt. Anschrift, E-Mail, Telefon und LinkedIn habe ich
aus dem Lebenslauf übernommen — bitte einmal gegenlesen, ob alles stimmt und ob
Telefonnummer und Privatadresse öffentlich stehen sollen. (Ein Impressum
verlangt eine ladungsfähige Anschrift; wenn dir die Wohnadresse zu privat ist,
ist eine ladungsfähige Geschäftsadresse die übliche Alternative.)

### 2. Inhalte

- **Preise** — aus der Wettbewerbsanalyse gerechnet, Anker ist ein Tagessatz
  von 650 €: Audit 950 € · Management ab 1.590 €/Monat · Management + Content
  ab 2.890 €/Monat · Creator Partnerships ab 1.950 €/Kampagne. Das liegt über
  deinem ersten Entwurf — Begründung steht in `src/data/services.ts`.
- **Gewichtung** — die Seite verkauft laufende Betreuung, nicht
  Content-Produktion. Content steht als dritte Disziplin und ausdrücklich als
  Ergänzung. Trifft das deine Positionierung?
- **Kennzahlen im track record** — 200+ Creator, ca. 30 % Revenue-Anteil, 20–30
  Kooperationen pro Monat, 6+ Jahre. Alles aus dem Lebenslauf.
- **Content-Beispiele** — Trend-Reel (47.500 Views · 3.920 Likes) und
  Produkt-Empfehlung (6.300 Views · 143 Likes). Das Carousel steht als „in
  Arbeit"; sobald du eines hast, tauschen wir den Platzhalter.
- **Du-Form** — die ganze Seite duzt, wie in deinem Entwurf.

### 3. Bildrechte und Personen

Drei Fotos sind im Einsatz. Beim **Hero-Bild ist eine zweite Person deutlich zu
erkennen** — hast du ihr Einverständnis für die Veröffentlichung? Wenn nicht,
tausche ich es gegen eine Aufnahme ohne weitere Personen.

### 4. Rechtstexte

Impressum und Datenschutzerklärung beschreiben exakt, was die Seite technisch
tut (Netlify-Hosting, Netlify Forms, selbst gehostete Schriften, keine Cookies,
kein Tracking). Sorgfältig erstellt, aber **keine Rechtsberatung** — vor dem
Live-Gang von fachkundiger Stelle prüfen lassen.

## Der Weg live

1. Steuerangabe in `src/data/site.ts` eintragen
2. `npm run build && npx astro check && npm run verify:prod` — muss grün sein
3. Neu deployen
4. In Netlify unter *Project configuration → Access & security* den Team-Login
   für dieses Projekt abschalten

Erst Schritt 4 macht die Seite öffentlich. `robots.txt` gibt sich mit dem Build
aus Schritt 2 automatisch frei — das kann nicht vergessen werden.

## Offener technischer Punkt

Netlify baut die Seite nicht selbst, sondern bekommt das **lokal gebaute
`dist/`**. Grund: Der Build in Netlifys Umgebung brach reproduzierbar mit
„exit code 2" ab, während derselbe Stand lokal fehlerfrei durchläuft; eine
Bisektion über vierzehn Deploys hat die Ursache nicht eingrenzen können, und die
Build-Logs sind ohne Netlify-Login nicht lesbar. Für die Seite hat das keine
Auswirkung — der Prüflauf läuft vor jedem Deploy lokal, ausgeliefert wird exakt
das geprüfte Ergebnis.

Wenn du das sauber abschließen willst: Öffne im Netlify-Dashboard einen der rot
markierten Deploys und schick mir die letzten ~30 Zeilen des Logs.
