// Mostrar nombre en la tarjeta
const nombreLS = localStorage.getItem("nombreUsuario");
document.getElementById("nombreUsuarioBox").textContent =
    nombreLS ? nombreLS : "Invitado";

// Cálculo del peso
document.getElementById("calcularBtn").addEventListener("click", () => {

    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseInt(document.getElementById("altura").value);
    const tipo = document.getElementById("tipoEntreno").value;
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
