// Zentrale Stammdaten. EINZIGE Quelle für Kontakt, Navigation und den CTA.
//
// Die Kontaktdaten stammen aus dem Lebenslauf (CV-Tina-Jocksch.pdf) und aus
// Tinas eigenem Seitenentwurf. Offen ist nur noch die Steuerangabe — sie trägt
// deshalb den Präfix "TODO — ":
//   1. In der Vorschau springt sie sofort ins Auge.
//   2. Komponenten rendern sie als Text statt als Link.
//   3. scripts/verify.mjs bricht ab, sobald ein solcher Wert im Build landet.

/** Prüft, ob ein Wert noch ein unausgefüllter Platzhalter ist. */
export function isTodo(value: string): boolean {
  return value.startsWith("TODO —");
}

/**
 * Production-URL. Muss mit `site` in astro.config.mjs und der Sitemap-Zeile in
 * src/pages/robots.txt.ts übereinstimmen.
 */
export const SITE_URL = "https://tina-jocksch.netlify.app";

export const site = {
  name: "Tina Jocksch",
  role: "Social Media Management · Creator Partnerships · Content Creation",
  legalName: "Tina Jocksch",
  street: "Tußmannstraße 37",
  zip: "40477",
  city: "Düsseldorf",
  country: "DE",
  email: "t.jocksch@web.de",
  /** Reine Ziffern mit Ländervorwahl — Grundlage für wa.me und tel:. */
  phoneDigits: "491731846230",
  phoneDisplay: "+49 173 18 46 230",
  /** Umsatzsteuer-ID, Steuernummer oder Hinweis auf die Kleinunternehmerregelung. */
  vatId: "TODO — USt-IdNr., Steuernummer oder Hinweis auf §19 UStG",
  linkedin: "https://www.linkedin.com/in/tina-jocksch/",
  /**
   * Der private Instagram-Account bleibt privat (so in der Strategie
   * festgehalten). Verlinkt wird ausschließlich der Interior-Account, der als
   * Arbeitsbeispiel dient.
   */
  instagram: "https://www.instagram.com/pempelhome/",
  instagramHandle: "@pempelhome",
} as const;

/**
 * Der EINE Call-to-Action. Wording und Ziel nie variieren — die Seite ist ein
 * One-Pager, das Ziel ist immer der Kontaktabschnitt.
 */
export const cta = {
  label: "Let's work together",
  href: "#kontakt",
  note: "Unverbindlich. Antwort in der Regel innerhalb eines Werktags.",
} as const;

/**
 * Anker-Navigation. Die Seite ist ein One-Pager — jeder Punkt springt zu einer
 * Sektion, nicht auf eine Unterseite. Englische Labels wie in Tinas Entwurf.
 */
export const nav = [
  { href: "#about", label: "about" },
  { href: "#leistungen", label: "what I do" },
  { href: "#erfahrung", label: "experience" },
  { href: "#arbeiten", label: "creative work" },
  { href: "#pakete", label: "services" },
  { href: "#kontakt", label: "contact" },
] as const;
