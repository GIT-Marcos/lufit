export interface Beneficio {
  icono: string;
  texto: string;
}

export const ASESORIA_ONLINE = {
  titulo: "Asesoría Online",
  descripcion:
    "Plan personalizado con acompañamiento continuo. Entrená cuando quieras, donde quieras, conmigo al tanto de cada progreso.",
  badge: "Recomendado",
  beneficios: [
    { icono: "📋", texto: "Estimación de estado inicial" },
    { icono: "🏋️‍♀️", texto: "Rutina personalizada" },
    { icono: "💬", texto: "Seguimiento por WhatsApp 24/7" },
    { icono: "🎥", texto: "Corrección de técnica de movimiento por video" },
    { icono: "🤸‍♀️", texto: "Videos de instrucciones de movilidad y estiramientos" },
    { icono: "🔥", texto: "Videos de motivación" },
    { icono: "📈", texto: "Plan actualizado a tu progreso" },
    { icono: "🏠", texto: "Sin necesidad de equipamiento" },
    { icono: "📚", texto: "Biblioteca de ejercicios explicados paso por paso" },
    { icono: "🥗", texto: "Guía de alimentación" },
    { icono: "🔄", texto: "Seguimiento continuo y ajustes semanales" },
    { icono: "💻", texto: "Videollamada 1 vez por mes para resolver dudas puntuales y revisión de progreso" },
  ],
  cta: { texto: "Ver asesorías online", href: "/asesorias" },
} as const;

export const PRESENCIAL_ALERTA = {
  texto: "¿Preferís entrenar presencial?",
  linkTexto: "Conocé las opciones →",
  linkHref: "/asesorias#presencial",
} as const;
