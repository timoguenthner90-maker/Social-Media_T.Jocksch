// Arbeiten und Cases.
//
// Wichtig: Hier stehen ausschließlich Aussagen, die belegt sind. Es liegen
// (Stand 14.08.2026) keine Kennzahlen zu @pempelhome und keine externen
// Kundenprojekte vor — deshalb beschreibt der Case Vorgehen und Formate statt
// Ergebnisse, und es gibt keine Testimonials. Sobald echte Zahlen oder ein
// Kundenzitat vorliegen, gehören sie hierher; sie sind der stärkste Hebel der
// ganzen Seite.

export type CaseImage = { file: string; alt: string };

export const pempelhome = {
  handle: "@pempelhome",
  title: "Interior-Account von null aufgebaut",
  lead: "Mein eigener Interior-Account, seit Sommer 2026 im Aufbau. Er ist Proof of Work und Labor zugleich: Hier teste ich Formate, Schnitt, Trends und Accountaufbau unter realen Bedingungen — mit denselben Werkzeugen, die ich für Kundenmarken einsetze.",
  blocks: [
    {
      label: "Ausgangslage",
      text: "Kein Publikum, kein Archiv, kein Budget. Eine Wohnung, ein Handy und ein klarer ästhetischer Rahmen.",
    },
    {
      label: "Vorgehen",
      text: "Feste Bildsprache definiert, Formate auf wiederkehrende Serien heruntergebrochen, Shortform-Video als Hauptformat gesetzt und nach festem Rhythmus veröffentlicht — statt nach Tagesform.",
    },
    {
      label: "Formate",
      text: "Room-Tours, Detail- und Materialaufnahmen, Styling-Prozesse, Vorher-Nachher und Produkte im Alltag statt im Katalog.",
    },
    {
      label: "Was ich daraus mitnehme",
      text: "Was in den ersten drei Sekunden hält, welche Schnittlängen tragen und wie viel Planung ein Account verträgt, bevor er beliebig wirkt.",
    },
  ],
  images: [
    {
      file: "case-wohnraum",
      alt: "Wohnraum unter Dachschräge mit hellem Sofa, Pflanzen und Dachfenstern",
    },
    {
      file: "case-detail",
      alt: "Detailaufnahme: Tulpen in Glasvase auf einem Tablett vor Cord-Sofa",
    },
    {
      file: "case-licht",
      alt: "Nachmittagslicht über einem Sofa unter der Dachschräge",
    },
    {
      file: "case-spiegel",
      alt: "Wohnraum mit Spiegel, Pflanzen und indirektem Licht",
    },
  ] as CaseImage[],
} as const;

/** Reels — laden erst beim Klick, das Poster trägt die Vorschau. */
export const reels = [
  {
    file: "reel-sofa",
    title: "Room-Tour",
    text: "Sonnenlicht auf Cord — eine Kamerafahrt, ein Schnitt, kein Effekt.",
    alt: "Standbild aus einem Reel: Cord-Sofa im Sonnenlicht am Fenster",
  },
  {
    file: "reel-material",
    title: "Materialstudie",
    text: "Stoffmuster im Wechsel. Das Format, das Interior-Marken am zuverlässigsten hält.",
    alt: "Standbild aus einem Reel: Stoffmuster in Bouclé, Cord und Fell auf hellem Untergrund",
  },
  {
    file: "reel-studio",
    title: "Behind the Scenes",
    text: "Set-Aufbau im Studio — Produktionsalltag als Content genutzt.",
    alt: "Standbild aus einem Reel: große Studiofläche mit Lichtsetzung und Sofa-Set",
  },
  {
    file: "reel-showroom",
    title: "Showroom-Stimmung",
    text: "Farbiges Licht auf Leder. Wie ein Möbelstück zur Szene wird.",
    alt: "Standbild aus einem Reel: Ledersofa in farbigem Licht",
  },
];

/**
 * Vier Bilder für die Startseite. Bewusst gemischt statt vier Aufnahmen aus
 * derselben Wohnung: Der Teaser soll Bandbreite zeigen — Wohnraum, Produktion,
 * Materialdetail, Markenaufnahme — und nicht wie eine einzige Serie wirken.
 */
export const startseiteTeaser: CaseImage[] = [
  {
    file: "case-wohnraum",
    alt: "Wohnraum unter Dachschräge mit hellem Sofa, Pflanzen und Dachfenstern",
  },
  {
    file: "interior-garten",
    alt: "Cord-Sofa vor einer Fensterfront mit Blick in den Garten",
  },
  {
    file: "bts-set",
    alt: "Studioaufbau mit Sofa, Stativen und Dauerlicht während einer Produktion",
  },
  {
    file: "interior-textur",
    alt: "Nahaufnahme eines Bouclé-Bezugs mit Faltenwurf",
  },
];

/** Weitere Arbeiten — Produktionen für Interior- und Möbelmarken. */
export const arbeiten: CaseImage[] = [
  {
    file: "interior-boucle",
    alt: "Bouclé-Sofa mit Kissen im Tageslicht, Detailaufnahme",
  },
  {
    file: "interior-garten",
    alt: "Cord-Sofa vor einer Fensterfront mit Blick in den Garten",
  },
  {
    file: "interior-wohnraum",
    alt: "Großer Wohnraum mit modularem Sofa und bodentiefen Fenstern",
  },
  {
    file: "interior-fenster",
    alt: "Modulares Sofa vor einer verglasten Wand mit Grünblick",
  },
  {
    file: "interior-pflanze",
    alt: "Helles Sofa hinter einer Grünpflanze, weiches Gegenlicht",
  },
  { file: "interior-regal", alt: "Sofa vor einem Holzregal mit Keramikobjekten" },
  {
    file: "interior-lampen",
    alt: "Papierleuchten über einem dunklen Sofa am Fenster",
  },
  {
    file: "interior-textur",
    alt: "Nahaufnahme eines Bouclé-Bezugs mit Faltenwurf",
  },
  {
    file: "bts-licht",
    alt: "Dauerlicht und Stative um ein Sofa während einer Studioproduktion",
  },
  {
    file: "bts-spiegel",
    alt: "Studio mit Spiegelwand, Lichtsetzung und Equipment",
  },
];
