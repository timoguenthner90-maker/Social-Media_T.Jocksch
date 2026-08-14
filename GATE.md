# Freigabe-Paket — Portfolio-Website Tina Jocksch

Stand: 14.08.2026

## Status

| | |
|---|---|
| **Preview-URL** | https://tina-jocksch.netlify.app |
| **Sichtbarkeit** | **Nicht öffentlich.** Netlify verlangt Team-Login — nur mit deinem Netlify-Konto (timoguenthner90@gmail.com) sichtbar. |
| **Netlify-Projekt** | https://app.netlify.com/projects/tina-jocksch |
| **Suchmaschinen** | Gesperrt. `robots.txt` liefert `Disallow: /`, solange das Impressum unvollständig ist. |
| **Build** | 7 Seiten · 0 TypeScript-Fehler · 0 harte Verify-Fehler |

**Aufbau:** drei Inhaltsseiten — Start (mit den Abschnitten Arbeiten und Über
mich), Leistungen & Preise, Kontakt. Dazu Danke-, Impressums-, Datenschutz- und
Fehlerseite.

Die Seite ist damit vollständig gebaut und abnahmebereit, aber bewusst noch
nicht öffentlich — ein unvollständiges Impressum gehört nicht auf eine
erreichbare deutsche Geschäftsseite.

## Was geprüft wurde

- `npm run build` — 7 Seiten, fehlerfrei
- `npx astro check` — 0 Fehler, 0 Warnungen
- `npm run verify` — 0 harte Fehler; alle Pflicht-URLs vorhanden; strukturierte
  Daten vollständig (Person, ProfessionalService, WebSite, FAQPage, BreadcrumbList)
- Vollseiten-Screenshots in 1440 px und 390 px, alle Seiten (`screenshots/`)
- Alle Bilder mit alt-Text, alle internen Links auflösbar
- Deploy erfolgreich, Netlify Forms aktiviert

Offene Warnungen sind ausschließlich die absichtlichen Platzhalter.

## Was du jetzt tun musst

### 1. Stammdaten liefern

Alles in `src/data/site.ts`, Präfix `TODO — `:

- [ ] Vollständiger Name laut Gewerbeanmeldung
- [ ] Straße, Hausnummer, PLZ (ladungsfähige Anschrift)
- [ ] Geschäftliche E-Mail-Adresse
- [ ] Telefonnummer für WhatsApp (nur Ziffern mit Ländervorwahl, z. B. `4915112345678`)
- [ ] USt-IdNr., Steuernummer oder Hinweis auf § 19 UStG
- [ ] LinkedIn-Profil-URL

Solange einer dieser Werte fehlt, schlägt `npm run verify:prod` fehl und
`robots.txt` bleibt auf `Disallow`.

### 2. Inhalte gegenlesen

- **Preise** — die fünf Ab-Preise auf `/leistungen/` sind eine Empfehlung am
  oberen Ende des Düsseldorfer Wettbewerbs. Stimmen sie so?
- **„Seit über sechs Jahren"** auf `/ueber-mich/` — stimmt die Zahl?
- **@pempelhome „seit Sommer 2026"** — stimmt der Zeitpunkt?
- **Sie-Form** — durchgehend im Sie. Bei jüngerer D2C-Ausrichtung wäre Du
  stimmiger; das wäre ein kompletter Wechsel, keine halbe Sache.
- **Bildauswahl** — zehn Bilder und zwei Reels aus deinem Material. Passt jedes
  davon öffentlich? Besonders: die Studioaufnahmen, falls dort Kundenmarken
  erkennbar sind, und die Aufnahme mit einer zweiten Person bei „Influencer &
  Creator Marketing".

### 3. Rechtstexte prüfen lassen

Impressum und Datenschutzerklärung beschreiben exakt, was die Seite technisch
tut (Netlify-Hosting, Netlify Forms, selbst gehostete Schrift, keine Cookies,
kein Tracking). Sie sind sorgfältig erstellt, sind aber **keine Rechtsberatung**.
Vor dem Live-Gang von fachkundiger Stelle prüfen lassen.

## Der Weg live

Wenn Punkte 1–3 erledigt sind:

1. Stammdaten in `src/data/site.ts` eintragen
2. `npm run build && npm run verify:prod` — muss grün sein
3. Neu deployen
4. In Netlify unter *Project configuration → Access & security* den Team-Login
   für dieses Projekt abschalten, damit die Seite öffentlich wird

Erst Schritt 4 macht die Seite für die Welt sichtbar. `robots.txt` gibt sich mit
dem Build aus Schritt 2 automatisch frei — das kann nicht vergessen werden.

## Was bewusst fehlt

- **Testimonials und Kundenlogos** — es liegen keine vor. Erfundene kommen nicht
  auf die Seite.
- **Kennzahlen zu @pempelhome** — der Case beschreibt Vorgehen statt Ergebnis.
  Sobald du Follower-, View- oder Engagement-Zahlen hast, gehören sie hinein.
  Das ist der stärkste einzelne Hebel der ganzen Seite.
- **Paid Social** — steht in der FAQ als „noch nicht", nicht im Angebot.
