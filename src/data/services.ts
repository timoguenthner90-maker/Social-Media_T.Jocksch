// Die vier Leistungssäulen und die Pakete.
//
// Grundlage: docs/6P-Positionierung.md (Phase 1 „Produkt", Business Model
// Canvas). Die Reihenfolge ist bewusst gewählt — Social Media Management steht
// vorn, weil daraus die Retainer entstehen; Beratung steht hinten, weil sie das
// kleinste Einstiegsformat ist.

export type Pillar = {
  slug: string;
  /** Kurzform für Übersichten und Navigation. */
  name: string;
  /** Was der Kunde davon hat — nicht, was ich tue. */
  claim: string;
  body: string;
  items: string[];
  img: string;
  imgAlt: string;
};

export const pillars: Pillar[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    claim: "Ihr Auftritt läuft, ohne dass Sie ihn tragen müssen.",
    body: "Ich entwickle die Strategie, plane die Inhalte, schreibe die Texte, veröffentliche und betreue die Community. Einmal im Monat legen wir gemeinsam offen, was funktioniert hat und was als Nächstes dran ist.",
    items: [
      "Strategie, Kanalauswahl und Redaktionsplanung",
      "Copywriting für Feed, Reels und Stories",
      "Veröffentlichung und Community Management",
      "Monatliches Reporting mit klaren KPIs",
    ],
    img: "interior-wohnraum",
    imgAlt:
      "Heller Wohnraum mit Bouclé-Sofa und großer Fensterfront — Beispiel für geplanten Feed-Content",
  },
  {
    slug: "content-creation",
    name: "Content Creation & UGC",
    claim: "Bilder und Reels, die aussehen wie Ihre Marke.",
    body: "Ich produziere vor Ort: in Ihrem Haus, Ihrem Restaurant, Ihrem Showroom. Konzept, Dreh, Schnitt und finale Fassung kommen aus einer Hand — keine Übergabe, bei der die Bildsprache verloren geht.",
    items: [
      "Reels und Shortform Video, inklusive Schnitt",
      "Foto: Produkt, Detail, Interior, Atmosphäre",
      "Vor-Ort-Content in Ihren Räumen",
      "UGC im authentischen Look statt Werbeoptik",
    ],
    img: "bts-set",
    imgAlt:
      "Studioaufbau mit Sofa, Stativen und Dauerlicht während einer Interior-Produktion",
  },
  {
    slug: "creator-marketing",
    name: "Influencer & Creator Marketing",
    claim: "Creator-Kampagnen, die keine Blackbox sind.",
    body: "Ich suche passende Profile, prüfe sie auf echte Reichweite und Markenfit, übernehme Ansprache und Verhandlung, schreibe die Briefings, gebe Inhalte frei und werte die Kampagne aus. Sie sehen jeden Schritt.",
    items: [
      "Creator-Recherche und Screening auf echte Reichweite",
      "Outreach, Verhandlung und Briefing",
      "Content-Freigaben und Kampagnensteuerung",
      "Auswertung: Reichweite, Engagement, Wirkung",
    ],
    img: "tina-work",
    imgAlt: "Dreh mit Gimbal während einer Content-Produktion im Studio",
  },
  {
    slug: "strategie-support",
    name: "Strategie & Projekt-Support",
    claim: "Manchmal braucht es kein Retainer, sondern Klarheit.",
    body: "Ein Audit zeigt, wo Ihr Auftritt steht und was als Nächstes dran ist. Und wenn ein Projekt Spitzen hat, springe ich operativ ein — auch für Agenturen im White Label.",
    items: [
      "Social-Media-Audit mit konkreten Empfehlungen",
      "Strategie-Sparring auf Zuruf",
      "Freelancer-Unterstützung für Agenturen",
      "Projektmanagement für Kampagnen",
    ],
    img: "bts-studio",
    imgAlt: "Große Studiofläche mit aufgebautem Set vor der Produktion",
  },
];

/** Der Creator-Prozess, sichtbar gemacht. Acht Schritte, keine Blackbox. */
export const creatorProcess = [
  {
    step: "Recherche",
    text: "Passende Creator für Ihre Marke, Ihre Region und Ihr Thema — nicht die mit den größten Zahlen.",
  },
  {
    step: "Screening",
    text: "Prüfung auf echte Reichweite, Zielgruppenüberschneidung und bisherige Kooperationen.",
  },
  {
    step: "Outreach",
    text: "Erstansprache, Verfügbarkeit, Interesse und grober Rahmen.",
  },
  {
    step: "Verhandlung",
    text: "Leistungen, Nutzungsrechte, Laufzeit und Honorar — schriftlich fixiert.",
  },
  {
    step: "Briefing",
    text: "Klare Vorgaben zu Botschaft, Tonalität und Do's & Don'ts, ohne die Handschrift des Creators zu ersticken.",
  },
  {
    step: "Contentabnahme",
    text: "Sichtung und Freigabe vor Veröffentlichung. Sie behalten die Kontrolle.",
  },
  {
    step: "Kampagnensteuerung",
    text: "Timing, Nachfassen, Krisenfälle. Ich bin die Schnittstelle, nicht Sie.",
  },
  {
    step: "Reporting",
    text: "Was hat die Kampagne gebracht — in Zahlen und in Einordnung.",
  },
];

export type Paket = {
  name: string;
  from: string;
  unit: string;
  /** Für wen dieses Paket gedacht ist. */
  fit: string;
  includes: string[];
};

/**
 * Preise: Startpunkte, netto zzgl. USt.
 *
 * Einordnung aus der Konkurrenzanalyse (docs/6P-Positionierung.md): Die
 * öffentlich sichtbaren Tagessätze vergleichbarer Freelancerinnen in Düsseldorf
 * liegen zwischen 275 € und 700 €. Die Positionierung liegt bewusst am oberen
 * Ende — begründet durch die Kombination aus Strategie, eigener Produktion und
 * Creator Marketing, die im Wettbewerb sonst niemand vollständig abdeckt.
 */
export const pakete: Paket[] = [
  {
    name: "Social-Media-Retainer",
    from: "1.890 €",
    unit: "pro Monat",
    fit: "Für Marken, die ihren Auftritt dauerhaft abgeben wollen.",
    includes: [
      "Strategie und laufende Redaktionsplanung",
      "Content-Produktion im vereinbarten Umfang",
      "Veröffentlichung, Community, Monatsreporting",
    ],
  },
  {
    name: "Content- & UGC-Paket",
    from: "990 €",
    unit: "pro Produktionstag",
    fit: "Für Marken, die Material brauchen — mit oder ohne laufende Betreuung.",
    includes: [
      "Konzept und Shotlist vorab",
      "Produktionstag vor Ort oder im Studio",
      "Schnitt, finale Fassungen, Nutzungsrechte",
    ],
  },
  {
    name: "Influencer-Kampagne",
    from: "1.900 €",
    unit: "Projektfee je Kampagne",
    fit: "Für Marken, die mit Creatorn arbeiten wollen, ohne es selbst zu steuern.",
    includes: [
      "Creator-Recherche, Screening und Auswahl",
      "Outreach, Verhandlung und Briefing",
      "Kampagnensteuerung und Auswertung",
    ],
  },
  {
    name: "Social-Media-Audit",
    from: "950 €",
    unit: "Festpreis",
    fit: "Für Teams, die selbst umsetzen — aber wissen wollen, wo sie stehen.",
    includes: [
      "Analyse von Auftritt, Formaten und Wettbewerb",
      "Konkrete Empfehlungen, priorisiert",
      "Dokumentation zum Weiterarbeiten",
    ],
  },
  {
    name: "Interim- & Projekt-Support",
    from: "650 €",
    unit: "pro Tag",
    fit: "Für Agenturen und Marketingteams mit Projektspitzen.",
    includes: [
      "Operative Unterstützung im Tagesgeschäft",
      "Kampagnen- und Projektmanagement",
      "Creator-Handling im White Label",
    ],
  },
];

/**
 * Ablauf der Zusammenarbeit — beantwortet „Wie einfach ist der Einstieg?".
 * Steht nur noch auf der Kontaktseite; auf der Leistungsseite war er eine
 * Dopplung und hat sie unnötig lang gemacht.
 */
export const ablauf = [
  {
    step: "Kennenlern-Call",
    text: "30 Minuten, unverbindlich. Wo stehen Sie, was ist das Ziel, was ist realistisch.",
  },
  {
    step: "Angebot",
    text: "Schriftlich, mit klarem Leistungsumfang und Preis — meist innerhalb von drei Werktagen.",
  },
  {
    step: "Start",
    text: "Strategie und Setup, dann Produktion, Veröffentlichung und monatliches Reporting.",
  },
];
