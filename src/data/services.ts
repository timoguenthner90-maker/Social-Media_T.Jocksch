// Leistungen und Pakete.
//
// Leistungen, Paketzuschnitt und Wortlaut stammen aus Tinas eigenem
// Seitenentwurf (~/Desktop/Eigene Website Tina/webseite vorlage). Die PREISE
// sind dagegen aus der Wettbewerbsanalyse hergeleitet — die Rechnung steht
// unten beim Tagessatz.
//
// Wo etwas NICHT enthalten ist, steht das mit dabei: Ein Angebot, das seine
// Grenzen zeigt, erzeugt weniger Rückfragen und keine Enttäuschung im dritten
// Monat.

export type Leistung = {
  slug: string;
  name: string;
  text: string;
  tags: string[];
};

export const leistungen: Leistung[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    text: "Von der Strategie bis zur Umsetzung: Ich entwickle Social-Media-Auftritte, die zur Marke passen, klar positioniert sind und langfristig funktionieren.",
    tags: ["Strategy", "Content Planning", "Community", "Reporting"],
  },
  {
    slug: "creator-partnerships",
    name: "Creator Partnerships",
    text: "Ich verbinde Marken mit den richtigen Creatorn und begleite Kooperationen von der Auswahl bis zur Auswertung — authentisch, strategisch und zielgerichtet.",
    tags: ["Creator Research", "Outreach", "Campaign Management", "Reporting"],
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    text: "Ästhetischer, plattformgerechter Content für Social Media. Von der Idee über die Produktion bis zum fertigen Reel, Foto oder UGC Asset.",
    tags: ["Reels", "Short Form Video", "UGC", "Content Management"],
  },
];

/* ---------------------------------------------------------------------------
 * PREISE — hergeleitet aus der Wettbewerbsanalyse
 *
 * Öffentlich sichtbare Tagessätze vergleichbarer Freelancerinnen in Düsseldorf
 * (Quelle: docs/6P-Positionierung.md, Abschnitt Wettbewerb):
 *
 *   Luisa Prießnitz    ca. 275 €/Tag   Social + Influencer, Junior-Auftritt
 *   Rahel Faenger      ca. 350 €/Tag   TikTok, Community
 *   Merle Verweyen     ca. 600 €/Tag   breites Angebot, starke Cases
 *   Regina Roos        ca. 660 €/Tag   Rundumbetreuung
 *   Jana Pollrich      ca. 700 €/Tag   Strategie + eigene Fotografie
 *
 * Zwei Segmente: 275–350 € (Junior) und 600–700 € (etabliert). Die Analyse
 * kommt zu dem Schluss, dass die eigene Positionierung NICHT ins untere
 * Segment gehört — sechs Jahre Markenerfahrung, ein selbst aufgebautes
 * Creator-Netzwerk mit 200+ Partnern und eigene Produktion rechtfertigen das
 * obere Band.
 *
 * Anker ist deshalb ein Tagessatz von 650 € — Mitte des etablierten Segments,
 * unter Pollrich, über Verweyen. Alle Pakete sind daraus gerechnet:
 *
 *   Content Studio        1,75 Tage  →  1.150 €
 *   Social Management     2,5  Tage  →  1.590 € / Monat
 *   Social + Content      4,5  Tage  →  2.890 € / Monat
 *   Creator Partnerships  3    Tage  →  1.950 € / Kampagne
 *
 * Das liegt über Tinas erstem Entwurf (850 / 1.200 / 2.200 / 1.300 €). Der
 * Grund: Bei 1.200 € Monatspauschale wären für Strategie, Redaktionsplan,
 * Posting auf zwei Kanälen, Community und Reporting keine zwei Arbeitstage
 * gedeckt — das ist auf Dauer nicht tragfähig und signalisiert zudem das
 * Junior-Segment, aus dem sich die Positionierung gerade abgrenzen soll.
 * ------------------------------------------------------------------------- */

/** Der Anker, aus dem alle Paketpreise gerechnet sind. Auch einzeln buchbar. */
export const tagessatz = {
  preis: "650 €",
  einheit: "pro Tag",
  text: "Für Projektspitzen, Interim-Betreuung oder Freelancer-Support in Agenturen — tageweise abgerechnet.",
};

export type Paket = {
  nummer: string;
  name: string;
  was: string;
  preis: string;
  einheit: string;
  enthalten: string[];
  /** Was ausdrücklich NICHT enthalten ist. */
  nichtEnthalten?: string[];
  hinweis?: string;
};

export const pakete: Paket[] = [
  {
    nummer: "01",
    name: "Content Studio",
    was: "Social-first Content für Brands, Produkte und Kampagnen.",
    preis: "1.150 €",
    einheit: "ab / Projekt",
    enthalten: [
      "3 Short-Form Videos / Reels",
      "Konzept & Creative Direction",
      "Dreh & Editing",
      "1 Feedbackrunde",
      "Organic Usage",
    ],
    nichtEnthalten: ["Kein Posting / Community Management"],
    hinweis: "Auf Anfrage: Paid Usage · Raw Footage · Additional Content",
  },
  {
    nummer: "02",
    name: "Social Management",
    was: "Strategische Kanalbetreuung für Brands mit vorhandenem Content.",
    preis: "1.590 €",
    einheit: "ab / Monat",
    enthalten: [
      "Social Media Strategy",
      "Redaktions- & Contentplan",
      "Posting auf bis zu 2 Kanälen",
      "Caption & Copywriting",
      "Community Management light",
      "Monatliches Reporting",
    ],
    nichtEnthalten: ["Keine Content-Erstellung"],
  },
  {
    nummer: "03",
    name: "Social + Content",
    was: "Social Media Betreuung und Content Creation aus einer Hand.",
    preis: "2.890 €",
    einheit: "ab / Monat",
    enthalten: [
      "Alles aus Social Management",
      "6–8 Content Pieces / Monat",
      "Reels, Posts & Carousels",
      "Konzept, Shooting & Editing",
      "Aktives Community Management",
      "Monatlicher Strategy Call",
    ],
  },
  {
    nummer: "04",
    name: "Creator Partnerships",
    was: "Strategische Creator-Kampagnen von der Auswahl bis zur Auswertung.",
    preis: "1.950 €",
    einheit: "ab / Kampagne",
    enthalten: [
      "Creator Strategy",
      "Creator Research & Selection",
      "Outreach & Negotiation",
      "Briefing & Content Coordination",
      "Campaign Management",
      "Reporting & Learnings",
    ],
    hinweis: "Creator Fees & Media Budget nicht enthalten. Retainer auf Anfrage.",
  },
];

/** Alle Preise netto. Steht einmal unter der Pakettafel. */
export const preishinweis =
  "Alle Preise netto zzgl. Umsatzsteuer und aus einem Tagessatz von 650 € gerechnet. Der genaue Umfang hängt von Kanälen, Frequenz und Produktionsaufwand ab — den bekommst du nach dem Erstgespräch schriftlich.";
