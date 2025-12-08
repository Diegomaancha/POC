// ===============================
//  BOTÓN MODO OSCURO (ARREGLADO)
// ===============================
const btnModo = document.getElementById("modoBtn");

if (localStorage.getItem("modo") === "dark") {
    document.body.classList.add("dark");
    if (btnModo) btnModo.textContent = "☀️";
}

if (btnModo) {
    btnModo.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("modo", "dark");
            btnModo.textContent = "☀️";
        } else {
            localStorage.setItem("modo", "light");
            btnModo.textContent = "🌙";
        }
    });
}

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


