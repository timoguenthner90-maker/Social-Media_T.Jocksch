import type { APIRoute } from "astro";
import { SITE_URL, site, isTodo } from "../data/site";

/**
 * robots.txt wird erzeugt statt statisch abgelegt — abhängig davon, ob die
 * Stammdaten vollständig sind.
 *
 * Solange im Impressum Platzhalter stehen, ist die Seite technisch erreichbar
 * (die Preview soll ja angesehen werden), aber für Suchmaschinen gesperrt. Eine
 * deutsche Geschäftsseite mit unvollständigem Impressum gehört nicht in den
 * Index. Sobald die Angaben in src/data/site.ts gefüllt sind, gibt der nächste
 * Build die Seite von selbst frei — es kann also nicht vergessen werden.
 */
const unvollstaendig = [
  site.legalName,
  site.street,
  site.zip,
  site.email,
  site.vatId,
].some(isTodo);

export const GET: APIRoute = () => {
  const body = unvollstaendig
    ? `# Vorschau-Stand: Das Impressum ist noch unvollständig.
# Bis dahin bleibt die Seite aus dem Index. Siehe SPEC.md, Abschnitt 7.
User-agent: *
Disallow: /
`
    : `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
