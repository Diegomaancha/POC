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

<<<<<<< HEAD
console.log(nombreUsuario);

// MOSTRAR POPUP CON EL NOMBRE
mostrarPopup(`Bienvenido, ${nombreUsuario} 💪 es hora de ponernos fuertes `);
=======
console.log(localStorage.getItem());

// MOSTRAR POPUP CON EL NOMBRE
mostrarPopup(`Bienvenido, es hora de ponernos fuertes ${nombreUsuario} 💪`);
>>>>>>> f98fe4060fff4008e8d749770321118dcc319610
