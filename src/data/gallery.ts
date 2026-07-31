import type { ImageMetadata } from "astro";
import lumo1 from "../assets/images/galeria/lumo1.jpeg";
import lumo2 from "../assets/images/galeria/lumo2.jpeg";
import lumo3 from "../assets/images/galeria/lumo3.jpeg";

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
