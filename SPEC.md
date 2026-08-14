# Spec — Portfolio-Website Tina Jocksch

Stand: 14.08.2026 · Version 1.0

## 1. Zweck

Die Website ist der wichtigste Akquisekanal des Business (Priorität 1 vor
LinkedIn und @pempelhome). Sie bedient nicht die Awareness-, sondern die
**Consideration- und Acquisition-Phase**: Besucher kommen über LinkedIn,
Empfehlungen oder Instagram und wollen prüfen, ob diese Person das kann, was sie
brauchen — und was es kostet.

Messbares Ziel: **ab Q1 2027 monatlich mindestens drei qualifizierte Anfragen**
aus der Zielbranche, die zu einem Kennenlern-Call führen.

## 2. Positionierung

> Strategie, Content und Creator Marketing aus einer Hand — für Marken und Orte,
> die auf Social Media nicht nur sichtbar, sondern erlebbar werden wollen.

Hergeleitet in [`docs/6P-Positionierung.md`](docs/6P-Positionierung.md).
Ausformuliert als Seitentext in [`docs/Website-Story.md`](docs/Website-Story.md).

## 3. Seitenstruktur

Drei Inhaltsseiten. „Arbeiten" und „Über mich" sind Abschnitte der Startseite
und werden per Anker angesprungen — für ein Freelance-Portfolio liest sich eine
zusammenhängende Seite besser als vier halbleere.

| Route | Rolle (Golden Circle) | Kerninhalt |
|---|---|---|
| `/` | Why → How → What | Haltungs-Hero · Persona-Problem · Arbeitsweise · vier Säulen · `#arbeiten` (vier Bilder, @pempelhome, zwei Reels) · `#ueber-mich` (Werdegang, Branchen) |
| `/leistungen/` | What | Vier Säulen ausführlich, Creator-Prozess in acht Schritten, Pakete mit Ab-Preisen, FAQ |
| `/kontakt/` | Handlung | Formular mit sechs Feldern, E-Mail, WhatsApp, LinkedIn, Instagram, Ablauf in drei Schritten |
| `/danke/` | — | Bestätigung nach Formularversand, `noindex` |
| `/impressum/`, `/datenschutz/` | — | Pflichtseiten, `noindex` |
| `/404` | — | Fehlerseite |

**Ein CTA auf der ganzen Seite:** „Kennenlern-Call vereinbaren" → `/kontakt/`.
Wording und Ziel werden nirgends variiert.

## 4. Preise

Netto, zzgl. USt. Positioniert am oberen Ende des Düsseldorfer Wettbewerbs
(dort öffentlich sichtbar: 275–700 €/Tag), begründet durch die Kombination aus
Strategie, eigener Produktion und Creator Marketing.

| Paket | Ab-Preis |
|---|---|
| Social-Media-Retainer | 1.890 € / Monat |
| Content- & UGC-Paket | 990 € / Produktionstag |
| Influencer-Kampagne | 1.900 € Projektfee |
| Social-Media-Audit | 950 € Festpreis |
| Interim- & Projekt-Support | 650 € / Tag |

Quelle: `src/data/services.ts`.

## 5. Technik

- Astro 5, statisch, `@astrojs/sitemap`
- Keine externen Requests (Schrift mitgebaut, keine Analytics, keine Embeds)
  → **kein Cookie-Banner erforderlich**
- Kontaktformular über Netlify Forms, mit Honeypot, ohne JavaScript
- CSP in `netlify.toml`; `form-action 'self'` (sonst kein Formularversand) und
  `media-src 'self'` (Reels)
- Bilder in Farbe, WebP, zwei Breiten je Motiv, `srcset` aus `src/data/images.json`
- Videos mit `preload="none"` und Poster — sie laden erst beim Klick
- **Zehn Bilder, zwei Reels.** Aus dem Quellmaterial ließen sich leicht dreimal
  so viele aufbereiten; die Auswahl ist bewusst knapp, weil eine Portfolio-Seite
  über Kuratierung überzeugt und nicht über Menge.
- **Enge Typo-Skala** (Schrittweite ≈ 1,18): zwischen kleinster und größter Stufe
  liegt Faktor 3,2. Die Seite soll gleichmäßig wirken, nicht zwischen Plakat und
  Kleingedrucktem springen.

## 6. Inhaltsquellen

| Inhalt | Quelle |
|---|---|
| Positionierung, Leistungen, Persona, Wettbewerb | `Social_Media_Business_Chat_Zusammenfassung.md` |
| Leistungssäulen, Kundensegmente, Einnahmequellen | Business Model Canvas v1.0 |
| Pains, Gains, Zitate der Persona | Empathy Map Canvas v1.0 |
| Foto- und Videomaterial | `~/Desktop/Eigene Website Tina/Content/` |

## 7. Offene Angaben — vor Production zwingend zu füllen

Alle in `src/data/site.ts`, erkennbar am Präfix `TODO — `:

- [ ] `legalName` — vollständiger Name laut Gewerbeanmeldung
- [ ] `street`, `zip` — ladungsfähige Anschrift
- [ ] `email` — geschäftliche E-Mail-Adresse
- [ ] `phoneDigits` — Nummer für WhatsApp und Telefon, nur Ziffern mit
      Ländervorwahl (z. B. `4915112345678`)
- [ ] `vatId` — USt-IdNr., Steuernummer oder Hinweis auf § 19 UStG
- [ ] `linkedin` — vollständige Profil-URL

`npm run verify:prod` schlägt fehl, solange einer dieser Werte im Build steht.

## 8. Bewusst offen gelassen

- **Keine Testimonials, keine Kundenlogos.** Es liegen keine vor; erfundene
  kommen nicht auf die Seite. Der Beweis läuft über sichtbare Arbeiten und den
  @pempelhome-Case.
- **Keine Kennzahlen zu @pempelhome.** Der Case beschreibt Vorgehen und Formate
  statt Ergebnisse. Sobald Zahlen vorliegen (Follower, Views, Engagement),
  ersetzen sie die qualitativen Formulierungen — das ist der stärkste einzelne
  Hebel der ganzen Seite.
- **Paid Social / Ads** ist bewusst nicht im Leistungsangebot, sondern in der
  FAQ als „noch nicht" benannt.
- **Rechtstexte.** Impressum und Datenschutzerklärung beschreiben exakt, was die
  Seite technisch tut. Sie sind sorgfältig erstellt, aber keine Rechtsberatung —
  vor dem Live-Gang von fachkundiger Stelle prüfen lassen.

## 9. Nächste Ausbaustufen

1. Erstes Kundenprojekt als zweiten Case ergänzen (Ausgangslage, Vorgehen,
   Ergebnis, echtes Zitat)
2. Kennzahlen in den @pempelhome-Case eintragen
3. Eigene Domain statt Netlify-Subdomain (drei Stellen, siehe README)
4. Paid Social als fünfte Säule, sobald Praxiserfahrung vorliegt
