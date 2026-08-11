# Lufit — Documento de entregas del proyecto

## Qué se entregó

Un sitio web promocional para **Ludmila García**, Profesora de Educación Física en Córdoba, Argentina. Su función principal es presentar los servicios (online y presencial), mostrar los planes disponibles y lograr que los interesados escriban por WhatsApp para empezar a entrenar.

- **Dirección web**: [https://ludmi-fit.vercel.app](https://ludmi-fit.vercel.app)
- **Responsable del sitio**: Marcos

## Las páginas del sitio

El sitio tiene 6 páginas que cualquier visitante puede recorrer:

| Página | Qué ve el cliente |
|---|---|
| **Inicio** | Presentación de Ludmila, resultados destacados, servicios online y presencial, opiniones de alumnos y botón para escribir por WhatsApp |
| **Asesorías** | Comparación entre modalidad online y presencial, el proceso en 4 pasos, para quién está pensado y respuestas a las preguntas más frecuentes |
| **Planes Listos** | Planes con precios y características, con botón de compra directa por WhatsApp |
| **Mi Gimnasio** | Fotos del espacio de entrenamiento, horarios de atención y cómo sumarse a la modalidad online |
| **Sobre Mí** | Biografía de Ludmila, certificaciones, opiniones de alumnos y una invitación a empezar las asesorías |
| **Página de error (404)** | Aviso amigable si alguien entra a una dirección equivocada, con enlace para volver al inicio |

## Cómo actualizar el contenido

Toda la información del sitio —textos, precios, horarios, fotos, contacto y opiniones— está guardada en archivos simples, un archivo por tema. Para cambiar algo (por ejemplo, actualizar un precio o agregar un testimonio), solo se edita ese archivo de texto, sin tocar el diseño ni el resto del sitio.

| Archivo | Qué contiene |
|---|---|
| `contacto.ts` | Números de WhatsApp, Instagram y email |
| `horarios.ts` | Horarios del gimnasio |
| `planes-listos.ts` | Planes de venta directa |
| `asesorias.ts` | Planes de asesoría |
| `planes-presenciales.ts` | Planes presenciales |
| `servicios.ts` | Tarjetas de servicios |
| `gallery.ts` | Fotos de la galería |
| `testimonios.ts` | Opiniones de alumnos |
| `stats.ts` | Estadísticas de resultados |
| `certificaciones.ts` | Certificaciones de Ludmila |
| `footer.ts` | Menú y textos del pie de página |

## Mantenimiento y funcionamiento

- Es un sitio **100% estático**: no necesita base de datos ni servidores complejos. Eso lo hace rápido, seguro y difícil de romper.
- Se **publica automáticamente** en Vercel: cuando se hacen cambios, el sitio se actualiza solo.
- Cualquier actualización de contenido o ajuste del sitio lo gestiona el desarrollador.

## Propiedad del sitio

### El código (la "estructura" del sitio) — licencia MIT

El código fuente del sitio (componentes, estilos, configuración) se entrega bajo licencia **MIT**: se puede usar, copiar o modificar libremente, incluso para otros proyectos, siempre que se mantenga el aviso de copyright. Se entrega "tal cual", sin garantías.

### El contenido (lo que ves en la web) — propiedad de Ludmila

**No está cubierto por la licencia MIT y es de uso exclusivo de Ludmila**:

- Los textos, fotografías y datos del sitio
- La marca y la identidad visual de Ludmila
- Los datos de contacto (WhatsApp, Instagram, email)
- Los archivos de contenido (planes, testimonios, horarios, etc.)

**Esto significa que**: nadie puede copiar los textos, las fotos ni los datos comerciales para usarlos en otros proyectos o vendérselos a otra persona, salvo con autorización explícita.

### Resumen

| Elemento | ¿A quién pertenece? | ¿Se puede reutilizar? |
|---|---|---|
| Estructura del sitio (código) | Licencia MIT | Sí, libremente |
| Textos del sitio | Ludmila | No |
| Fotografías | Ludmila | No |
| Marca e identidad | Ludmila | No |
| Datos comerciales (planes, contacto, etc.) | Ludmila | No |

---

*Este documento detalla las principales características del proyecto Lufit para el cliente.*
