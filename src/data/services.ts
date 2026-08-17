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

/**
 * Die Gewichtung ist Absicht: Verkauft wird die laufende Betreuung eines
 * Kanals — Strategie, Audit, Redaktionsplanung, Posting und Community. Creator
 * Marketing ist die zweite Säule. Content-Produktion ist eine Fähigkeit, die
 * dazukommt, wenn Material fehlt, aber kein eigenständiges Angebot: Tina ist
 * keine UGC-Creatorin, die Assets für fremde Marken produziert.
 */
// Jeder Text folgt derselben kurzen Form: ein Satz Pain Point, ein Satz
// Angebot. Bewusst knapp gehalten — die Tags darunter tragen die Prozess-
// Details, der Fließtext muss das nicht wiederholen.
export const leistungen: Leistung[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    text: "Social Media läuft bei den meisten Marken nebenbei mit — dabei steckt hinter einem Kanal, der wirklich funktioniert, mehr als eine spontane Idee für die Woche. Ich übernehme Strategie, Redaktionsplanung, Posting und Community, damit daraus ein System wird statt Wochenstress.",
    tags: [
      "Strategy",
      "Audit",
      "Redaktionsplanung",
      "Community Management",
      "Reporting",
    ],
  },
  {
    slug: "creator-partnerships",
    name: "Creator Partnerships",
    text: "Die falschen Creator kosten Budget, ohne etwas zu bringen — und die richtige Auswahl braucht Zeit, die selten da ist. Ich übernehme Recherche, Ansprache, Verhandlung und Steuerung, du bekommst passende Kooperationen ohne den Aufwand.",
    tags: ["Creator Research", "Outreach", "Campaign Management", "Reporting"],
  },
  {
    slug: "content-creation",
    name: "Content",
    text: "Ohne eigenes Material wirkt ein Feed schnell beliebig — professionelle Fotos und Reels fehlen meist an Zeit, nicht an Ideen. Wenn nötig, produziere ich sie selbst, plattformgerecht und im Look der Marke.",
    tags: ["Reels", "Short Form Video", "Content Planning"],
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
 *   Social Media Audit          1,5 Tage  →    950 €
 *   Social Media Management     2,5 Tage  →  1.590 € / Monat
 *   Management + Content        4,5 Tage  →  2.890 € / Monat
 *   Creator Partnerships        3   Tage  →  1.950 € / Kampagne
 *
 * Das liegt über Tinas erstem Entwurf (850 / 1.200 / 2.200 / 1.300 €). Der
 * Grund: Bei 1.200 € Monatspauschale wären für Strategie, Redaktionsplan,
 * Posting auf zwei Kanälen, Community und Reporting keine zwei Arbeitstage
 * gedeckt — das ist auf Dauer nicht tragfähig und signalisiert zudem das
 * Junior-Segment, aus dem sich die Positionierung gerade abgrenzen soll.
 *
 * Das reine Content-Paket aus dem ersten Entwurf ist bewusst entfallen: Es
 * stellte die Produktion an den Anfang und ließ das Angebot nach UGC-Creatorin
 * aussehen. An seine Stelle tritt das Audit — der kleinste sinnvolle Einstieg
 * in eine Zusammenarbeit und zugleich der beste Türöffner für einen Retainer.
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
    name: "Social Media Audit",
    was: "Standortbestimmung für Marken, die selbst umsetzen — oder wissen wollen, wo sie stehen.",
    preis: "950 €",
    einheit: "einmalig",
    enthalten: [
      "Analyse von Auftritt, Formaten und Zielgruppe",
      "Wettbewerbsvergleich",
      "Priorisierte Handlungsempfehlungen",
      "Dokumentation zum Weiterarbeiten",
      "Auswertungs-Call",
    ],
    nichtEnthalten: ["Keine laufende Betreuung"],
    hinweis: "Wird bei einem anschließenden Retainer voll angerechnet.",
  },
  {
    nummer: "02",
    name: "Social Media Management",
    was: "Laufende Kanalbetreuung für Brands mit vorhandenem Content.",
    preis: "1.590 €",
    einheit: "ab / Monat",
    enthalten: [
      "Social-Media-Strategie",
      "Redaktions- & Contentplan",
      "Posting auf bis zu 2 Kanälen",
      "Caption & Copywriting",
      "Community Management",
      "Monatliches Reporting",
    ],
    nichtEnthalten: ["Keine Content-Produktion"],
  },
  {
    nummer: "03",
    name: "Management + Content",
    was: "Laufende Betreuung samt Produktion — wenn kein eigenes Material da ist.",
    preis: "2.890 €",
    einheit: "ab / Monat",
    enthalten: [
      "Alles aus Social Media Management",
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
