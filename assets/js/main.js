$(document).ready(function(){
    //SmootScroll
    $("a").click(function(event){
        event.preventDefault();

        var seccion = this.hash;

        $("html").animate({
                scrollTop: $(seccion).offset().top - 75
            },
            800,
        );
    });

    //Acción de enviar correo
    $('#enviarCorreo').click(function(){
        alert("El correo fue enviado correctamente...")
    });
});

//Se habilita la acción de tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});