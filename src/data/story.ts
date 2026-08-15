// StoryBrand-Bausteine: Problem, Plan und Ergebnis.
//
// Der Aufbau folgt Donald Millers Framework: Der Kunde ist der Held, nicht die
// Anbieterin. Die Seite muss also zuerst SEIN Problem benennen, bevor sie über
// Leistungen spricht — sonst erkennt er sich nicht wieder und liest nicht
// weiter.
//
// Wichtig für die Tonalität: keine Angstmache und keine rhetorischen Fragen
// („Kennst du das?"). Die Zielgruppe sind Marketingverantwortliche und
// Inhaberinnen; die reagieren auf Sachlichkeit, nicht auf Druck. Die Zitate
// unten stehen deshalb für sich, ohne Zuspitzung.

/**
 * Die Sätze der Zielgruppe — wörtlich aus der Empathy Map (Canvas v1.0).
 * Nicht umformuliert: Wiedererkennung entsteht durch den Originalton.
 */
export const problemZitate = [
  "Uns fehlt einfach die Zeit.",
  "Wir müssten viel regelmäßiger posten.",
  "Es soll hochwertig aussehen, aber trotzdem echt.",
  "Was bringt uns das eigentlich messbar?",
];

/**
 * Der Schluss der Problem-Sektion. Das ist der Einsatz („stakes") — bewusst
 * ein einzelner sachlicher Satz statt einer Drohkulisse.
 */
export const problemText = {
  lead: "Die meisten Marken, mit denen ich spreche, sagen ungefähr dasselbe:",
  schluss:
    "Es fehlt selten an Ideen. Es fehlt an Kapazität, an einem Plan und an jemandem, der beides zusammenhält. Und je länger ein Kanal nebenbei mitläuft, desto weiter entfernt er sich von der Marke, für die du eigentlich stehst.",
};

/** Die Empathie-Zeile vor dem Track Record — der Guide zeigt Verständnis, bevor er Autorität zeigt. */
export const guideEmpathie =
  "Sechs Jahre lang habe ich genau diese Kanäle verantwortet — erst im B2B-SaaS, dann für eine Premium-Lifestyle-Marke. Ich weiß, wie schnell Social Media zu der Aufgabe wird, die keiner mehr richtig macht.";

export type PlanSchritt = { nummer: string; titel: string; text: string };

/**
 * Der Plan. Beantwortet die Frage, die bei einem Retainer über 1.590 € im Monat
 * den Abschluss blockiert: Was passiert eigentlich, wenn ich ja sage?
 *
 * Die drei Schritte entsprechen den Paketen — Schritt 1 ist das Audit, Schritt
 * 2 und 3 sind der Retainer.
 */
export const planSchritte: PlanSchritt[] = [
  {
    nummer: "01",
    titel: "Audit",
    text: "Wir sehen uns deinen Kanal an: was funktioniert, was fehlt, was sich lohnt. Du bekommst priorisierte Empfehlungen schriftlich — und weißt danach, woran du bist. Auch wenn wir nicht weitermachen.",
  },
  {
    nummer: "02",
    titel: "Strategie & Redaktionsplan",
    text: "Zielgruppe, Formate, Frequenz und Kennzahlen stehen fest, bevor der erste Beitrag rausgeht. Du siehst vorher, was kommt.",
  },
  {
    nummer: "03",
    titel: "Umsetzung & Reporting",
    text: "Ich plane, texte, veröffentliche und betreue die Community. Einmal im Monat bekommst du Zahlen — und die Entscheidungen für den nächsten Monat.",
  },
];

/** Das Ergebnis. Konkret und überprüfbar, keine Versprechen über Reichweite. */
export const ergebnis = {
  titel: "Was sich ändert",
  punkte: [
    "Der Kanal läuft nach Plan statt nach Tagesform.",
    "Du siehst monatlich, was er gebracht hat — in Zahlen, nicht im Bauchgefühl.",
    "Online sieht die Marke so aus, wie sie offline wirkt.",
  ],
  /**
   * Der kleine Einstieg neben dem Haupt-CTA. Wer sich zu einem Retainer noch
   * nicht durchringt, kann trotzdem einen ersten Schritt gehen — und das Audit
   * führt genau dorthin.
   */
  kleinerEinstieg:
    "Oder fang klein an: Das Audit kostet 950 € und wird bei einem anschließenden Retainer voll angerechnet.",
};
