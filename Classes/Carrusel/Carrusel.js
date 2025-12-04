// POPUP
const popup = document.getElementById("popup");
const msg = document.getElementById("popup-msg");

// Nombre guardado
const nombreUsuario = localStorage.getItem("nombreUsuario");

// Comprobar si el popup ya se mostró una vez
const bienvenidaMostrada = localStorage.getItem("bienvenidaMostrada");

function mostrarPopup(mensaje) {
    msg.innerText = mensaje;
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3500);
}

// Mostrar SOLO la primera vez
if (nombreUsuario && !bienvenidaMostrada) {
    mostrarPopup(`Bienvenido ${nombreUsuario}, es hora de ponernos fuertes 💪`);

    // Guardar que ya se mostró
    localStorage.setItem("bienvenidaMostrada", "true");
}
