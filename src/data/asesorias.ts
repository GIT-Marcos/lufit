import type { Step } from "../components/Steps.astro";
import type { Columna } from "../components/Comparativa.astro";

export interface Diferencial {
  icono: string;
  texto: string;
}

export const COMPARATIVA_COLUMNAS: [Columna, Columna] = [
  {
    titulo: "Online",
    destacada: true,
    items: [
      "Entrená donde quieras — sin horarios fijos ni traslados",
      "Indicaciones y correcciones por video como si estuviera al lado tuyo",
      "Seguimiento por WhatsApp: respondo yo, no un bot",
      "Plan hecho para tu casa con lo que tengas (o sin nada)",
      "Guía de alimentación incluida con el plan de entrenamiento",
      "2 tipos de asesorías: estándar y premium",
    ],
  },
  {
    titulo: "Presencial",
    items: [
      "Entrená en mi espacio con equipamiento completo",
      "Corrección de técnica en persona, paso a paso",
      "Entrená junto con otras chicas en tu mismo camino",
      "Cupos limitados: cada alumna tiene su lugar asegurado",
      "Guía de alimentación incluida con el plan de entrenamiento",
    ],
  },
];

export const STEPS: Step[] = [
  {
    numero: 1,
    titulo: "Contame de vos",
    descripcion:
      "Completás el formulario para contarme tus objetivos, tus capacidades y tu punto de partida para que yo pueda ponerme en contacto con vos y realizar tu inscripción.",
  },
  {
    numero: 2,
    titulo: "Diseño tu plan",
    descripcion:
      "Diseño una rutina 100% a tu medida y recibís acceso a la plataforma con los ejercicios. Todo ajustado a tu equipamiento, horarios y nivel.",
  },
  {
    numero: 3,
    titulo: "No estás sola",
    descripcion:
      "Tendrás acompañamiento continuo por WhatsApp con ajustes según tu evolución. Videos explicativos y correcciones de técnica incluidas en la plataforma.",
  },
  {
    numero: 4,
    titulo: "Resultados reales",
    descripcion:
      "Sentirás cambios visibles en fuerza, composición corporal y bienestar general. Vamos ajustando tu plan mes a mes acorde a tu progreso.",
  },
];

export const DIFERENCIALES: Diferencial[] = [
  { icono: "🎯", texto: "Planes 100% a tu medida — nada de rutinas genéricas ni prefabricadas" },
  { icono: "📈", texto: "Ajustes según tu evolución real — no esperes meses para ver cambios" },
  { icono: "💬", texto: "Acompañamiento por WhatsApp — respondo yo, no un bot" },
  { icono: "🎥", texto: "Corrección de técnica por video para que entrenes segura y sin lesiones" },
  { icono: "🌱", texto: "No necesitás experiencia previa — arrancamos desde donde estés" },
  { icono: "🏆", texto: "Sin efectos rebote — vas a lograr una transformación para toda tu vida" },
];
