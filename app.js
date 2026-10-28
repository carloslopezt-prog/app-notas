const formulario = document.getElementById("formulario-nota");
const mensaje = document.getElementById("mensaje");
const listaNotas = document.getElementById("lista-notas");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formulario.classList.add("validado");

  if (!formulario.checkValidity()) {
    mostrarMensaje("Por favor llena todos los campos marcados.", "error");
    formulario.querySelector("input:invalid, textarea:invalid").focus();
    return;
  }

  const titulo = document.getElementById("titulo").value;
  const contenido = document.getElementById("contenido").value;

  const li = document.createElement("li");
  li.className = "item-nota";
  li.innerHTML = `
    <h3>${titulo}</h3>
    <p>${contenido}</p>
    <button class="boton-eliminar">Eliminar nota</button>
  `;

  li.querySelector(".boton-eliminar").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      li.remove();
      mostrarMensaje("Nota eliminada correctamente.", "info");
    }
  });

  listaNotas.appendChild(li);

  formulario.reset();
  formulario.classList.remove("validado");
  mostrarMensaje("¡Nota agregada con éxito!", "exito");
});