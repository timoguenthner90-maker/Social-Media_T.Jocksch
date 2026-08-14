// FAQ. Jede Frage kommt aus der Empathy Map bzw. den Persona-Pains
// (docs/6P-Positionierung.md) — keine erfundenen Fragen, die niemand stellt.

export type FaqItem = { q: string; a: string };

export const faq: FaqItem[] = [
  {
    q: "Wie schnell sehen wir Ergebnisse?",
    a: "Sichtbare Veränderung im Feed ab dem ersten Monat, belastbare Zahlen nach etwa drei. Social Media ist kein Kanal, der nach zwei Wochen liefert — wer das verspricht, verkauft Reichweite statt Wirkung. Was Sie sofort merken: Der Aufwand liegt nicht mehr bei Ihnen.",
  },
  {
    q: "Wie messen Sie den Erfolg?",
    a: "Wir legen zu Beginn zwei bis drei Kennzahlen fest, die zu Ihrem Ziel passen — Reichweite und Profilaufrufe bei Bekanntheit, Interaktionen und gespeicherte Beiträge bei Community-Aufbau, Klicks und Anfragen bei Buchungen oder Verkäufen. Jeden Monat bekommen Sie diese Zahlen mit Einordnung, auch wenn sie mal schlechter aussehen.",
  },
  {
    q: "Welche Creator passen zu uns — und woher wissen Sie das?",
    a: "Ich prüfe nicht die Followerzahl, sondern die Überschneidung mit Ihrer Zielgruppe, das bisherige Kooperationsverhalten und ob die Bildsprache zu Ihnen passt. Ein Creator mit 8.000 echten, passenden Followern bringt einer Interior-Marke mehr als einer mit 80.000 beliebigen.",
  },
  {
    q: "Wir haben kein eigenes Bildmaterial. Ist das ein Problem?",
    a: "Nein, das ist der Normalfall. Ich produziere selbst — vor Ort bei Ihnen oder im Studio. Aus einem Produktionstag entsteht in der Regel Material für mehrere Wochen Content.",
  },
  {
    q: "Behalten wir die Kontrolle über Freigaben?",
    a: "Ja. Content geht vor Veröffentlichung durch Ihre Freigabe, solange Sie das möchten. Viele Kunden lockern das nach einigen Monaten, weil die Abstimmung Zeit kostet — aber das ist Ihre Entscheidung, nicht meine.",
  },
  {
    q: "Machen Sie auch Paid Social und Ads?",
    a: "Aktuell nicht als Kernleistung. Ich bilde mich in dem Bereich weiter und ergänze ihn, sobald ich echte Praxiserfahrung vorweisen kann. Bis dahin sage ich lieber, dass ich es nicht anbiete, als es halb zu machen — und empfehle Ihnen bei Bedarf jemanden.",
  },
];
