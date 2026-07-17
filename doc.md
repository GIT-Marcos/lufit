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
| `--color-secondary` | `#059669` | Verde — detalles, badges, iconos secundarios |
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
- **SEO**: `<meta>` tags por página, Open Graph básico

### 3.2 Rutas

| Ruta | Página | Archivo |
|---|---|---|
| `/` | Inicio | `src/pages/index.astro` |
| `/asesorias` | Asesorías | `src/pages/asesorias.astro` |
| `/mi-gimnasio` | Mi Gimnasio | `src/pages/mi-gimnasio.astro` |
| `/sobre-mi` | Sobre Mí | `src/pages/sobre-mi.astro` |

---

## 4. Especificación por página

### 4.1 Inicio (`/`)

**Objetivo**: Captar atención, comunicar propuesta de valor, guiar a asesorías.

**Secciones:**
1. **Hero** (full viewport)
   - Foto placeholder de Ludmila entrenando
   - Headline: "Transformá tu cuerpo, transformá tu vida"
   - Subtítulo breve
   - CTA principal: "Empezá hoy" → link a `/asesorias`
2. **Servicio destacado** (2 columnas)
   - Icono + título: "Planes personalizados"
   - Descripción: "Online o presencial con seguimiento continuo"
   - CTA secundario: "Conocé más"
3. **Testimonios / Resultados** (grid de 4 tarjetas, escalable)
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
4. **CTA final**
   - Frase motivacional + botón "Contactame por WhatsApp"

### 4.2 Asesorías (`/asesorias`)

**Objetivo**: Explicar y vender el plan único de asesoría.

**Secciones:**

1. **Hero interior** (título + descripción)
   - "Planes Personalizados con Seguimiento"

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

4. **Detalle del plan único**
   - Qué incluye:
     - Rutina diseñada a medida
     - Seguimiento continuo (online y/o presencial)
     - Ajustes periódicos
     - Acompañamiento por WhatsApp
   - Modalidades: Online | Presencial (en su gimnasio) | Híbrido
   - Precio: "Consultar"

5. **Diferenciales** (grid de 6 datos concretos)
   - "Planes 100% a tu medida — no hay rutinas genéricas ni copiadas"
   - "Ajustes semanales según tu evolución real"
   - "Acompañamiento por WhatsApp — no soy un bot, respondo yo"
   - "Corrección de técnica para evitar lesiones y maximizar resultados"
   - "Flexibilidad total: online, presencial o combinado"
   - "No necesitás experiencia previa — arrancamos desde donde estés"

6. **¿Para quién es?** (grid o lista con íconos)
   - Principiantes que nunca pisaron un gimnasio
   - Personas que quieren retomar después de un tiempo
   - Intermedios que estancaron y no ven resultados
   - Cualquiera que busque un cambio real con acompañamiento profesional

7. **FAQ** (acordeón, 8 preguntas predefinidas)
   - ¿Necesito experiencia previa para empezar?
   - ¿Cuántos días a la semana entreno?
   - ¿Qué necesito para la modalidad online?
   - ¿Cada cuánto se ajusta la rutina?
   - ¿Puedo combinar online y presencial?
   - ¿Hay periodo de prueba o evaluación gratis?
   - ¿Cómo son los pagos?
   - ¿Qué pasa si no puedo una semana?

8. **CTA**: Botón de WhatsApp

### 4.3 Mi Gimnasio (`/mi-gimnasio`)

**Objetivo**: Mostrar el espacio físico.

**Secciones:**
1. **Hero** con imagen placeholder del gimnasio
2. **Galería de imágenes** (grid de placeholders)
3. **Dirección** (placeholder)
   - Mapa embebido placeholder
   - Dirección textual placeholder
4. **Horarios** (placeholders)
5. **Servicios disponibles en el gimnasio** (descriptivo)

### 4.4 Sobre Mí (`/sobre-mi`)

**Objetivo**: Generar confianza, conectar con la historia de Ludmila.

**Secciones:**
1. **Hero** con foto placeholder de Ludmila (retrato)
2. **Biografía**
   - Quién es, filosofía de entrenamiento, por qué empezó
   - Placeholder para texto real
3. **Certificaciones / Formación**
   - Lista con iconos, placeholders
4. **Frase personal** (blockquote destacado)
5. **CTA**: "Entrenemos juntos" → WhatsApp

---

## 5. Árbol de componentes

### 5.1 Componentes reutilizables

| Componente | Archivo | Descripción |
|---|---|---|
| `Header.astro` | `src/components/Header.astro` | Nav, logo, hamburguesa |
| `Footer.astro` | `src/components/Footer.astro` | Redes, copyright |
| `Hero.astro` | `src/components/Hero.astro` | Hero reutilizable (title, subtitle, cta, image) |
| `Button.astro` | `src/components/Button.astro` | Botón reutilizable (variant, href, children) |
| `Card.astro` | `src/components/Card.astro` | Tarjeta genérica (title, description, image, icon) |
| `PlanCard.astro` | `src/components/PlanCard.astro` | Tarjeta de plan de asesoría |
| `TestimonialCard.astro` | `src/components/TestimonialCard.astro` | Tarjeta de testimonio |
| `FAQ.astro` | `src/components/FAQ.astro` | Acordeón de preguntas frecuentes |
| `Steps.astro` | `src/components/Steps.astro` | Proceso paso a paso (numero, titulo, descripcion) |
| `Comparativa.astro` | `src/components/Comparativa.astro` | Tabla comparativa 2 columnas |
| `IconWhatsApp.astro` | `src/components/icons/IconWhatsApp.astro` | SVG inline WhatsApp |
| `IconInstagram.astro` | `src/components/icons/IconInstagram.astro` | SVG inline Instagram |
| `IconEmail.astro` | `src/components/icons/IconEmail.astro` | SVG inline Email |
| `IconMenu.astro` | `src/components/icons/IconMenu.astro` | SVG inline hamburguesa |

### 5.2 Convención de props

```ts
interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: { text: string; href: string };
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
- Carpetas: `kebab-case`

### 6.4 Imágenes

- Carpeta `src/assets/images/` para imágenes locales
- Placeholders iniciales vía `https://placehold.co/`
- Atributo `alt` siempre presente y descriptivo
- Usar `fetchpriority` en hero images

---

## 7. Estrategia de imágenes placeholder

```
https://placehold.co/{width}x{height}/{bg}/{text}?text={texto}
```

Ejemplos:
- Hero principal → `https://placehold.co/1200x600/EA580C/FFFFFF?text=Ludmila+PT`
- Retrato → `https://placehold.co/400x400/059669/FFFFFF?text=Ludmila`
- Gimnasio → `https://placehold.co/800x600/1C1917/FAFAF9?text=Mi+Gimnasio`
- Avatar testimonio → `https://placehold.co/80x80/E7E5E4/1C1917?text=Avatar`

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
- [ ] Página Inicio (hero + servicio destacado)
- [ ] Página Asesorías (comparativa, proceso, plan, diferenciales, para quién, FAQ)
- [ ] Navegación responsive con menú hamburguesa

### Fase 2 — Contenido restante
- [ ] Página Mi Gimnasio
- [ ] Página Sobre Mí

### Fase 3 — Pulido
- [ ] Testimonios en Inicio
- [ ] Transiciones y animaciones sutiles
- [ ] SEO meta tags y Open Graph
- [ ] Favicon personalizado
- [ ] Build y preview de producción
