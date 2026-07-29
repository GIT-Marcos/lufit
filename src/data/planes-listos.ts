export interface PlanListo {
  id: string;
  titulo: string;
  descripcion: string;
  objetivo: string;
  nivel: string;
  duracion: string;
  caracteristicas: string[];
  publicoObjetivo: string;
  icono: string;
}

export const PLANES_LISTOS: PlanListo[] = [
  {
    id: "ganar-masa-muscular",
    titulo: "Ganar Masa Muscular",
    descripcion: "Plan diseñado para hipertrofia progresiva con ejercicios compuestos y de aislamiento. Ideal para quienes quieren aumentar volumen magro de forma sostenible.",
    objetivo: "Hipertrofia y fuerza progresiva",
    nivel: "Principiante a intermedio",
    duracion: "8 semanas",
    caracteristicas: [
      "Rutina dividida por grupos musculares (push/pull/legs)",
      "Progresión de cargas semana a semana",
      "Ejercicios con y sin equipamiento",
      "Guía de alimentación para superávit controlado",
      "Seguimiento de medidas y progreso fotográfico",
    ],
    publicoObjetivo: "Mujeres que quieren aumentar masa muscular y fuerza visible",
    icono: "💪",
  },
  {
    id: "perder-peso",
    titulo: "Perder Peso",
    descripcion: "Plan enfocado en quema de calorías, metabolismo activo y preservación de masa muscular durante el déficit.",
    objetivo: "Pérdida de grasa corporal",
    nivel: "Todos los niveles",
    duracion: "8 semanas",
    caracteristicas: [
      "Rutinas metabólicas de alta eficiencia calórica",
      "Combinación de fuerza y cardio estratégico",
      "Adaptación para casa o gimnasio",
      "Guía de alimentación para déficit controlado",
      "Seguimiento semanal de evolución",
    ],
    publicoObjetivo: "Mujeres que buscan reducir porcentaje graso de forma saludable y sin efecto rebote",
    icono: "🔥",
  },
  {
    id: "resistencia-y-cardio",
    titulo: "Resistencia y Cardio",
    descripcion: "Plan para mejorar capacidad cardiovascular, resistencia muscular y recuperación. Perfecto para complementar otros deportes o como base aeróbica.",
    objetivo: "Resistencia cardiovascular y muscular",
    nivel: "Principiante a intermedio",
    duracion: "6 semanas",
    caracteristicas: [
      "Entrenamiento intervalado de alta intensidad (HIIT)",
      "Trabajo de resistencia muscular progresivo",
      "Sesiones de 25-40 minutos",
      "Ejercicios de bajo impacto disponibles",
      "Plan de recuperación activa incluido",
    ],
    publicoObjetivo: "Mujeres que quieren mejorar su condición cardiovascular y rendimiento general",
    icono: "🏃‍♀️",
  },
  {
    id: "movilidad-y-flexibilidad",
    titulo: "Movilidad y Flexibilidad",
    descripcion: "Plan enfocado en rango de movimiento, elasticidad muscular y prevención de lesiones. Ideal como complemento del entrenamiento de fuerza o como rutina principal.",
    objetivo: "Rango de movimiento y prevención de lesiones",
    nivel: "Todos los niveles",
    duracion: "4 semanas",
    caracteristicas: [
      "Rutinas de movilidad articular progresivas",
      "Estiramientos dinámicos y estáticos",
      "Trabajo de flexibilidad por cadenas musculares",
      "Sesiones de 15-30 minutos",
      "Ideal para combinar con otros planes",
    ],
    publicoObjetivo: "Mujeres que buscan mejorar su movilidad, reducir rigidez o prevenir lesiones",
    icono: "🤸‍♀️",
  },
];
