const popup = document.getElementById("popup");
const msg = document.getElementById("popup-msg");


let index = 0;
const slides = document.querySelectorAll(".slide");
const btnIzq = document.querySelector(".izq");
const btnDer = document.querySelector(".der");

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

console.log(nombreUsuario);

// MOSTRAR POPUP CON EL NOMBRE
mostrarPopup(`Bienvenido ${nombreUsuario}  es hora de ponernos fuertes 💪`);


fetch("/Classes/Footer/Footer.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("footer-container").innerHTML = html;
    });



// Mostrar slide
function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));

    index = (n + slides.length) % slides.length;
    slides[index].classList.add("active");
}

// Automático cada 3 segundos
let auto = setInterval(() => {
    mostrarSlide(index + 1);
}, 3000);

// Flecha derecha
btnDer.addEventListener("click", () => {
    mostrarSlide(index + 1);
    reiniciarAuto();
});

// Flecha izquierda
btnIzq.addEventListener("click", () => {
    mostrarSlide(index - 1);
    reiniciarAuto();
});

// Reiniciar el auto-play cuando usas flechas
function reiniciarAuto() {
    clearInterval(auto);
    auto = setInterval(() => {
        mostrarSlide(index + 1);
    }, 3000);
}


