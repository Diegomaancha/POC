// Obtener parámetro de la URL
const params = new URLSearchParams(window.location.search);
const musculo = params.get("musculo");

// Cambiar título dinámicamente
document.getElementById("tituloMusculo").textContent = 
    musculo.charAt(0).toUpperCase() + musculo.slice(1);

// Contenedor donde irán los ejercicios
const contenedor = document.getElementById("contenedorEjercicios");

// Cargar JSON
fetch("/Jsons/Ejercicios.json")
    .then(res => res.json())
    .then(data => {
        const ejercicios = data[musculo];

        ejercicios.forEach(ej => {
            contenedor.innerHTML += `
                <div class="ej_card">
                    <img src="${ej.imagen}">
                    <h3>${ej.nombre}</h3>
                    <p>${ej.descripcion}</p>
                </div>
            `;
        });
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


