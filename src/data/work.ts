// Content-Beispiele.
//
// Wichtig für die Einordnung: Content-Produktion ist NICHT das Hauptgeschäft.
// Verkauft wird die laufende Betreuung eines Kanals; diese Beispiele belegen
// nur, dass Material auch selbst entstehen kann, wenn keins da ist. Der
// Abschnitt steht deshalb hinter dem Angebot und nicht davor.
//
// Zwei Formate sind fertig, das Carousel ist in Arbeit und steht als ehrlich
// benannter Platzhalter — eine erfundene Kachel wäre schlechter als eine leere.
//
// Die Zahlen stammen von Tina (Stand 15.08.2026) und beziehen sich auf
// @pempelhome. Der Account läuft erst seit Mitte Juni 2026.

export type Beispiel = {
  nummer: string;
  kategorie: string;
  titel: string;
  text: string;
  /** Dateiname ohne Endung in public/video — für Bewegtbild. */
  video?: string;
  /** Dateiname ohne Endung in public/img — für einen Foto-Post. */
  bild?: string;
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
    text: "Ein Möbelstück im Alltag statt im Katalog: aufgebaut, benutzt, gezeigt, nah an der Kaufentscheidung.",
    video: "produkt-reel",
    alt: "Standbild aus dem Produktvideo: Aufbau eines Beistelltisches neben einem hellen Sofa",
    zahlen: [
      { wert: "6.300", label: "Views" },
      { wert: "143", label: "Likes" },
    ],
  },
  {
    nummer: "03",
    kategorie: "Feed Post",
    titel: "Foto-Post",
    text: "Licht, Material, Raum: ein ruhiger Beitrag zwischen den Reels. Das Format, das einem Profil Struktur gibt, statt nur Reichweite zu jagen.",
    bild: "post-sofa",
    alt: "Cord-Sofa mit gestapelten Kissen im Sonnenlicht vor bodenlangen Vorhängen",
  },
  {
    // Weder video noch bild gesetzt → rendert als ehrlicher Platzhalter
    // ("Folgt"), kein erfundener Screenshot. Vervollständigt die Reihe auf
    // vier Beispiele, damit das Raster zu den Feed-Transformations-Paaren
    // weiter unten passt (dieselbe feste Mockup-Breite, --phone-w).
    nummer: "04",
    kategorie: "Coming Soon",
    titel: "Carousel",
    text: "Mehrteiliger Post für Wissen, Vorher-Nachher oder Produktdetails. Entsteht als Nächstes.",
  },
];

/** Kontext zum Account. Bewusst als Fußnote, nicht als eigener Abschnitt. */
export const accountHinweis = {
  handle: "@pempelhome",
  text: "Mein eigener Account seit Mitte Juni 2026, aktuell 490 Follower. Er ist mein Testfeld: Hier probiere ich Formate, Schnitt und Trends unter realen Bedingungen aus, bevor ich sie in einen Redaktionsplan schreibe.",
  tags: ["Interior Content", "Reels", "Trend Research", "Editing"],
};
