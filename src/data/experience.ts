// Track Record — Kennzahlen, Werkzeuge und Stationen.
//
// Alle Angaben stammen aus dem Lebenslauf (CV-Tina-Jocksch.pdf). Nichts hier ist
// gerundet oder aufgehübscht; wo im CV „ca." steht, steht hier auch „ca.".
//
// Bewusst NICHT auf der Seite: die aktuelle Suchsituation und der Grund für das
// Ende der letzten Anstellung. Beides steht im Lebenslauf und gehört in ein
// Bewerbungsgespräch, nicht auf eine Angebotsseite.

export const kennzahlen = [
  { zahl: "200+", label: "Creator im Netzwerk aufgebaut und betreut" },
  { zahl: "ca. 30 %", label: "Revenue-Anteil durch Influencer-Beteiligung" },
  { zahl: "20–30", label: "laufende Kooperationen pro Monat" },
  { zahl: "6+", label: "Jahre Social & Creator Marketing" },
];

/** Werkzeuge aus dem Lebenslauf, ergänzt um die laufende Weiterbildung. */
export const werkzeuge = [
  "Meta Business Suite",
  "TikTok",
  "CapCut",
  "Canva",
  "Notion & Asana",
  "HubSpot",
  "Shopify",
  "Awin",
  "Iroin",
  "Analytics & Reporting",
];

export type Station = {
  zeit: string;
  firma: string;
  rolle: string;
  /** Das Ergebnis in einem Satz — steht als dunkle Pille über der Beschreibung. */
  ergebnis: string;
  text: string;
  tags: string[];
};

export const stationen: Station[] = [
  {
    zeit: "Nov 2020 — Okt 2025",
    firma: "vetsak",
    rolle: "Creator Marketing Manager · Premium-Lifestyle-Brand (D2C & B2B)",
    ergebnis: "ca. 30 % Revenue-Anteil über Creator-Kampagnen",
    text: "Strategie, Konzeption und Umsetzung ganzheitlicher Social- und Kampagnenkonzepte entlang aller digitalen Touchpoints. Ein Creator-Netzwerk mit 200+ aktiven Partnern von Grund auf aufgebaut und end-to-end geführt — Sourcing, Briefing, Budgetsteuerung, Reporting. Dazu Always-on- und Launch-Kampagnen, Affiliate-Partnerschaften und datenbasierte Formatoptimierung für Instagram und TikTok.",
    tags: ["Creator Marketing", "Social Media Management", "Kampagnensteuerung", "Affiliate"],
  },
  {
    zeit: "Okt 2019 — Okt 2020",
    firma: "Lightspeed HQ",
    rolle: "Associate Content Specialist · SaaS (B2B)",
    ergebnis: "Vier Kanäle, ein durchgängiges Redaktionssystem",
    text: "Operative Betreuung von Instagram, Facebook, LinkedIn und YouTube inklusive wöchentlicher Redaktionsplanung. Kanalübergreifende Lead-Kampagnen in Abstimmung mit Marketing und Vertrieb, plattformgerechte Content-Formate für das Gastronomie- und Retail-Umfeld sowie Content rund um Messe- und Eventauftritte.",
    tags: ["Social Media Management", "Content-Formate", "Lead-Kampagnen", "B2B"],
  },
];

/** Ausbildung und laufende Weiterbildung — kurz gehalten. */
export const ausbildung = {
  studium: "B.A. Business Administration, Hochschule für Wirtschaft und Recht Berlin",
  weiterbildung:
    "Aktuell: Weiterbildung Performance Marketing (SEA, SEO, Meta und KI-Einsatz im Online-Marketing)",
};
