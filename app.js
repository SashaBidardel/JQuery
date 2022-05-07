$(document).ready(function(){
    console.log("hola")
    $('h1').html("nueva etiqueta")
    $('.display-4').html("cambiando etiqueta con clase display-4")
    $('#h3').html("cambiando etiqueta con id h3")
    $('.container h5').html("Cambiando  h5s del container")
    $('.container h6:first').html("Cambiando el primer h6 del container")
    $('.container h6:last').html("Cambiando el último h6 del container")
    $('#h3').addClass('text-danger');
    $('#h3').removeClass('text-danger');
    $('.container').append(' <h1>Añado un elelmento de manera dinámica al final</h1>');
    $('#contenido').prepend(' <h1>Añado un elelmento de manera dinámica al inicio</h1>');
    $("#color-azul").css('color', 'blue');
    $("#color-azul").css({color: 'blue',background: 'red',padding: '20px'});
})
