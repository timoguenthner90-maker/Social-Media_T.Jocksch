// Strukturierte Daten (schema.org).
//
// Regel: Was noch ein Platzhalter ist, wird NICHT ausgespielt. Falsche
// Adress- oder Kontaktdaten im JSON-LD landen in Suchmaschinen und sind später
// schwer wieder loszuwerden — ein fehlendes Feld ist harmlos, ein falsches nicht.

import { SITE_URL, site, isTodo } from "./site";
import { faq } from "./faq";
import { pillars } from "./services";

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

const sameAs = [real(site.linkedin), site.instagram].filter(Boolean) as string[];

const address = clean({
  "@type": "PostalAddress",
  streetAddress: real(site.street),
  postalCode: real(site.zip),
  addressLocality: site.city,
  addressCountry: site.country,
});

export const personLd = clean({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: site.name,
  jobTitle: "Social Media Managerin & Creator-Marketing-Expertin",
  description:
    "Freelancerin für Social Media Management, Content Creation und Influencer Marketing — spezialisiert auf visuell starke Marken und Orte.",
  url: SITE_URL,
  email: real(site.email) ? `mailto:${site.email}` : undefined,
  telephone: real(site.phoneDigits) ? `+${site.phoneDigits}` : undefined,
  address,
  sameAs: sameAs.length ? sameAs : undefined,
  knowsAbout: [
    "Social Media Management",
    "Content Creation",
    "Influencer Marketing",
    "Creator Marketing",
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
    "Social Media Management, Content Creation und Influencer Marketing aus einer Hand — für Interior-, Hospitality-, Gastronomie- und Lifestyle-Marken.",
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  founder: { "@id": `${SITE_URL}/#person` },
  email: real(site.email) ? `mailto:${site.email}` : undefined,
  telephone: real(site.phoneDigits) ? `+${site.phoneDigits}` : undefined,
  vatID: real(site.vatId),
  address,
  areaServed: [
    { "@type": "City", name: "Düsseldorf" },
    { "@type": "City", name: "Köln" },
    { "@type": "Country", name: "Deutschland" },
  ],
  priceRange: "€€€",
  sameAs: sameAs.length ? sameAs : undefined,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: pillars.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.name,
        description: p.claim,
        url: `${SITE_URL}/leistungen/#${p.slug}`,
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

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Breadcrumb für Unterseiten — hilft Suchmaschinen bei der Einordnung. */
export function breadcrumbLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
