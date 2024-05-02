$(document).ready(function(){
    $("#mover").click(function(){
        $(".cuadrado").animate({left:'900px'});


    });
    //Agregar texto con jquery de manera dinamica
    $("#agregar").click(function(){
        let texto = " Texto agregado con jquery miaumiaumiau";
        $("#container").append('<p>'+texto+'</p>');
    });
});