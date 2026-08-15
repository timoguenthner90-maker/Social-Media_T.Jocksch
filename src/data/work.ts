// Content-Beispiele.
//
// Drei Formate, die zeigen, was ich produziere. Zwei sind fertig und liegen als
// Video vor, das Carousel ist noch in Arbeit und steht als ehrlich benannter
// Platzhalter — eine erfundene Kachel wäre schlechter als eine leere.
//
// Die Zahlen stammen von Tina (Stand 15.08.2026) und beziehen sich auf
// @pempelhome. Sie werden bewusst klein gehalten: Der Account ist ein
// Arbeitsbeispiel, kein Aushängeschild — er läuft erst seit Mitte Juni 2026.

export type Beispiel = {
  nummer: string;
  kategorie: string;
  titel: string;
  text: string;
  /** Dateiname ohne Endung in public/video; fehlt, wenn das Format noch entsteht. */
  video?: string;
  alt?: string;
  zahlen?: { wert: string; label: string }[];
};

export const beispiele: Beispiel[] = [
  {
    nummer: "01",
    kategorie: "Social Creative",
    titel: "Trend-Reel",
    text: "Ein Trend-Audio, konsequent auf die eigene Bildsprache gezogen. Schnitt und Timing entscheiden hier über alles.",
    video: "trend-reel",
    alt: "Standbild aus dem Trend-Reel: Wohnraum unter der Dachschräge, im Vordergrund eine Grünpflanze",
    zahlen: [
      { wert: "47.500", label: "Views" },
      { wert: "3.920", label: "Likes" },
    ],
  },
  {
    nummer: "02",
    kategorie: "Product Content",
    titel: "Produkt-Empfehlung",
    text: "Ein Möbelstück im Alltag statt im Katalog: aufgebaut, benutzt, gezeigt — nah an der Kaufentscheidung.",
    video: "produkt-reel",
    alt: "Standbild aus dem Produktvideo: Aufbau eines Beistelltisches neben einem hellen Sofa",
    zahlen: [
      { wert: "6.300", label: "Views" },
      { wert: "143", label: "Likes" },
    ],
  },
  {
    nummer: "03",
    kategorie: "Editorial",
    titel: "Carousel",
    text: "Mehrteiliger Post für Wissen, Vorher-Nachher oder Produktdetails — das Format mit der längsten Verweildauer.",
  },
];

/** Kontext zum Account. Bewusst als Fußnote, nicht als eigener Abschnitt. */
export const accountHinweis = {
  handle: "@pempelhome",
  text: "Eigenes Projekt seit Mitte Juni 2026, aktuell 490 Follower. Ich nutze den Account als Testfeld für Formate, Schnitt und Trends — mit denselben Werkzeugen, die ich für Kundenmarken einsetze.",
  tags: ["Interior Content", "Reels", "Trend Research", "Editing"],
};
