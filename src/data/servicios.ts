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
    { icono: "📱", texto: "Rutina personalizada" },
    { icono: "💬", texto: "Seguimiento por WhatsApp" },
    { icono: "🎥", texto: "Corrección de técnica por video" },
    { icono: "📊", texto: "Plan actualizado a tu progreso" },
    { icono: "🏠", texto: "Sin necesidad de equipamiento" },
    { icono: "📚", texto: "Acceso a material exclusivo" },
  ],
  cta: { texto: "Ver asesorías online", href: "/asesorias" },
} as const;

export const PRESENCIAL_ALERTA = {
  texto: "¿Preferís entrenar presencial?",
  linkTexto: "Conocé las opciones →",
  linkHref: "/asesorias#presencial",
} as const;
