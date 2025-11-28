// CAPTURA DEL POPUP IGUAL QUE EN PRINCIPAL
const popup = document.getElementById("popup");
const msg = document.getElementById("popup-msg");

// NOMBRE DEL LOCALSTORAGE
const nombreUsuario = localStorage.getItem("nombreUsuario");

// FUNCIÓN POPUP EXACTA A LA DEL PRINCIPAL
function mostrarPopup(mensaje) {
    msg.innerText = mensaje;
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3500);
}

// SI EXISTE NOMBRE, MOSTRAR POPUP
if (nombreUsuario) {
    mostrarPopup(`Bienvenido ${nombreUsuario}, es hora de ponernos fuertes 💪`);
}

