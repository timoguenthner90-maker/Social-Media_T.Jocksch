# Tina Jocksch — Portfolio-Website

Statische Astro-Seite für das Freelance-Business **Social Media Management,
Content Creation und Influencer Marketing**.

- **Strategische Grundlage:** [`docs/6P-Positionierung.md`](docs/6P-Positionierung.md) (ecomex 6P) ·
  [`docs/Website-Story.md`](docs/Website-Story.md) (Golden Circle)
- **Spec:** [`SPEC.md`](SPEC.md) · **Acceptance-Set:** [`acceptance.json`](acceptance.json)
- **Freigabe-Paket:** [`GATE.md`](GATE.md)

## Stack

Astro 5, statisch. Keine externen Requests: die Schriften (Playfair Display,
Jost) werden über
`@fontsource-variable` mitgebaut, Bilder und Videos liegen im eigenen Build.
Deshalb sind weder Cookie-Banner noch Consent-Management nötig. JavaScript gibt
es nur für zwei optionale Effekte (Sticky-Header, Einblendung beim Scrollen) —
ohne JS bleibt die Seite vollständig nutzbar.

## Befehle

```bash
npm ci
npm run dev          # Entwicklung
npm run build        # -> dist/
npm run check        # astro check (TypeScript)
npm run images       # Bilder und Reels aus ~/Desktop/Eigene Website Tina aufbereiten
npm run og           # public/og.png neu erzeugen
npm run verify       # Verify-Gauntlet (Platzhalter = Warnung)
npm run verify:prod  # dito, aber Platzhalter = harter Fehler
```

Vollständiger Gauntlet vor jedem Deploy:

```bash
npm run build && npx astro check && npm run verify
```

## Struktur

| Datei | Zweck |
|---|---|
| `src/data/site.ts` | Stammdaten, CTA, Navigation. **Einzige Quelle** — Inhalte hier ändern, nicht in den Seiten. |
| `src/data/services.ts` | Die drei Leistungen und die vier Pakete mit Preisen |
| `src/data/experience.ts` | Kennzahlen, Werkzeuge und Stationen aus dem Lebenslauf |
| `src/data/work.ts` | Die drei Content-Beispiele |
| `src/data/story.ts` | StoryBrand-Bausteine: Problem-Zitate, Plan, Ergebnis |
| `src/data/jsonld.ts` | Strukturierte Daten. Platzhalter werden bewusst **nicht** ausgespielt. |
| `src/data/images.json` | Bild-Manifest (Breiten und Maße), erzeugt von `prepare-images.mjs` |
| `src/components/Picture.astro` | Bild mit srcset und festen Maßen aus dem Manifest |
| `scripts/prepare-images.mjs` | Bildaufbereitung inkl. Zuordnungstabelle Quelldatei → Zielname |
| `scripts/verify.mjs` | Verify-Gauntlet, inklusive Platzhalter-Gate |
| `scripts/screenshots.mjs` | Vollseiten-Screenshots in mehreren Breiten |
| `netlify.toml` | Security-Header, CSP und Caching |

## Platzhalter-Mechanik

Noch offene Stammdaten stehen in `src/data/site.ts` mit dem Präfix `TODO — `.
Aktuell ist das nur noch die Steuerangabe fürs Impressum.
Das hat drei Effekte:

1. Sie sind in der Preview orange hinterlegt und unübersehbar.
2. Komponenten rendern sie als Text statt als Link — es entsteht keine
   `mailto:`- oder `wa.me`-Adresse, die ins Leere oder zu einem fremden Anschluss
   führt.
3. `npm run verify:prod` bricht ab, solange ein solcher Wert im Build steht.

**Die Seite kann damit als Preview laufen, aber nicht mit unvollständigem
Impressum in Production gehen.**

## Deploy

Netlify baut nicht selbst (siehe `netlify.toml`) — es liefert exakt das
`dist/`, das im Repo committet ist. Deploy heißt deshalb: lokal bauen und
prüfen, dann pushen.

```bash
npm run build && npx astro check && npm run verify   # muss grün sein
git add -A && git commit -m "…"
git push origin main                                  # Netlify deployt automatisch
```

Repo: https://github.com/timoguenthner90-maker/Social-Media_T.Jocksch
Netlify ist mit `main` verbunden (Continuous Deployment) — ein Push löst den
Deploy aus, ohne dass Netlify selbst baut.

## Beim Umzug auf eine eigene Domain

Drei Stellen müssen zusammenpassen, sonst brechen Canonical, OG-URLs und Sitemap:

1. `SITE_URL` in `src/data/site.ts`
2. `site` in `astro.config.mjs`
3. `Sitemap:`-Zeile in `public/robots.txt`
