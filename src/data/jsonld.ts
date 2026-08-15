// Strukturierte Daten (schema.org).
//
// Regel: Was noch ein Platzhalter ist, wird NICHT ausgespielt. Falsche Adress-
// oder Steuerangaben im JSON-LD landen in Suchmaschinen und sind später schwer
// wieder loszuwerden — ein fehlendes Feld ist harmlos, ein falsches nicht.

import { SITE_URL, site, isTodo } from "./site";
import { leistungen } from "./services";

/** Nur ausgefüllte Werte übernehmen. */
function real(value: string): string | undefined {
  return isTodo(value) ? undefined : value;
}

/** Entfernt alle Schlüssel mit undefined-Wert aus einem Objekt. */
function clean<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as T;
}

const sameAs = [site.linkedin, site.instagram];

const address = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  postalCode: site.zip,
  addressLocality: site.city,
  addressCountry: site.country,
};

export const personLd = clean({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: site.name,
  jobTitle: "Social Media & Creator Marketing Managerin",
  description:
    "Freelancerin für Social Media Management, Creator Partnerships und Content Creation.",
  url: SITE_URL,
  email: `mailto:${site.email}`,
  telephone: `+${site.phoneDigits}`,
  address,
  sameAs,
  alumniOf: "Hochschule für Wirtschaft und Recht Berlin",
  knowsAbout: [
    "Social Media Management",
    "Creator Marketing",
    "Influencer Marketing",
    "Content Creation",
    "User Generated Content",
    "Social-Media-Strategie",
  ],
});

export const businessLd = clean({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: `${site.name} — Social Media & Creator Marketing`,
  description:
    "Social Media Management, Creator Partnerships und Content Creation aus einer Hand.",
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  founder: { "@id": `${SITE_URL}/#person` },
  email: `mailto:${site.email}`,
  telephone: `+${site.phoneDigits}`,
  vatID: real(site.vatId),
  address,
  areaServed: [
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "Country", name: "Deutschland" },
  ],
  priceRange: "€€",
  sameAs,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: leistungen.map((l) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: l.name,
        description: l.text,
        url: `${SITE_URL}/#${l.slug}`,
      },
    })),
  },
});

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  url: SITE_URL,
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#person` },
};

