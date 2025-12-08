// Mostrar nombre en la tarjeta
const nombreLS = localStorage.getItem("nombreUsuario");
document.getElementById("nombreUsuarioBox").textContent =
    nombreLS ? nombreLS : "Invitado";

// Cálculo del peso
document.getElementById("calcularBtn").addEventListener("click", () => {

    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseInt(document.getElementById("altura").value);
    const tipo = document.getElementById("tipo_entreno").value;
    const resultado = document.getElementById("resultado");

    if (!edad || !altura) {
        resultado.textContent = "Completa todos los campos.";
        return;
    }

    let pesoBase = (altura - 100) * 0.9;

    let multiplicador = {
        cardio: 0.92,
        pesas: 1.10,
        hibrido: 1.00
    }[tipo];

    let pesoFinal = pesoBase * multiplicador;

    resultado.textContent = 
        `Tu peso ideal aproximado es: ${pesoFinal.toFixed(1)} kg`;
});

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


