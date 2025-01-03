document.addEventListener('DOMContentLoaded', function () {
    //seleccionar el contenedor del anuncio y el boton de cierre
    const anuncio = document.getElementById('anuncio');
    const botoncerrar = document.getElementById('cerrar');

    //verificar si se seleccionaron correctamente
    if (anuncio && botoncerrar) {
        //agregar el evento de clic al boton para cerrar el anuncio
        botoncerrar.addEventListener('click', function () {
            anuncio.style.display = 'none';// oculta el anuncio
        });
    } else {
        console.error("el anuncio o el boton de cierre no se encontraron.");
    }
});