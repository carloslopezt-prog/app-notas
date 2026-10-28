# app-notas

# Aplicación de Notas - Rediseño UX/UI

Aplicación web para gestionar notas personales, rediseñada aplicando las 5 heurísticas de usabilidad de Nielsen, principios de diseño visual, leyes de usabilidad y pautas de accesibilidad WCAG.

## 🌐 Página Publicada
Puedes probar la aplicación en vivo aquí:  
https://github.com/carloslopezt-prog/app-notas.git
## 🛠️ Tecnologías Utilizadas
* HTML5 semántico
* CSS3 (Variables en `:root`, Flexbox, accesibilidad `:focus-visible`)
* JavaScript (Validación de formularios, mensajes de estado y manejo del DOM)

## 📁 Archivos de Auditoría
El informe completo con la auditoría heurística y las leyes aplicadas se encuentra en:  
`docs/AUDITORIA-UX.md`

## 🚀 Cambios de UX/UI Aplicados
* **Visibilidad del estado:** Mensajes emergentes al guardar y confirmación modal antes de eliminar una nota.
* **Prevención de errores:** Bloqueo de envío para campos vacíos mediante validación HTML5 y JS.
* **Leyes de usabilidad:** Aplicación de Fitts (botones amplios de 44px+), Hick y Miller (organización por bloques).
* **Accesibilidad:** Uso de `<label>`, contraste de color mínimo de 4.5:1 y bordes de enfoque visibles (`:focus-visible`).