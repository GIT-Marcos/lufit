export interface Certification {
  institution: string;
  acronym: string;
  logo: string;
  year: number;
  title: string;
}

export const CERTIFICACIONES: Certification[] = [
  {
    institution: "Instituto Provincial de Educación Física IPEF",
    acronym: "IPEF",
    logo: "/ipef-logo.png",
    year: 2023,
    title: "Profesora de Educación Física",
  },
  {
    institution: "Asociación Mutual Argentina de Instructores y Profesores AMAIP",
    acronym: "AMAIP",
    logo: "/amaip.png",
    year: 2025,
    title: "Instructora en Entrenamiento y Nutrición para la Fuerza e Hipertrofia",
  },
];
