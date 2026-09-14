---
description: Analiza compatibilidad de versiones del proyecto con las últimas versiones estables. NO ejecuta actualizaciones — solo reporta.
---

# /check-updates

Analiza todas las dependencias del proyecto, busca las últimas versiones estables disponibles, verifica breaking changes y produce un reporte de impacto.

**Uso:**

- `/check-updates` — análisis completo de todas las dependencias
- `/check-updates --astro-only` — analiza solo Astro y sus integraciones

**No ejecuta ninguna actualización.** Solo observa y reporta.

---

## FASE 1: INVENTARIO

1. Lee `package.json` raíz e identifica:
   - Todas las `dependencies` con su versión actual (rango semver)
   - Todas las `devDependencies` con su versión actual
   - El campo `engines.node` para verificar compatibilidad de Node.js

2. Lee `astro.config.mjs` e identifica:
   - Todas las integraciones importadas (`@astrojs/*`, plugins de terceros)
   - Configuraciones experimentales (`experimental.*`)
   - Features que puedan verse afectadas por actualizaciones

3. Lee `tsconfig.json` si existe, para verificar compatibilidad de TypeScript.

4. Si el argumento `$ARGUMENTS` contiene `--astro-only`, salta al paso 5 directamente y enfoca el análisis solo en `astro` y `@astrojs/*`. Si no, continúa con el inventario completo.

---

## FASE 1.5: SEGURIDAD

1. Ejecuta `npm audit --json 2>&1` y parsea el output:
   - Cuenta vulnerabilidades por severidad: `critical`, `high`, `moderate`, `low`
   - Si hay **critical** o **high** → bandera roja, se reporta como hallazgo de seguridad prioritario
   - Si solo hay **moderate** o **low** → se reporta como nota informativa
   - Si no hay vulnerabilidades → se reporta como "limpio"

2. Verifica compatibilidad de Node.js:
   - Lee el campo `engines.node` de `package.json`
   - Para cada dependencia con actualización de **major** o **minor** significativo, busca con `websearch`: `"<paquete>" minimum node version`
   - Si algún paquete requiere una versión de Node superior a la declarada en `engines` → reporta el conflicto
   - Si no hay conflicto → no reportes nada (evita ruido)

3. **Restricción**: NO ejecutes `npm audit fix` ni ningún comando que modifique el proyecto. Solo lees y analizas.

---

## FASE 2: DESCUBRIMIENTO DE VERSIONES

Para cada dependencia identificada en la Fase 1:

1. Usa `websearch` para buscar: `"<nombre-paquete>" latest stable version <año-actual>`
2. Registra: versión actual → última versión estable disponible
3. Clasifica la diferencia:
   - **Patch** (x.y.Z): raramente tiene breaking changes
   - **Minor** (x.Y.0): puede tener features nuevos, breaking changes en experimentales
   - **Major** (X.0.0): casi siempre tiene breaking changes

**Restricción**: NO uses `npm view` ni `npm outdated`. Usa solo `websearch` y documentación oficial. Esto es una decisión de diseño: el comando es un análisis de consultoría, no un gestor de paquetes.

---

## FASE 3: ANÁLISIS DE COMPATIBILIDAD

### Para Astro y @astrojs/*:

1. Consulta el MCP de Astro docs para buscar la guía de migración de la versión actual a la última.
2. Usa `websearch` para buscar: `Astro <versión-actual> to <versión-última> migration guide breaking changes`
3. Revisa si hay breaking changes que afecten:
   - Configuración de `astro.config.mjs`
   - APIs usadas en componentes (ej: `Astro.*`, `astro:assets`, `astro:transitions`)
   - Integraciones que pudieran necesitar actualización simultánea
   - Cambios en el compilador Rust (HTML parsing, Markdown processing)

### Para dependencias de npm genéricas:

1. Busca el changelog o release notes en GitHub/npm:
   `websearch: "<paquete> <versión-actual> changelog breaking changes"`
2. Verifica si los breaking changes impactan APIs que el proyecto usa realmente
3. Si el paquete es una dependencia de Astro (ej: Vite, Sharp), verifica compatibilidad con la versión de Astro

### Para TypeScript:

1. Verifica si la versión actual es compatible con la nueva versión de Astro
2. Busca breaking changes en TypeScript que afecten la config del proyecto

---

## FASE 4: IMPACTO EN EL CODEBASE

Para cada breaking change detectado en la Fase 3:

1. Usa `grep` para buscar en el codebase si el proyecto usa la API/feature afectada
   - Ejemplo: si hay un breaking change en `compressHTML`, busca `compressHTML` en todos los archivos
   - Ejemplo: si hay un cambio en `astro:assets`, busca `astro:assets` y `<Image>` en componentes

2. Para cada resultado de grep, clasifica:
   - **Afectado directamente** — el proyecto usa la API que cambia
   - **Afectado potencialmente** — el proyecto podría estar en una ruta que cambia
   - **No afectado** — el cambio no aplica al codebase

3. Identifica **mejoras disponibles**: features nuevas en la última versión que el proyecto podría aprovechar (ej: mejoras de rendimiento, nuevas APIs, mejoras de tipado)

---

## FASE 4.5: LIMPIEZA

1. Usa `grep` o `glob` para extraer todos los imports del codebase:
   - Busca patrones: `import ... from "..."` en `src/**/*.astro`, `src/**/*.ts`, `src/**/*.js`
   - Registra los nombres de paquete raíz de cada import (ej: `astro`, `@astrojs/sitemap`, `sharp`)

2. Cruza la lista de imports con las `dependencies` de `package.json`:
   - Si una dependencia **no aparece** en ningún import → es candidata a **dependencia huérfana**
   - Excepción: dependencias que Astro carga automáticamente (`astro`, `@astrojs/sitemap` como integración) no se consideran huérfanas aunque no se importen directamente

3. Para cada dependencia huérfana detectada:
   - Indica que no se encontró uso en el codebase
   - Sugiere verificar si se puede eliminar
   - NO la elimines — solo reporta

4. **Restricción**: esta fase es de observación únicamente. No modifiques `package.json` ni ejecutes `npm uninstall`.

---

## FASE 5: REPORTE

Produce un reporte con este formato exacto:

### Resumen de versiones

```
| Paquete              | Actual  | Última  | Diferencia | Riesgo   |
|----------------------|---------|---------|------------|----------|
| astro                | x.x.x   | x.x.x   | patch/minor| bajo     |
| @astrojs/sitemap     | x.x.x   | x.x.x   | patch      | ninguno  |
| sharp                | x.x.x   | x.x.x   | patch      | bajo     |
| typescript           | x.x.x   | x.x.x   | patch      | bajo     |
```

### Estado de seguridad

```
Vulnerabilidades: [limpio / N moderate / N high / N critical]
Node.js compat:  [compatible / conflicto detectado]
```

Si hay vulnerabilidades, enuméralas:
```
- [paquete]@[versión]: [severidad] — [descripción breve del CVE]
  Acción: [esperar fix / actualizar paquete / sin acción inmediata]
```

Si hay conflicto de Node.js:
```
- [paquete] requiere Node >= X.Y.Z, pero el proyecto declara engines.node >= A.B.C
  Acción: [actualizar engines.node / evitar esta versión del paquete]
```

### Breaking Changes Detectados

Para cada paquete con breaking changes:

```
#### [paquete] X.Y.Z → A.B.C

**Breaking change:** [descripción concisa]

**Impacto en este proyecto:**
- [Afectado/No afectado] — [razón específica]
- Archivos afectados: [lista si aplica]

**Acción requerida:** [nada / actualizar código / configuración / dependencias]
```

### Features nuevas disponibles

Lista de features nuevas que el proyecto podría aprovechar:
- Feature: [descripción]
- Relevancia: [alta/media/baja] para este proyecto
- Esfuerzo de adopción: [nulo/bajo/medio/alto]

### Dependencias huérfanas

Lista de dependencias que no se encontraron en el codebase:
- `[paquete]` — no se detectó uso en src/. Candidata a eliminación.
- `[paquete]` — integración de Astro, carga automática. No requiere acción.

Si no hay huérfanas: "No se detectaron dependencias huérfanas."

### Recomendación final

Clasificación para cada paquete:
- **Actualizar ahora** — sin riesgo, beneficios claros
- **Esperar** — esperar a que salga una patch de fix
- **Revisar manualmente** — hay breaking changes que requieren evaluación
- **No actualizar** — la versión actual es suficiente, el upgrade no justifica el esfuerzo

---

## RESTRICCIONES

1. **NUNCA** ejecutes `npm install`, `npm update`, `npm outdated`, `npm audit fix`, `npx astro add`, ni ningún comando que modifique el proyecto
2. **NUNCA** modifiques archivos del proyecto
3. **NUNCA** instales, actualices o desinstales paquetes — solo analiza
4. Si no puedes determinar la última versión estable de un paquete, indícalo explícitamente como "no determinado" en el reporte
5. Si un paquete tiene más de 10 dependencias transitivas relevantes, menciona solo las más impactantes
6. El reporte debe ser comprensible para un desarrollador no experto — explica conceptos técnicos cuando sea necesario
7. Si el usuario pide profundizar en algún punto específico, usa las herramientas disponibles (websearch, MCP, grep) para obtener más detalles
8. En la fase de seguridad, **nunca** ejecutes `npm audit fix` — solo reporta las vulnerabilidades encontradas
9. En la fase de limpieza, **nunca** ejecutes `npm uninstall` — solo reporta las dependencias huérfanas
