// ======== ELEMENTOS DEL DOM ========
const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const sectionNombre = document.getElementById("nombre-section");
const btnEntrar = document.getElementById("btn-entrar");
const pregunta = document.getElementById("pregunta");

// ======== FUNCIÓN PARA MOSTRAR POPUP ========
function mostrarPopup(mensaje) {
    const popup = document.getElementById("popup");
    const msg = document.getElementById("popup-msg");

    msg.innerText = mensaje;
    popup.classList.remove("hidden");

    // Se esconde solo a los 2.5 segundos
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 2500);
}

// ======== SI: QUIERE EMPEZAR EL CAMBIO ========
btnSi.addEventListener("click", () => {
    pregunta.style.display = "none";          // Oculta la pregunta
    sectionNombre.classList.remove("hidden"); // Muestra input del nombre
});

// ======== NO: NO QUIERE HACER EL CAMBIO ========
btnNo.addEventListener("click", () => {
    pregunta.style.display = "none"; 

    mostrarPopup("¡Vuelve cuando estés listo para tu cambio físico! 💪");

    // Cierra la web después del popup
    setTimeout(() => {
        window.close();
    }, 2500);
});

// ======== BOTÓN ENTRAR: GUARDAR NOMBRE Y PASAR A PÁGINA PRINCIPAL ========
btnEntrar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        mostrarPopup("Por favor, escribe tu nombre.");
        return;
    }

    // Guardar el nombre en localStorage
    localStorage.setItem("nombreUsuario", nombre);

    // Redirigir a la página principal
    window.location.href = "/Classes/Principal/Principal.html";
});
