document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("footer-container");

    if (!contenedor) {
        console.error("No existe el div con id='footer-container'");
        return;
    }

    // Cargar el HTML del footer
    fetch("/Classes/Footer/Footer.html")
        .then(res => res.text())
        .then(html => {
            contenedor.innerHTML = html;

            // Cargar ionicons
            const script1 = document.createElement("script");
            script1.type = "module";
            script1.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
            document.body.appendChild(script1);

            const script2 = document.createElement("script");
            script2.noModule = true;
            script2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
            document.body.appendChild(script2);
        });
});
