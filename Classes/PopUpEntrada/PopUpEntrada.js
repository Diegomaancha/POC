window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    popup.showPopover();

    const btnNo = document.querySelector(".botonno");
    const popupNo = document.getElementById("popupNo");

    // BOTÓN NO
    btnNo.addEventListener("click", () => {

        // Mostrar popup de aviso
        popupNo.showPopover();

        // Esperar 3 segundos y cerrar la página
        setTimeout(() => {
            window.open("", "_self");
            window.close();
        }, 3000);
    });
});
