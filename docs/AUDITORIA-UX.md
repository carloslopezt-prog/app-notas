# Auditoría y Rediseño de UX/UI - App de Notas

## 1. Tabla de Auditoría Heurística (Nielsen)

| Heurística | Problema Encontrado | Gravedad | Solución Aplicada |
| :--- | :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar o borrar una nota no hay confirmación visual. | Alta | Se añadió una notificación temporal al guardar o eliminar. |
| **Coincidencia con el mundo real** | Botones con etiquetas técnicas o ambiguas. | Media | Se cambiaron las etiquetas por frases más claras y humanas (ej. "Guardar nota"). |
| **Control y libertad** | Al presionar eliminar nota, esta se borra de inmediato. | Alta | Se agregó una confirmación modal para cancelar la acción destructiva. |
| **Prevención de errores** | Permite guardar notas totalmente vacías. | Alta | Se implementó validación en el formulario para desactivar o bloquear el guardado vacío. |
| **Reconocer, no recordar** | Usaba `placeholder` en lugar de etiquetas estables. | Media | Se integraron `<label>` visibles para cada campo. |

---

## 2. Aplicación de Leyes de Usabilidad

* **Ley de Fitts:** El botón principal para "Guardar nota" se hizo más ancho, alto (mínimo 44px de alto) y separado de la opción de eliminar para prevenir clics erróneos.
* **Ley de Hick:** Se organizaron las notas guardadas con filtros por categorías reduciendo la cantidad de opciones en pantalla simultáneamente.
* **Ley de Miller:** Se agrupó la interfaz en 2 secciones diferenciadas (Creación de nota y Lista de notas) para no sobrecargar la memoria de trabajo del usuario.

---

## 3. Accesibilidad y Auditoría Lighthouse

* **Etiquetas y Contraste:** Todos los elementos poseen atributos `label` y un contraste de texto mayor a 4.5:1.
* **Navegación por Teclado:** Se añadió `:focus-visible` con un borde diferencial claro para la navegación mediante la tecla `Tab`.
