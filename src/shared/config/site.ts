import { basics, work } from "@/shared/data/cv.json";

const FALLBACK_SITE_URL = "https://alejandrocabeza.dev";
const rawSiteUrl = (import.meta.env.PUBLIC_SITE_URL ??
  FALLBACK_SITE_URL) as string;
const normalizedSiteUrl = rawSiteUrl.replace(/\/$/, "");

const displayName = basics.name || "Alejandro Cabeza";
const defaultDescription =
  "Senior Backend Engineer con 3+ años edificando arquitecturas escalables y APIs de alto rendimiento. Especializado en Node.js, PHP, PostgreSQL y soluciones Cloud/DevOps.";

const keywords = [
  "desarrollador backend",
  "backend engineer",
  "node.js",
  "nestjs",
  "express",
  "typescript",
  "laravel",
  "symfony",
  "php",
  "docker",
  "ci/cd",
  "apis rest",
  "graphql",
  "microservicios",
  "postgresql",
  "ingeniero de software",
  "full stack developer",
  "devops engineer",
];

// Extraer skills únicos para el schema
const skillSet = new Set(
  work.flatMap((w) => w.stack || [])
);
const knowsAbout = Array.from(skillSet);

export interface SiteMetadata {
  baseUrl: string;
  siteName: string;
  title: string;
  description: string;
  locale: string;
  ogLocale: string;
  author: string;
  contactEmail: string;
  defaultOgImage: string;
  keywords: string[];
  twitterHandle?: string;
  alternateLocales?: string[];
  sameAs: string[];
}

const siteMetadata: SiteMetadata = {
  baseUrl: normalizedSiteUrl,
  siteName: `${displayName} · Backend Engineer`,
  title: `${displayName} · Backend Engineer`,
  description: defaultDescription,
  locale: "es",
  ogLocale: "es_ES",
  author: displayName,
  contactEmail: basics.email,
  defaultOgImage: `${normalizedSiteUrl}/avatar.png`,
  keywords,
  twitterHandle: undefined,
  alternateLocales: ["en_US"],
  sameAs: basics.profiles?.map((profile) => profile.url).filter(Boolean) ?? [],
};

export const absoluteUrl = (path: string): string => {
  if (!path) {
    return siteMetadata.baseUrl;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteMetadata.baseUrl}${normalizedPath}`;
};

export const buildPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteMetadata.author,
  url: siteMetadata.baseUrl,
  jobTitle: basics.label,
  image: absoluteUrl("/avatar.png"),
  email: `mailto:${siteMetadata.contactEmail}`,
  sameAs: siteMetadata.sameAs,
  address: {
    "@type": "PostalAddress",
    addressLocality: basics.location.city,
    addressRegion: basics.location.region,
    postalCode: basics.location.postalCode,
    addressCountry: basics.location.countryCode,
  },
  knowsAbout: knowsAbout,
  worksFor: work.map((w) => ({
    "@type": "Organization",
    name: w.name,
    url: w.url,
  })),
});

// Schema para reclutadores - ProfessionalService o JobPosting
export const buildProfessionalSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteMetadata.author,
  url: siteMetadata.baseUrl,
  image: absoluteUrl("/avatar.png"),
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: basics.location.city,
    addressRegion: basics.location.region,
    addressCountry: basics.location.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteMetadata.contactEmail,
    contactType: "recruitment",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: siteMetadata.sameAs,
  priceRange: "$$$",
});

export default siteMetadata;
