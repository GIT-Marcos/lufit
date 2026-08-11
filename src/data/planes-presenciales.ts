import { getWhatsAppUrl } from "./contacto";

export interface PlanPresencial {
  id: string;
  titulo: string;
  descripcion: string;
  destacado?: string;
  icono: string;
  beneficios: string[];
  cta: {
    texto: string;
    href: string;
  };
}

export const PLANES_PRESENCIALES: PlanPresencial[] = [
  {
    id: "funcional-grupos",
    titulo: "Entrenamiento funcional en grupos",
    descripcion:
      "Grupos de hasta 10 personas donde trabajamos fuerza, resistencia y movilidad en circuito. La dinámica grupal te empuja a dar más, mientras yo voy corrigiendo postura y técnica persona por persona. Entrenás en equipo, pero con la seguridad de que nadie se queda sin su corrección.",
    icono: "🏋️‍♀️",
    beneficios: [
      "Mejorás fuerza, resistencia y movilidad en una misma sesión",
      "La energía del grupo te motiva a dar siempre un poco más",
      "Recibís correcciones personalizadas a pesar de ser clase grupal",
      "Ideal para las que buscan entrenar todo su cuerpo, combinando fuerza y resistencia, en una sesión 3 veces por semana.",
    ],
    cta: {
      texto: "Reservá tu lugar →",
      href: getWhatsAppUrl(
        "¡Hola! Quiero consultar por el entrenamiento funcional en grupos.",
      ),
    },
  },
  {
    id: "personalizado-grupos-reducidos",
    titulo: "Entrenamiento personalizado en grupos reducidos",
    destacado: "Para resultados más rápidos",
    descripcion:
      "Grupos de hasta 5 personas donde cada alumna tiene su propia rutina. No seguís la clase del resto — trabajás tus objetivos, a tu ritmo, con ejercicios diseñados específicamente para vos, tu condición física, tus lesiones y tus metas. El progreso es más rápido porque todo está pensado alrededor de una sola persona: vos.",
    icono: "👥",
    beneficios: [
      "Rutina única diseñada para tu objetivo, no para el grupo",
      "Trabajás a tu ritmo sin tener que seguir el paso de otras personas",
      "Corrección constante y seguimiento más cercano por grupo reducido",
      "Ideal para quienes nunca entrenaron, para las que buscan algo más específico, o necesitan de un plan que se ajuste a su condición fisica.",
    ],
    cta: {
      texto: "Quiero mi plan personalizado →",
      href: getWhatsAppUrl(
        "¡Hola! Quiero consultar por el entrenamiento personalizado en grupos reducidos.",
      ),
    },
  },
] as const;
