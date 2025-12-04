fetch("/Jsons/Ejercicios.json")
    .then(res => res.json())
    .then(data => {
        const suplementos = data["suplementacion"];
        const contenedor = document.getElementById("contenedorSuplementos");

        suplementos.forEach(sup => {
            contenedor.innerHTML += `
                <div class="sup-card">
                    <img src="${sup.imagen}">
                    <h3>${sup.nombre}</h3>
                    <span>${sup.ideal}</span>
                    <p>${sup.descripcion}</p>
                </div>
            `;
        });
    });
