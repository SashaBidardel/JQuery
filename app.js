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
    $("#color-azul").remove();
    // $("#color-azul").hide();
    $('img').attr('src','https://phantom-marca.unidadeditorial.es/56d7a68c584868105d4fb6095cbde388/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/03/16200468975505.jpg');
    $('img').attr("width","50")
    var parrafo =$('#res')
    $('.btn-primary').click(function (e) { 
        parrafo.addClass('display-4')
        
    });
    $('.btn-danger').click(function (e) { 
        parrafo.removeClass('display-4')
        
    });
    $('.btn-warning').click(function (e) { 
        parrafo.toggleClass('display-4')
        
    });
   $('#texto').keyup(function (e) { 
       $('#saludo').html($('#texto').val());
   });
})
