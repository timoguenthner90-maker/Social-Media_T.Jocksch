// Leistungen und Pakete.
//
// Beides stammt aus Tinas eigenem Seitenentwurf (~/Desktop/Eigene Website
// Tina/webseite vorlage) und wird hier unverändert übernommen — inklusive der
// Preise und der bewusst benannten Ausschlüsse. Wo etwas NICHT enthalten ist,
// steht das mit dabei: Ein Angebot, das seine Grenzen zeigt, erzeugt weniger
// Rückfragen und keine Enttäuschung im dritten Monat.

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
    preis: "850 €",
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
    preis: "1.200 €",
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
    preis: "2.200 €",
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
    preis: "1.300 €",
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
  "Alle Preise netto zzgl. Umsatzsteuer. Der genaue Umfang hängt von Kanälen, Frequenz und Produktionsaufwand ab — den bekommst du nach dem Erstgespräch schriftlich.";
