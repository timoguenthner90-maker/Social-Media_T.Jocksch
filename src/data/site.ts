// Zentrale Stammdaten. EINZIGE Quelle für Kontakt, Navigation und den CTA —
// Inhalte hier ändern, nicht in den Seiten.
//
// -------------------------------------------------------------------------
// Noch offene Angaben tragen bewusst den Präfix "TODO — ". Das hat drei Effekte:
//   1. In der Preview springen sie sofort ins Auge.
//   2. Komponenten rendern sie als reinen Text statt als Link (siehe isTodo),
//      damit keine mailto:- oder wa.me-Adresse ins Leere oder — schlimmer —
//      zu einer fremden Nummer führt.
//   3. scripts/verify.mjs bricht ab, sobald ein solcher Wert im Build landet.
//      Die Seite kann damit als Preview laufen, aber nicht versehentlich in
//      Production gehen, solange das Impressum unvollständig ist.
// -------------------------------------------------------------------------

/** Prüft, ob ein Wert noch ein unausgefüllter Platzhalter ist. */
export function isTodo(value: string): boolean {
  return value.startsWith("TODO —");
}

/**
 * Production-URL. Muss mit `site` in astro.config.mjs und der Sitemap-Zeile in
 * public/robots.txt übereinstimmen.
 */
export const SITE_URL = "https://tina-jocksch.netlify.app";

export const site = {
  name: "Tina Jocksch",
  role: "Social Media Management · Content Creation · Influencer Marketing",
  legalName: "TODO — vollständiger Name laut Gewerbeanmeldung",
  street: "TODO — Straße und Hausnummer",
  zip: "TODO — PLZ",
  city: "Düsseldorf",
  country: "DE",
  email: "TODO — E-Mail-Adresse",
  /** Reine Ziffern mit Ländervorwahl, z. B. 4915112345678 — für wa.me und tel:. */
  phoneDigits: "TODO — Telefonnummer",
  /** Umsatzsteuer-ID, falls vorhanden; sonst Steuernummer oder Kleinunternehmer-Hinweis. */
  vatId: "TODO — USt-IdNr. oder Hinweis auf §19 UStG",
  linkedin: "TODO — LinkedIn-Profil-URL",
  instagram: "https://www.instagram.com/pempelhome/",
  instagramHandle: "@pempelhome",
} as const;

/** Formatierte Telefonnummer für die Anzeige, z. B. +49 151 12345678. */
export function phoneDisplay(): string {
  if (isTodo(site.phoneDigits)) return site.phoneDigits;
  const d = site.phoneDigits;
  return `+${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5)}`;
}

/**
 * Der EINE Call-to-Action der Seite. Wording und Ziel nie variieren — er ist
 * der einzige Handlungsaufruf, damit die Entscheidung nicht zwischen mehreren
 * Angeboten zerfasert.
 */
export const cta = {
  label: "Kennenlern-Call vereinbaren",
  href: "/kontakt/",
  note: "30 Minuten, unverbindlich. Antwort in der Regel innerhalb eines Werktags.",
} as const;

export const nav = [
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/portfolio/", label: "Arbeiten" },
  { href: "/ueber-mich/", label: "Über mich" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;

/** Branchen, auf die die Positionierung zielt — „visuell starke Marken und Orte". */
export const industries = [
  {
    name: "Interior & Home",
    note: "Möbel, Wohnen, Einrichtung — Marken, die über Material und Licht wirken.",
  },
  {
    name: "Hotellerie & Hospitality",
    note: "Boutique-Hotels und Häuser, die vor der Buchung eine Atmosphäre verkaufen.",
  },
  {
    name: "Gastronomie",
    note: "Restaurants, Cafés und Bars, deren Gäste zuerst online entscheiden.",
  },
  {
    name: "Lifestyle & Consumer",
    note: "Produkte, die im Alltag gezeigt werden wollen, nicht im Katalog.",
  },
  {
    name: "D2C & E-Commerce",
    note: "Marken, die ohne Regal auskommen und deshalb Bilder brauchen, die tragen.",
  },
  {
    name: "Agenturen",
    note: "Projektspitzen, Elternzeitvertretung oder Creator-Kampagnen im White Label.",
  },
] as const;
