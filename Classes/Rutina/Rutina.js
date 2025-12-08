// ===============================
//     BOTÓN MODO OSCURO
// ===============================

const btnModo = document.getElementById("modoBtn");

// Cargar modo guardado
if (localStorage.getItem("modo") === "dark") {
    document.body.classList.add("dark");
    btnModo.textContent = "☀️";
}

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
