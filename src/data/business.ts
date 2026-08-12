import { CONTACTO } from './contacto';

export interface BusinessInfo {
  id: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  areaServed: Array<{
    type: string;
    name: string;
  }>;
  telephone: string;
  sameAs: string[];
}

export const BUSINESS_DATA: BusinessInfo = {
  id: "https://ludmi-fit.vercel.app/#localbusiness",
  name: "Ludmila — Prof. Ed. Física",
  description: "Entrenamiento personalizado para mujeres. Online y presencial en La Calera, Córdoba.",
  url: "https://ludmi-fit.vercel.app",
  logo: "https://ludmi-fit.vercel.app/favicon.svg",
  address: {
    locality: "La Calera",
    region: "Córdoba",
    country: "AR"
  },
  geo: {
    latitude: "-31.3435",
    longitude: "-64.3353"
  },
  areaServed: [
    {
      type: "AdministrativeArea",
      name: "La Calera"
    },
    {
      type: "AdministrativeArea",
      name: "Córdoba"
    },
    {
      type: "Country",
      name: "Argentina"
    }
  ],
  telephone: "+5493516431504",
  sameAs: [
    CONTACTO.INSTAGRAM_URL,
    CONTACTO.WHATSAPP_BASE_URL
  ]
};
