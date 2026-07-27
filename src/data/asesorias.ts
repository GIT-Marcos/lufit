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
      "Sin compromiso mensual — probás y decidís",
    ],
  },
  {
    titulo: "Presencial",
    items: [
      "Entrená en mi espacio con equipamiento completo",
      "Corrección de técnica en persona, paso a paso",
      "Atención 1 a 1 durante toda la sesión — no compartís turno",
      "Cupos limitados: cada alumna tiene su lugar asegurado",
    ],
  },
];

export const STEPS: Step[] = [
  {
    numero: 1,
    titulo: "Contame de vos",
    descripcion:
      "Completá el formulario para contarme tus objetivos, tus capacidades y tu punto de partida. Nos conocemos sin compromiso.",
  },
  {
    numero: 2,
    titulo: "Diseño tu plan",
    descripcion:
      "Creo una rutina 100% a tu medida, con la guía de alimentación incluida. Todo ajustado a tu equipamiento, horarios y nivel.",
  },
  {
    numero: 3,
    titulo: "No estás sola",
    descripcion:
      "Acompañamiento continuo por WhatsApp con ajustes según tu evolución. Videos explicativos y correcciones de técnica incluidas.",
  },
  {
    numero: 4,
    titulo: "Resultados reales",
    descripcion:
      "Cambios visibles en fuerza, composición corporal y bienestar general. Verlos te da más ganas de seguir.",
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
