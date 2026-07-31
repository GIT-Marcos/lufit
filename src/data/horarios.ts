export type TipoClase = "funcional" | "personalizado" | "yoga";

export interface Clase {
  hora: string;
  tipo: TipoClase;
}

export interface DiaGrupo {
  id: string;
  dias: string;
  clases: Clase[];
}

export const TIPO_CLASE_LABEL = {
  funcional: "Funcional",
  personalizado: "Personalizado",
  yoga: "Yoga",
} as const;

export const HORARIOS: DiaGrupo[] = [
  {
    id: "lun-mie-vie",
    dias: "Lun · Mié · Vie",
    clases: [
      { hora: "8 h", tipo: "funcional" },
      { hora: "9 h", tipo: "personalizado" },
      { hora: "16 h", tipo: "personalizado" },
      { hora: "17 h", tipo: "personalizado" },
      { hora: "19 h", tipo: "funcional" },
    ],
  },
  {
    id: "mar-jue",
    dias: "Mar · Jue",
    clases: [
      { hora: "9 h", tipo: "yoga" },
      { hora: "10 h", tipo: "personalizado" },
      { hora: "16 h", tipo: "personalizado" },
      { hora: "17 h", tipo: "yoga" },
      { hora: "18 h", tipo: "personalizado" },
    ],
  },
] as const;
