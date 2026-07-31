import type { ImageMetadata } from "astro";
import lumo1 from "../assets/images/galeria/lumo1.jpeg";
import lumo2 from "../assets/images/galeria/lumo2.jpeg";
import lumo3 from "../assets/images/galeria/lumo3.jpeg";
import gym1 from "../assets/images/galeria/gym1.jpeg";
import gym2 from "../assets/images/galeria/gym2.jpeg";
import gym3 from "../assets/images/galeria/gym3.jpeg";
import libraFit from "../assets/images/galeria/LibraFit.jpg";

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export const GALLERY: GalleryItem[] = [
  { src: lumo1, alt: "Ludmila tu entrenadora" },
  { src: lumo3, alt: "Ludmila tu entrenadora" },
  { src: lumo2, alt: "Ludmila tu entrenadora" },
];

export const GALLERY_GIMNASIO: GalleryItem[] = [
  { src: libraFit, alt: "Logo de LibraFit" },
  { src: gym1, alt: "Espacio de entrenamiento — Ludmila PT" },
  { src: gym2, alt: "Sesión de entrenamiento — Ludmila PT" },
  { src: gym3, alt: "Box de entrenamiento — Ludmila PT" },
];
