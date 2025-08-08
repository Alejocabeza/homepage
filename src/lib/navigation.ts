type Lang = "es" | "en";

const NAVIGATION_TRANSLATIONS: Record<
  Lang,
  { title: string; url: string; icon: null }[]
> = {
  es: [
    { title: "Inicio", url: "/", icon: null },
    { title: "Proyectos", url: "/projects", icon: null },
  ],
  en: [
    { title: "Home", url: "/", icon: null },
    { title: "Projects", url: "/projects", icon: null },
  ],
};

export function getNavigation(lang: Lang = "es") {
  return NAVIGATION_TRANSLATIONS[lang] || NAVIGATION_TRANSLATIONS["es"];
}

export async function getCV(lang: Lang = "es") {
  try {
    const cvModule = await import(`../i18n/cv.${lang}.json`);
    return cvModule.default;
  } catch (error) {
    console.error(`Error loading CV for language ${lang}:`, error);
    const defaultCvModule = await import(`../i18n/cv.es.json`);
    return defaultCvModule.default;
  }
}
