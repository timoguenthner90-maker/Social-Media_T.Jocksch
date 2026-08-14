// Arbeiten und Case.
//
// Wichtig: Hier stehen ausschließlich Aussagen, die belegt sind. Es liegen
// (Stand 14.08.2026) keine Kennzahlen zu @pempelhome und keine externen
// Kundenprojekte vor — deshalb beschreibt der Case Vorgehen und Formate statt
// Ergebnisse, und es gibt keine Testimonials. Sobald echte Zahlen oder ein
// Kundenzitat vorliegen, gehören sie hierher; sie sind der stärkste Hebel der
// ganzen Seite.
//
// Bewusst knapp: vier Bilder und zwei Reels. Eine Auswahl wirkt kuratiert,
// zwanzig Aufnahmen wirken wie ein Kameraordner.

export type CaseImage = { file: string; alt: string };

export const pempelhome = {
  handle: "@pempelhome",
  lead: "Mein eigener Interior-Account, seit Sommer 2026 im Aufbau — Proof of Work und Labor zugleich. Hier teste ich Formate, Schnitt und Accountaufbau unter realen Bedingungen, mit denselben Werkzeugen, die ich für Kundenmarken einsetze: feste Bildsprache, wiederkehrende Serien, Shortform-Video als Hauptformat, Veröffentlichung nach festem Rhythmus statt nach Tagesform.",
} as const;

/** Bildraster im Abschnitt „Arbeiten" auf der Startseite. */
export const arbeiten: CaseImage[] = [
  {
    file: "case-wohnraum",
    alt: "Wohnraum unter Dachschräge mit hellem Sofa, Pflanzen und Dachfenstern",
  },
  {
    file: "interior-garten",
    alt: "Cord-Sofa vor einer Fensterfront mit Blick in den Garten",
  },
  { file: "interior-regal", alt: "Sofa vor einem Holzregal mit Keramikobjekten" },
  {
    file: "interior-textur",
    alt: "Nahaufnahme eines Bouclé-Bezugs mit Faltenwurf",
  },
];

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
];
