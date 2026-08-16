# Freigabe-Paket — Website Tina Jocksch

Stand: 15.08.2026 · Version 3.0 (One-Pager, Fokus laufende Betreuung)

## Status

| | |
|---|---|
| **URL** | https://tina-jocksch.netlify.app |
| **Sichtbarkeit** | **Nicht öffentlich.** Netlify verlangt Team-Login — nur mit deinem Netlify-Konto sichtbar. |
| **Netlify-Projekt** | https://app.netlify.com/projects/tina-jocksch |
| **GitHub-Repo** | https://github.com/timoguenthner90-maker/Social-Media_T.Jocksch |
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
- **Content-Beispiele** — Trend-Reel (47.500 Views · 3.920 Likes),
  Produkt-Empfehlung (6.300 Views · 143 Likes) und ein Foto-Post. Für den
  Foto-Post liegen mir keine Zahlen vor; wenn du welche hast, trage ich sie
  nach.
- **Du-Form** — die ganze Seite duzt, wie in deinem Entwurf.

### 3. Bildrechte

Vier Fotos sind im Einsatz, alle aus deinem Material und ohne weitere Personen
im Bild.

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

## Deploy-Weg: jetzt über GitHub

Das Projekt liegt jetzt auf GitHub und ist mit Netlify verbunden (Continuous
Deployment): ein Push auf `main` löst automatisch einen Deploy aus.

Netlify baut dabei weiterhin **nicht selbst** — `netlify.toml` setzt
`command = ""`, ausgeliefert wird exakt das `dist/`, das im Repo committet ist.
Das ist kein Provisorium mehr, sondern der bewusste Weg: Der Build in Netlifys
eigener Umgebung war über vierzehn Deploys hinweg reproduzierbar mit „exit code
2" fehlgeschlagen, ohne dass sich die Ursache auf eine Quelldatei eingrenzen
ließ (lokal, aus frischem Clone, mit Node 22 und 24, lief derselbe Stand
fehlerfrei durch). Mit dem committeten `dist/` taucht dieses Problem gar nicht
erst auf — Netlify hat nichts mehr zu bauen, egal ob der Auslöser ein manueller
CLI-Deploy oder ein GitHub-Push ist.

**Was das für dich bedeutet:** Der Prüflauf (`build`, `astro check`, `verify`)
muss vor jedem Push lokal grün sein — Netlify prüft nichts mehr nach. Der genaue
Ablauf steht in der README unter „Deploy".
