fetch("/Jsons/Ejercicios.json")
    .then(res => res.json())
    .then(data => {
        const suplementos = data["suplementacion"];
        const contenedor = document.getElementById("contenedorSuplementos");

        suplementos.forEach(sup => {
            contenedor.innerHTML += `
                <div class="sup_card">
                    <img src="${sup.imagen}">
                    <h3>${sup.nombre}</h3>
                    <span>${sup.ideal}</span>
                    <p>${sup.descripcion}</p>
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

