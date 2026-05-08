import { SITE } from "@/lib/site";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: "SRExperts",
  url: SITE.url,
  logo: `${SITE.url}/icon.svg`,
  email: SITE.email,
  description: SITE.description,
  slogan: SITE.tagline,
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [...SITE.practices, ...SITE.industries],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advisory Practices",
    itemListElement: SITE.practices.map((practice, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: practice },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE.url}#organization` },
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
