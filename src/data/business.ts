import { CONTACTO } from './contacto';

export interface BusinessInfo {
  name: string;
  description: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  telephone: string;
  sameAs: string[];
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "Ludmila — Prof. Ed. Física",
  description: "Entrenamiento personalizado para mujeres. Online y presencial en La Calera, Córdoba.",
  address: {
    locality: "La Calera",
    region: "Córdoba",
    country: "AR"
  },
  telephone: "+5493516431504",
  sameAs: [
    CONTACTO.INSTAGRAM_URL,
    CONTACTO.WHATSAPP_BASE_URL
  ]
};
