import { basics } from "@/shared/data/cv.json";

const FALLBACK_SITE_URL = "https://alejandrocabeza.dev";
const rawSiteUrl = (import.meta.env.PUBLIC_SITE_URL ??
  FALLBACK_SITE_URL) as string;
const normalizedSiteUrl = rawSiteUrl.replace(/\/$/, "");

const displayName =
  basics.name?.replace(/^hola,\s*/i, "").trim() || "Alejandro Cabeza";
const defaultDescription =
  "Alejandro Cabeza es un ingeniero backend especializado en Node.js, Laravel, Symfony y arquitecturas escalables. Construye APIs resilientes, automatiza despliegues CI/CD y lidera equipos para entregar productos de alto rendimiento.";

const keywords = [
  "desarrollador backend",
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
];

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
  knowsAbout: keywords,
});

export default siteMetadata;
