export const SITE = {
  name: "SR Experts",
  legalName: "SR Experts Advisory LLP",
  tagline: "The Only Expert You Need.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://srexperts.in",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@srexperts.in",
  locale: "en_IN",
  twitter: "@srexperts",
  description:
    "Integrated advisory across strategy, finance, legal, technology, and marketing. The depth of a Big Four. The agility of a partner who picks up the phone.",
  shortDescription:
    "Strategy, finance, legal, technology, and marketing — delivered by one firm.",
  founders: ["SR Experts Partners"],
  serviceArea: ["IN"],
  practices: [
    "Strategy & Management Consulting",
    "Finance, CA & CS Services",
    "Legal & Regulatory Compliance",
    "Technology & Digital Transformation",
    "Marketing & Growth",
  ],
  industries: [
    "Financial Services",
    "Real Estate & Construction",
    "Technology & SaaS",
    "Manufacturing & Industrials",
    "Retail & Consumer",
    "Healthcare & Life Sciences",
    "Professional Services",
  ],
} as const;
