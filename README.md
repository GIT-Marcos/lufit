# Lufit — Ludmila | Prof. Ed. Física

![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-%3E%3D22.12-339933?logo=nodedotjs&logoColor=white)
![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

## Descripción

Sitio web estático de presentación y venta para **Ludmila**, Profesora de Educación Física. Entrenamiento online y presencial en Córdoba - Argentina.

[Sitio en vivo](https://ludmi-fit.vercel.app)

## Características

- **SSG puro**: HTML/CSS/JS generado en build, sin framework UI ni JS de cliente salvo menú hamburguesa y acordeón FAQ
- **Data-driven**: todo el contenido editable desde `src/data/` sin tocar componentes
- **SEO completo**: canonical, Open Graph (`es_AR`), Twitter Card, JSON-LD (BreadcrumbList), sitemap, robots.txt, imagen OG generada por script
- **Accesibilidad**: `lang="es"`, skip link, `aria-label`/`aria-hidden`, `:focus-visible`
- **CSS vanilla** con BEM y variables CSS (`:root` en `global.css`)
- **Fuentes auto-hosted** (Kanit, Parkinsans, Sora, Anybody) — cero requests externos
- **Responsive** mobile-first

## Stack

| Tecnología                                                                           | Versión      | Uso                                               |
| ------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------- |
| [Astro](https://astro.build)                                                         | `^7.2.1`     | Framework SSG                                     |
| [TypeScript](https://www.typescriptlang.org)                                         | `^6.0.3`     | Tipado estático                                   |
| CSS vanilla                                                                          | —            | Estilos con BEM + variables CSS                   |
| [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | `^3.7.3`     | Generación de sitemap                             |
| [`@astrojs/check`](https://docs.astro.build/en/reference/cli-reference/#astro-check)   | `^0.9.10`    | Chequeo de tipos (dev)                            |
| [sharp](https://sharp.pixelplumbing.com)                                             | `^0.35.3`    | Optimización de imágenes y generación de OG image |
| [Node.js](https://nodejs.org)                                                        | `>= 22.12.0` | Runtime (definido en `engines` de `package.json`) |

## Estructura del proyecto

```text
lufit/
├── public/
│   ├── og/                  # Imágenes Open Graph
│   └── robots.txt
├── scripts/
│   └── generate-og.mjs      # Genera la imagen OG por defecto
├── src/
│   ├── assets/images/       # Fotos y SVGs (hero, galería, certificaciones, iconos)
│   ├── components/          # Componentes .astro (BEM); destacan HeroSplit y PilaresCard
│   │   └── icons/           # Iconos SVG inline
│   ├── data/                # Contenido tipado (contacto, planes, horarios, stats…)
│   ├── layouts/Layout.astro # Layout global: head SEO, Header, Footer, slot
│   ├── pages/               # index, asesorias, planes-listos, mi-gimnasio, sobre-mi, 404
│   └── styles/global.css    # Reset, variables CSS y tokens de diseño
├── astro.config.mjs         # site, trailingSlash, sitemap, fuentes
├── LICENSE
├── package.json
└── tsconfig.json
```

## Requisitos

- [Node.js](https://nodejs.org) `>= 22.12.0` (definido en `engines` de `package.json`)
- npm

## Puesta en marcha

```sh
# Instalar dependencias
npm install

# Servidor de desarrollo en http://localhost:4321
npm run dev

# Build estático de producción en dist/
npm run build

# Previsualizar el build localmente
npm run preview
```

## Scripts

| Comando           | Descripción                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en http://localhost:4321                      |
| `npm run build`   | Build estático de producción en `dist/`                              |
| `npm run preview` | Previsualizar el build localmente                                    |
| `npm run astro`   | CLI de Astro (`astro add`, `astro check`…)                           |
| `npm run og`      | Regenera la imagen Open Graph (`scripts/generate-og.mjs`, usa sharp) |
| `npx astro check` | Chequeo de tipos                                                     |

## Personalización de contenido

Todo el contenido del sitio se edita desde `src/data/` sin tocar componentes:

| Archivo                  | Qué edita                                                    |
| ------------------------ | ------------------------------------------------------------ |
| `contacto.ts`            | WhatsApp, Instagram, email, Twitter (handle vacío por ahora) |
| `footer.ts`              | Navegación del footer, copyright, crédito de desarrollo      |
| `planes-listos.ts`       | Planes de venta directa                                      |
| `planes-presenciales.ts` | Planes presenciales                                          |
| `asesorias.ts`           | Planes de asesoría                                           |
| `servicios.ts`           | Tarjetas de servicios                                        |
| `horarios.ts`            | Horarios del gimnasio                                        |
| `gallery.ts`             | Fotos de la galería                                          |
| `stats.ts`               | Estadísticas de la barra de credibilidad                     |
| `certificaciones.ts`     | Badges de certificaciones                                    |

## Despliegue

El sitio se despliega en **Vercel** como sitio 100% estático (sin funciones serverless).

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework preset**: Astro

La URL del sitio está configurada en `site` de `astro.config.mjs`.

## Autoría y licencia

Proyecto desarrollado por [Marcos](https://github.com/GIT-Marcos) para Ludmila.

- **Código**: licencia [MIT](LICENSE) © 2026 Marcos. Libre de usar, copiar y modificar.
- **Contenido**: textos, fotografías, marca y datos del sitio (incluidos los de `src/data/`) © Ludmila — **no cubiertos** por la licencia MIT. No reutilizarlos sin su autorización.
