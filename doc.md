# Lufit — Ludmila Personal Trainer

## 1. Descripción del proyecto

Sitio web estático promocional para **Ludmila**, personal trainer. Marca comercial: por definir. Código interno: `lufit`.

**Stack técnico:**
- Astro 7 (SSG — generación estática)
- CSS plano (vanilla) — sin Tailwind ni frameworks UI
- Sin librerías externas de JS — priorizar HTML/CSS puro
- Tipografía: sistema sans-serif (no Google Fonts)
- Sin backend, sin formulario server-side

---

## 2. Sistema de diseño

### 2.1 Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `--color-primary` | `#EA580C` | Naranja — botones, acentos, hover states |
| `--color-primary-dark` | `#C2410C` | Naranja oscuro — hover de botones |
| `--color-secondary` | `#05804A` | Verde — detalles, badges, iconos secundarios |
| `--color-secondary-dark` | `#047857` | Verde oscuro — hover de elementos secundarios |
| `--color-bg` | `#FAFAF9` | Fondo claro principal |
| `--color-surface` | `#FFFFFF` | Tarjetas, contenedores |
| `--color-text` | `#1C1917` | Texto principal |
| `--color-text-secondary` | `#57534E` | Texto secundario, descripciones |
| `--color-border` | `#E7E5E4` | Bordes sutiles |

### 2.2 Tipografía

- `font-family`: sistema (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- Jerarquía:
  - `h1`: 2.5rem / bold
  - `h2`: 2rem / semibold
  - `h3`: 1.5rem / semibold
  - `body`: 1rem / regular
  - `small`: 0.875rem

### 2.3 Tono verbal

- Tuteo informal y cercano
- Motivacional pero profesional
- Español neutro (evitar regionalismos fuertes)

---

## 3. Arquitectura del sitio

### 3.1 Layout global

```
┌──────────────────────────────────────┐
│              Header                  │
│  [Logo] [Inicio] [Asesorías]         │
│  [Mi Gimnasio] [Sobre Mí]            │
├──────────────────────────────────────┤
│                                      │
│           <slot />                   │
│         (contenido página)           │
│                                      │
├──────────────────────────────────────┤
│              Footer                  │
│  © Ludmila PT                        │
│  [WhatsApp] [Instagram] [Email]      │
└──────────────────────────────────────┘
```

- **Header**: Logo texto "Ludmila PT", navegación horizontal, menú hamburguesa en mobile
- **Footer**: Copyright, iconos redes sociales (WhatsApp, Instagram, Email)
- **SEO**: Ver sección 3.3 para especificación completa

### 3.2 Rutas

| Ruta | Página | Archivo |
|---|---|---|
| `/` | Inicio | `src/pages/index.astro` |
| `/asesorias` | Asesorías | `src/pages/asesorias.astro` |
| `/mi-gimnasio` | Mi Gimnasio | `src/pages/mi-gimnasio.astro` |
| `/sobre-mi` | Sobre Mí | `src/pages/sobre-mi.astro` |
| `*` | 404 | `src/pages/404.astro` |

### 3.3 SEO

**Meta tags por página:**

| Página | title | description |
|---|---|---|
| `/` | Ludmila — Personal Trainer | Transformá tu cuerpo con planes de entrenamiento personalizados. Online o presencial. Empezá hoy tu cambio. |
| `/asesorias` | Planes Personalizados con Seguimiento | Planes de entrenamiento a tu medida con acompañamiento continuo. Online o presencial. Consultá sin compromiso. |
| `/mi-gimnasio` | Mi Espacio de Entrenamiento | Conocé mi gimnasio y las sesiones presenciales con Ludmila. También disponible 100% online. Elegí la modalidad que mejor se adapte a vos. |
| `/sobre-mi` | Conocé a Ludmila — Personal Trainer | Conocé a Ludmila, personal trainer. Filosofía, certificaciones y experiencia. Empezá hoy tu transformación con acompañamiento real. |

**Reglas:**
- Titles únicos por página, 50–60 caracteres, keyword principal al inicio
- Descriptions únicas, 150–160 caracteres, incluir llamado a la acción

**Open Graph (obligatorio en las 4 páginas):**
- `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type: website`
- `og:locale: es_ES`
- `og:site_name: Ludmila PT`

**Twitter Card (obligatorio en las 4 páginas):**
- `twitter:card: summary_large_image`
- `twitter:title`, `twitter:description`, `twitter:image` (mismos valores que OG)

**URLs canónicas:**
- Implementar `<link rel="canonical">` en `Layout.astro`
- Usar `Astro.url.origin + Astro.url.pathname` como URL canónica mientras no haya dominio definido
- Cuando se configure `site` en `astro.config.mjs`, migrar a `Astro.site + Astro.url.pathname`

**JSON-LD Structured Data:**
- `Person` en Sobre Mí — nombre, descripción, sameAs (redes), knowsAbout ("Personal Training")
- `FAQPage` en Asesorías — las 8 preguntas con sus respuestas
- `LocalBusiness` en Mi Gimnasio — nombre, tipo (PersonalTraining). Posponer hasta tener dirección real (no usar placeholder en schema).
- `BreadcrumbList` en páginas interiores (Asesorías, Mi Gimnasio, Sobre Mí) — Inicio (position 1) → Página actual (position 2)

**robots.txt** en `public/robots.txt`:
```
User-agent: *
Allow: /

# AI crawlers — permitidos (contenido original con valor EEAT)
# No se agregan reglas de bloqueo para GPTBot, ClaudeBot,
# PerplexityBot ni Google-Extended.

Sitemap: https://[dominio]/sitemap.xml
```

**Nota sobre AI crawlers:** Se permite el acceso a todos los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) porque el contenido es original de una profesional con certificaciones. Esto aumenta la probabilidad de ser citado en AI Overviews, ChatGPT y Perplexity.

**Sitemap:** Agregar `@astrojs/sitemap` vía `npx astro add sitemap` cuando se defina la URL del sitio. Configurar `site` en `astro.config.mjs` con la URL final.

---

## 4. Especificación por página

### 4.1 Inicio (`/`)

**Objetivo**: Captar atención, comunicar propuesta de valor, guiar a asesorías.

**Secciones:**
1. **Hero** (full viewport)
   - **Identidad**: "Ludmila — Personal Trainer" visible encima del headline
   - Foto placeholder de Ludmila entrenando
   - Headline: "Transformá tu cuerpo, transformá tu vida"
   - Subtítulo breve
   - CTA primario: "Empezá hoy" → `/asesorias`
   - CTA secundario: "Consultá por WhatsApp" → link directo a WhatsApp
2. **Stats de credibilidad** (barra horizontal, 3 cifras)
   - 5+ años de experiencia
   - 100+ alumnos transformados
   - Online y Presencial
   - Escalable: datos desde array tipado en frontmatter
3. **Servicio destacado** (2 mini-cards: Online | Presencial)
   - **Online** — "Entrená desde tu casa" → "Conocé más" → `/asesorias`
   - **Presencial** — "Entrená en mi gimnasio" → "Conocé más" → `/asesorias`
   - Preview de la comparativa de `/asesorias`, ambos CTA apuntan allí
4. **Testimonios / Resultados** (grid de 4 tarjetas, escalable)
   - Tarjetas sin foto — solo nombre + testimonio placeholder
   - Grid CSS responsivo: 4 columnas en desktop, 2 en tablet, 1 en mobile
   - Escalable: los datos provienen de un array tipado en frontmatter Astro;
     agregar más entradas al array renderiza más tarjetas (wrap a nueva fila)
   - Al pie de la sección: link externo "Ver todos los testimonios →"
     que apunta a `https://ejemplo.com/testimonios` (placeholder)

   **Estructura de datos (frontmatter):**
   ```ts
   interface Testimonio {
     nombre: string;
     texto: string;
   }

   const testimonios: Testimonio[] = [
     { nombre: "María G.", texto: "..." },
     { nombre: "Carlos P.", texto: "..." },
     { nombre: "Ana L.", texto: "..." },
     { nombre: "Juan M.", texto: "..." },
   ];
   ```

   **Componente**: `TestimonialCard.astro` recibe `{ nombre: string; texto: string }` (sin prop de imagen).
5. **CTA final**
   - Frase: "¿Lista/o para empezar tu transformación?"
   - Botón: "Escribime por WhatsApp" → `https://wa.me/549XXXXXXXXXX`

### 4.2 Asesorías (`/asesorias`)

**Objetivo**: Explicar y vender el plan único de asesoría.

**Secciones:**

1. **Hero interior** (título + subtítulo + CTA)
   - "Planes Personalizados con Seguimiento"
   - Subtítulo: "Online o presencial, vos elegís"
   - CTA: "Empezá hoy" → WhatsApp

2. **¿Online o presencial?** (comparativa lado a lado, 2 columnas)

   | Online | Presencial |
   |---|---|
   | Entrená desde tu casa | Entrená en mi gimnasio |
   | Sin traslados, máximo aprovechamiento del tiempo | Corrección de técnica en vivo |
   | Seguimiento por videollamada + WhatsApp | Seguimiento presencial sesión a sesión |
   | Rutina adaptada a tu espacio y equipamiento | Acceso a equipamiento completo |
   | Flexibilidad total de horarios | Box con fecha y hora fija |

3. **Cómo funciona** (proceso en 4 pasos horizontales)
   - **1. Evaluación inicial** — Charla para conocerte, definir objetivos, evaluar condición física
   - **2. Plan a tu medida** — Diseño de rutina personalizada según tus metas, horarios y equipamiento
   - **3. Seguimiento continuo** — Acompañamiento semanal con ajustes según evolución (online o presencial)
   - **4. Resultados reales** — Cambios visibles en fuerza, composición corporal y bienestar general

4. **Diferenciales** (grid de 6 datos concretos)
   - "Planes 100% a tu medida — no hay rutinas genéricas ni copiadas"
   - "Ajustes semanales según tu evolución real"
   - "Acompañamiento por WhatsApp — no soy un bot, respondo yo"
   - "Corrección de técnica para evitar lesiones y maximizar resultados"
   - "Flexibilidad total: online, presencial o combinado"
   - "No necesitás experiencia previa — arrancamos desde donde estés"

5. **¿Para quién es?** (grid o lista con íconos)
   - Principiantes que nunca pisaron un gimnasio
   - Personas que quieren retomar después de un tiempo
   - Intermedios que estancaron y no ven resultados
   - Cualquiera que busque un cambio real con acompañamiento profesional

6. **FAQ** (acordeón, 8 preguntas predefinidas)
   - ¿Necesito experiencia previa para empezar?
   - ¿Cuántos días a la semana entreno?
   - ¿Qué necesito para la modalidad online?
   - ¿Cada cuánto se ajusta la rutina?
   - ¿Puedo combinar online y presencial?
   - ¿Hay periodo de prueba o evaluación gratis?
   - ¿Cómo son los pagos?
   - ¿Qué pasa si no puedo una semana?

7. **CTA final**: Botón "Consultá por WhatsApp" → `https://wa.me/549XXXXXXXXXX`

### 4.3 Mi Gimnasio (`/mi-gimnasio`)

**Objetivo**: Presentar el gimnasio como el espacio donde se realizan las sesiones presenciales, posicionándolo como una opción complementaria dentro del servicio principal de asesorías. El foco está en Ludmila y su metodología, no en el gimnasio como instalación comercial.

**Secciones:**

1. **Hero** (foto de Ludmila en el gimnasio)
   - Título: "Mi espacio de entrenamiento"
   - Texto breve: "Este es mi gimnasio, donde recibimos a quienes prefieren el entrenamiento presencial. Pero mi método también está disponible 100% online — vos elegís."

2. **Galería mínima** (grid de 3-4 fotos placeholder)
   - Sin paginación ni carrusel
   - Fotos de equipamiento, ambiente y zona de entrenamiento

3. **Dirección + horarios** (texto plano)
   - Dirección textual placeholder (sin mapa embebido)
   - Horarios en una línea: "Consultá disponibilidad de turnos"

4. **Redirección suave a online**
   - Título: "¿No estás en la zona?"
   - Texto: "Todos mis planes personalizados también están disponibles 100% online con el mismo seguimiento. Entrená desde tu casa con mi método."

5. **CTA**: Botón "Conocé los planes" → `/asesorias`

### 4.4 Sobre Mí (`/sobre-mi`)

**Objetivo**: Generar confianza, conectar con la historia de Ludmila.

**Secciones:**

1. **Hero** (foto placeholder de Ludmila, retrato)
   - "Ludmila — Personal Trainer"
   - Propósito: "Ayudo a personas como vos a transformar su cuerpo y su relación con el movimiento"

2. **Biografía** (3 párrafos estructurados)
   - **Quién soy**: presentación personal, qué me llevó al fitness
   - **Mi filosofía**: cómo entreno, constancia sobre intensidad, hábitos sobre dietas mágicas
   - **Mi compromiso**: qué puede esperar alguien que trabaja conmigo
   - Los 3 párrafos son placeholder para texto real

3. **Certificaciones / Formación** (grid de badges de texto, sin fotos)
   - Grid responsivo de 4 badges (2 en mobile, 4 en desktop)
   - Cada badge solo contiene texto (nombre de la certificación)
   - Escalable: datos desde array tipado en frontmatter

4. **Testimonios inline** (1-2 tarjetas, reutilizando `TestimonialCard`)
   - Mismo componente que en Inicio: `{ nombre: string; texto: string }` sin foto

5. **Frase personal** (blockquote destacado)

6. **CTA**: "Empezá hoy" → `/asesorias`

### 4.5 Página 404 (`/404.astro`)

**Objetivo**: Mantener al usuario en el sitio cuando llega a una URL inexistente.

**Secciones:**
1. Título: "Página no encontrada"
2. Subtítulo: "Parece que te perdiste... pero siempre estás a tiempo de volver al movimiento"
3. Botón "Volver al inicio" → `/`
4. Diseño acorde al resto del sitio (misma paleta, tipografía)
5. Sin Header ni Footer complejos — diseño mínimo y funcional

---

## 5. Árbol de componentes

### 5.1 Componentes reutilizables

| Componente | Archivo | Descripción |
|---|---|---|
| `Layout.astro` | `src/layouts/Layout.astro` | Layout global: `<html lang="es">`, `<head>` con meta tags globales, reset CSS, variables `:root`, Header, Footer, `<slot />` |
| `Header.astro` | `src/components/Header.astro` | Nav, logo, hamburguesa |
| `Footer.astro` | `src/components/Footer.astro` | Redes, copyright |
| `Hero.astro` | `src/components/Hero.astro` | Hero reutilizable (identity, title, subtitle, ctas[], image) |
| `Button.astro` | `src/components/Button.astro` | Botón reutilizable (variant, href, children) |
| `Card.astro` | `src/components/Card.astro` | Tarjeta genérica (title, description, image, icon) |
| `PlanCard.astro` | `src/components/PlanCard.astro` | Tarjeta de plan de asesoría |
| `TestimonialCard.astro` | `src/components/TestimonialCard.astro` | Tarjeta de testimonio |
| `FAQ.astro` | `src/components/FAQ.astro` | Acordeón de preguntas frecuentes |
| `Steps.astro` | `src/components/Steps.astro` | Proceso paso a paso (numero, titulo, descripcion) |
| `Comparativa.astro` | `src/components/Comparativa.astro` | Tabla comparativa 2 columnas |
| `Stats.astro` | `src/components/Stats.astro` | Barra horizontal de estadísticas (valor + label) |
| `IconWhatsApp.astro` | `src/components/icons/IconWhatsApp.astro` | SVG inline WhatsApp |
| `IconInstagram.astro` | `src/components/icons/IconInstagram.astro` | SVG inline Instagram |
| `IconEmail.astro` | `src/components/icons/IconEmail.astro` | SVG inline Email |
| `IconMenu.astro` | `src/components/icons/IconMenu.astro` | SVG inline hamburguesa |

### 5.2 Convención de props

```ts
interface CTA {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface HeroProps {
  title: string;
  subtitle?: string;
  identity?: string;
  ctas?: CTA[];
  image?: { src: string; alt: string };
}

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  href: string;
  children: string;
}

interface Step {
  numero: number;
  icono: string;
  titulo: string;
  descripcion: string;
}

interface StepsProps {
  steps: Step[];
}

interface ComparativaProps {
  columnas: [
    { titulo: string; items: string[] },
    { titulo: string; items: string[] },
  ];
}

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

interface FAQProps {
  items: FAQItem[];
}

interface StatsItem {
  valor: string;
  label: string;
}

interface StatsProps {
  items: StatsItem[];
}
```

---

## 6. Convenciones de código

### 6.1 CSS

- **Metodología**: Bloques semánticos con clases BEM-lite (`.hero`, `.hero__title`, `.hero__cta`)
- **Variables globales**: Declaradas en `:root` en `Layout.astro`
- **Media queries**: Mobile-first (`min-width: 768px`, `min-width: 1024px`)
- **Transiciones**: `transition: all 0.2s ease` para hovers
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px–1023px
  - Desktop: ≥ 1024px
- **Reset básico** en Layout (`box-sizing: border-box`, márgenes 0)
- No usar `!important` salvo excepciones justificadas
- Preferir `gap` sobre `margin` para espaciado entre elementos flex/grid

### 6.2 Astro

- Template script (`---`) solo para imports y lógica simple
- No usar JS de cliente salvo para: menú hamburguesa, acordeón FAQ
- Usar `client:load` / `client:visible` solo cuando sea necesario

### 6.3 Nomenclatura de archivos

- Componentes: `PascalCase.astro`
- Páginas: `kebab-case.astro`
- Layouts: `PascalCase.astro` en `src/layouts/`
- Carpetas: `kebab-case`

### 6.4 Imágenes

- Carpeta `src/assets/images/` para imágenes locales
- Placeholders iniciales vía `https://placehold.co/`
- Atributo `alt` siempre presente y descriptivo
- Usar `fetchpriority` en hero images

### 6.5 Accesibilidad

- `<html lang="es">` en Layout.astro
- Skip link al inicio del `<body>` en Layout.astro:
  `<a href="#main-content" class="skip-link">Ir al contenido</a>`
  Visible en `:focus`, destino `<main id="main-content">` envolviendo el `<slot />`
- `:focus-visible` visible en todos los elementos interactivos (botones, links, del menú)
- `aria-label` en iconos sociales, menú hamburguesa y enlaces sin texto visible
- `aria-hidden="true"` en todos los iconos SVG decorativos (redes sociales, menú hamburguesa)
- `aria-current="page"` en el nav item activo
- Roles semánticos: `<nav>`, `<main>`, `<footer>` en Layout
- Contraste suficiente: el naranja `#EA580C` y el verde `#05804A` sobre blanco cumplen AA

---

## 7. Estrategia de imágenes placeholder

```
https://placehold.co/{width}x{height}/{bg}/{text}?text={texto}
```

Ejemplos:
- Hero principal → `https://placehold.co/1200x600/EA580C/FFFFFF?text=Ludmila+PT`
- Ludmila en el gimnasio → `https://placehold.co/800x600/EA580C/FFFFFF?text=Ludmila+en+mi+gimnasio`
- Retrato → `https://placehold.co/400x400/05804A/FFFFFF?text=Ludmila`
- Gimnasio → `https://placehold.co/800x600/1C1917/FAFAF9?text=Mi+Gimnasio`
- Avatar testimonio → `https://placehold.co/80x80/E7E5E4/1C1917?text=Avatar`

**Migración a producción:** Cuando se tengan las fotos reales de Ludmila:
1. Reemplazar cada URL de placehold.co por el archivo local en `src/assets/images/`
2. Mantener las mismas dimensiones (1200×600 hero, 800×600 galería, 400×400 retrato) para evitar CLS
3. Actualizar las rutas en los componentes `Hero` y galerías

---

## 8. Contacto

| Canal | Dato |
|---|---|
| WhatsApp | `https://wa.me/549XXXXXXXXXX` |
| Instagram | `https://instagram.com/ludmilapt` |
| Email | `ludmila@email.com` |

---

## 9. Plan de implementación

### Fase 1 — Fundación
- [ ] Layout global (Header, Footer, variables CSS en `:root`)
- [ ] Página Inicio (hero, stats, servicio destacado, testimonios, CTA)
- [ ] Página Asesorías (hero, comparativa, proceso, diferenciales, para quién, FAQ, CTA)
- [ ] Navegación responsive con menú hamburguesa

### Fase 2 — Contenido restante
- [ ] Página Mi Gimnasio (hero, galería, dirección, redirección online, CTA)
- [ ] Página Sobre Mí (hero, biografía, certificaciones, testimonios inline, frase, CTA)

### Fase 3 — Pulido
- [ ] Transiciones y animaciones sutiles
- [ ] SEO meta tags y Open Graph por página
- [ ] JSON-LD structured data (Person, FAQPage, LocalBusiness)
- [ ] Página 404 personalizada
- [ ] robots.txt en public/
- [ ] Accesibilidad: focus-visible, aria labels, roles semánticos
- [ ] Favicon personalizado
- [ ] Build y preview de producción
