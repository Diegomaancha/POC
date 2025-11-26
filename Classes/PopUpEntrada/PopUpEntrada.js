window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    popup.showPopover();

    const btnNo = document.querySelector(".botonno");
    const btnSi = document.querySelector(".botonsi");
    const popupNo = document.getElementById("popupNo");
    const popupSi = document.getElementById("popupSi");
    const popupVacio = document.getElementById("popupVacio");
    const nombreusu = document.querySelector(".nombreusuario");
    const btnContinuar = document.querySelector(".botoncontinuar");


    // BOTÓN NO
    btnNo.addEventListener("click", () => {

        // Mostrar popup de aviso
        popup.hidePopover();
        popupNo.showPopover();

        // Esperar 3 segundos y cerrar la página
        setTimeout(() => {

            window.close();



        }, 3000);
    });

    //Cambiar de clase al elegir el botón

    btnSi.addEventListener("click", () => {

        // Oculta el popup principal
        popup.hidePopover();


        // Muestra el popup del nombre
        popupSi.classList.remove("hidden");
        popupSi.showPopover();



    }
    )

    btnContinuar.addEventListener("click", () => {
    const nombre = nombreusu.value.trim();

    if (nombre === "") {

        // Ocultar popup del nombre
        popupSi.hidePopover();

        // Mostrar popup de nombre vacío
        popupVacio.classList.remove("hidden");
        popupVacio.showPopover();

        // Tras 2 segundos: cerrar popupVacio y volver a popupSi
        setTimeout(() => {
            popupVacio.hidePopover();
            popupSi.showPopover();
        }, 2000);

        return;
    }

    // Si el nombre es válido
    localStorage.setItem("nombreUsuario", nombre);
    window.location.href = "/Classes/Principal/Principal.html";
});





});
