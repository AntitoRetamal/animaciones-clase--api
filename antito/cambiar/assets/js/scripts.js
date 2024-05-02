$(document).ready(function(){
    //contar caracteres
    $("#contar").click(function(){
        let texto = $("#texto").val();
        longitud = texto.length;
       // console.log(longitud);
        $("#resultado").text("el texto tiene: "+longitud+" letras");
        //console.log(texto); comprobamos que esta bien y captura los caracteres a traves de la consola
    });
    //transformar a mayusculas

    $("#mayuscula").click(function(){
        let texto = $("#texto").val();

        // convertir esta variable a texto MAYUSCULA
        let mayuscula = texto.toUpperCase();
        //imprimimos resultado
        $("#resultado").text(mayuscula);

    });

    //transformamos a minusculas
    $("#minuscula").click(function(){
        let texto = $("#texto").val();

        // convertir esta variable a texto MAYUSCULA
        let minuscula = texto.toLowerCase();
        //imprimimos resultado
        $("#resultado").text(minuscula);

    });


});