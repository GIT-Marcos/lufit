# Plan: View Transitions nativas + prefetch `tap`

## Objetivo
Animar las navegaciones entre las 6 páginas del sitio (cross-fade + entrada con deslizamiento sutil, header estable) usando la API nativa de View Transitions vía CSS puro — sin `<ClientRouter />`, sin refactors de scripts — y cambiar la estrategia de prefetch default a `tap` para audiencia mobile-first. Degradación elegante: Firefox navega como hoy; usuarios con `prefers-reduced-motion` reciben swap instantáneo.

## Archivos

| Acción | Ruta |
|---|---|
| Modificar | `astro.config.mjs` (1 línea) |
| Modificar | `src/styles/global.css` (añadir sección al final) |
| Modificar | `src/components/Header.astro` (1 propiedad CSS) |

Sin archivos nuevos, sin eliminaciones. **No se toca** `Layout.astro`, ningún `<script>`, ni ningún link del sitio.

## Pasos

### Paso 1 — Estrategia de prefetch a `tap`
En `astro.config.mjs`, bloque `prefetch` (líneas 11-13), agregar la propiedad `defaultStrategy: 'tap'`:

```js
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'tap',
  },
```

Mantener el estilo existente del archivo (single quotes, 2-space indent). No agregar atributos `data-astro-prefetch` a ningún link.

### Paso 2 — Activar las transiciones nativas
En `src/styles/global.css`, al final del archivo (después de la línea 232), añadir sección nueva:

```css
/* === View Transitions (MPA nativo) === */
/* Transiciones entre documentos del navegador (Chrome/Edge 126+, Safari 18.2+).
   Firefox: navegación normal sin animación. */
@view-transition {
  navigation: auto;
}

/* Accesibilidad: movimiento reducido = swap instantáneo, sin animación */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-image-pair(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```

### Paso 3 — Header estable entre páginas
En `src/components/Header.astro`, dentro de la regla `.header` existente del bloque `<style>` (líneas 72-83), añadir después de `border-bottom: 3px solid var(--color-secondary);`:

```css
    view-transition-name: site-header;
```

### Paso 4 — Pulido de la animación
En la misma sección de `global.css`, añadir después del bloque de reduced-motion:

```css
/* Pulido: salida sutil + entrada con deslizamiento (timing alineado a --transition-base) */
@keyframes vt-fade-out {
  to {
    opacity: 0;
  }
}

@keyframes vt-slide-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

::view-transition-old(root) {
  animation: 0.2s ease-out both vt-fade-out;
}

::view-transition-new(root) {
  animation: 0.3s cubic-bezier(0.4, 0, 0.2, 1) both vt-slide-in;
}
```

### Paso 5 — No hacer nada más
No importar `ClientRouter`, no agregar directivas `transition:*`, no refactorizar scripts, no tocar JSON-LD ni `Layout.astro`.

## Verificación

- **V1** — `npm run dev` en Chrome/Edge: clic por los 5 links del nav → cross-fade + deslizamiento sutil, header sin parpadeo, sin flash blanco.
- **V2** — Botones back/forward → animan igual.
- **V3** — DevTools → Rendering → "Emulate CSS prefers-reduced-motion: reduce" → swap instantáneo.
- **V4** — Network tab (dev, Chrome): al presionar un link interno, el request del HTML aparece antes de completar la navegación (confirma estrategia `tap`). Links de WhatsApp no se prefetchan.
- **V5** — Firefox: recorrer las 6 páginas → comportamiento actual (sin animación), sin errores.
- **V6** — `npm run build && npm run preview` → repetir V1-V4.
- **V7** — Verificar que `dist/_astro/*.css` contiene `@view-transition` y que el HTML incluye el script de prefetch.
- **V8** — `npx astro check` → sin errores.

Esfuerzo estimado: ~30-45 min incluyendo verificación completa.
