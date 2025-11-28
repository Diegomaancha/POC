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
                <div class="ej-card">
                    <img src="${ej.imagen}">
                    <h3>${ej.nombre}</h3>
                    <p>${ej.descripcion}</p>
                </div>
            `;
        });
    });
