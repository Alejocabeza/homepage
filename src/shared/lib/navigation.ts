export interface NavItem {
  title: string;
  url: string;
  icon: any;
}

export interface NavigationConfig {
  home: string;
  projects: string;
  experiencia: string;
  stack: string;
  sobreMi: string;
  contact: string;
}

export const NAVIGATION_ES: NavItem[] = [
  { title: "Inicio", url: "#presentacion", icon: null },
  { title: "Proyectos", url: "#projects", icon: null },
  { title: "Experiencia", url: "#experiencia", icon: null },
  { title: "Stack", url: "#stack", icon: null },
  { title: "Sobre Mí", url: "#sobre-mi", icon: null },
  { title: "Contacto", url: "#contact", icon: null },
];
