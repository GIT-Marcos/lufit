import type { Step } from "../components/Steps.astro";
import type { Columna } from "../components/Comparativa.astro";

export interface Diferencial {
  icono: string;
  texto: string;
}

export const COMPARATIVA_COLUMNAS: [Columna, Columna] = [
  {
    titulo: "Online",
    items: [
      "Entrená cuando y donde quieras — sin horarios fijos ni traslados",
      "Correcciones por video como si estuviera al lado tuyo",
      "Seguimiento por WhatsApp: respondo yo, no un bot",
      "Plan hecho para tu casa con lo que tengas (o sin nada)",
      "Flexibilidad total: elegís días, horarios y ritmo",
    ],
  },
  {
    titulo: "Presencial",
    items: [
      "Entrená en mi espacio con todo el equipamiento",
      "Corrección de técnica en persona, paso a paso",
      "Acompañamiento presencial en cada sesión",
      "Acceso a equipamiento completo",
      "Días y horarios fijos, rutina estable",
    ],
  },
];

export const STEPS: Step[] = [
  {
    numero: 1,
    titulo: "Contame de vos",
    descripcion:
      "Completá el formulario para contarme tus objetivos, tu rutina y tu punto de partida. Nos conocemos sin compromiso.",
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
  { icono: "📈", texto: "Ajustes semanales según tu evolución real — no esperes meses para ver cambios" },
  { icono: "💬", texto: "Acompañamiento por WhatsApp — respondo yo, no un bot" },
  { icono: "🎥", texto: "Corrección de técnica por video para que entrenes segura y sin lesiones" },
  { icono: "🔄", texto: "Online, presencial o combinado: vos elegís cómo cada mes" },
  { icono: "🌱", texto: "No necesitás experiencia previa — arrancamos desde donde estés" },
];
