const popup = document.getElementById("popup");
const msg = document.getElementById("popup-msg");

// OBTENER NOMBRE DEL USUARIO BIEN
const nombreUsuario = localStorage.getItem("nombreUsuario");

// FUNCIÓN POPUP
function mostrarPopup(mensaje) {
    msg.innerText = mensaje;
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 2500);
}

// MOSTRAR POPUP CON EL NOMBRE
mostrarPopup(`Bienvenido, es hora de ponernos fuertes ${nombreUsuario} 💪`);
