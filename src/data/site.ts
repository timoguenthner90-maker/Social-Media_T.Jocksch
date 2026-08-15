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
  // Reihenfolge ist Positionierung: Strategie und laufende Betreuung zuerst,
  // Creator Marketing als zweite Säule. Content produziere ich, wenn er fehlt —
  // aber ich bin keine UGC-Creatorin, und die Zeile soll das nicht suggerieren.
  role: "Social Media Strategie · Redaktion & Community · Creator Partnerships",
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
 * Das Medium im Hero. Der Slot nimmt beides auf — sobald das Hintergrundvideo
 * fertig ist, reicht hier eine Zeile:
 *
 *   1. Datei als public/video/hero.mp4 ablegen (Hochformat 9:16 passt, der
 *      Slot ist hochformatig; ein Querformat wird mittig beschnitten)
 *   2. `art: "video"` setzen und `name: "hero"`
 *   3. Ein Standbild als public/img/hero-poster.webp hinterlegen, damit vor dem
 *      Laden nichts springt — `npm run images` erzeugt es mit.
 *
 * Das Video läuft stumm, in Schleife und ohne Bedienelemente. Bei
 * `prefers-reduced-motion` zeigt der Browser nur das Standbild.
 */
export const heroMedia = {
  art: "bild" as "bild" | "video",
  name: "hero-studio",
  alt: "Studioaufbau mit Sofa und Dauerlicht während einer Content-Produktion",
} as const;

/**
 * Anker-Navigation. Die Seite ist ein One-Pager — jeder Punkt springt zu einer
 * Sektion, nicht auf eine Unterseite. Englische Labels wie in Tinas Entwurf.
 *
 * Reihenfolge: erst belegen (experience), dann das Angebot mit Preis
 * (services), dann die Content-Beispiele, dann die Person.
 *
 * Verkauft wird die laufende Betreuung eines Kanals — dafür ist der Track
 * Record das stärkste Argument, nicht ein Reel. Die Beispiele stehen deshalb
 * hinter dem Angebot: Sie belegen, dass Content auch selbst produziert werden
 * kann, sind aber nicht das Hauptgeschäft.
 */
export const nav = [
  { href: "#erfahrung", label: "experience" },
  { href: "#leistungen", label: "services" },
  { href: "#arbeiten", label: "creative work" },
  { href: "#about", label: "about" },
  { href: "#kontakt", label: "contact" },
] as const;

/**
 * Laufband unter dem Hero. Reine Dekoration — es steht `aria-hidden`, weil die
 * Begriffe sonst doppelt vorgelesen würden; inhaltlich stehen sie ohnehin in
 * den Leistungen. Bei `prefers-reduced-motion` steht das Band still.
 */
export const laufband = [
  "Social Media Strategy",
  "Audit",
  "Redaktionsplanung",
  "Community Management",
  "Creator Partnerships",
  "Campaign Management",
  "Reporting",
  "Content Planning",
  "Reels",
] as const;
