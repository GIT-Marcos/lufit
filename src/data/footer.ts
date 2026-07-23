export interface NavItem {
  label: string;
  href: string;
}

export const FOOTER_NAV: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Asesorías", href: "/asesorias" },
  { label: "Mi Gimnasio", href: "/mi-gimnasio" },
  { label: "Sobre Mí", href: "/sobre-mi" },
];

export const FOOTER = {
  BRAND_NAME: "Ludmila",
  TAGLINE: "Entrenamiento personal online y presencial",
  CTA_TEXT: "Comenzá hoy",
  CTA_HREF: "/asesorias",
  COPYRIGHT: "Ludmila. Todos los derechos reservados.",
} as const;
