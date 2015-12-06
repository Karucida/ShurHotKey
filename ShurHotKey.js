// ==UserScript==
// @name         ShurHotKey
// @version      0.2
// @description  Recorre el foro con el teclado ->
// @author       Karucida
// @include      http://www.forocoches.com/foro/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    $(document).keydown(function(){
        if($("a[rel='next']" ).text()==">>"||$( "a[rel='prev']" ).text()=="<<"){
            //39 -> NEXT
        if(event.which==39){
            if($( "a[rel='next']" ).text()==">>"){
                location.href = $( "a[rel='next']" ).prop( "href" );
            }else{
                if($("a[rel=start]").text()=="« Primer« Primer")
                    location.href = $( "a[rel='start']" ).prop( "href" );
                else
                    location.href = $( "a[title^='Mostrar Resultados del 1']" ).prop( "href" );
            }
        }
            //37 <- BACK
        if(event.which==37){
            if($( "a[rel='prev']" ).text()=="<<"){
                location.href = $( "a[rel='prev']" ).prop( "href" );
            }else{
                if($("a[title^=Última]").text()=="Último »Último »")
                    location.href = $("a[title^=Última]").prop( "href" );
                else
                    location.href = $( "a[title^='Mostrar']:last" ).prop( "href" );
            }
        }
    }

    if(event.shiftKey){    
    switch (event.which) {
        case 71:
            //71 g  GENERAL
            location.href ="http://www.forocoches.com/foro/forumdisplay.php?f=2"
            break;
        case 73:
            //73 i INFORMATICA
            location.href = "http://www.forocoches.com/foro/forumdisplay.php?f=17"
            break;
        case 70:
            //70 f FOTOGRAFIA
           location.href = "http://www.forocoches.com/foro/forumdisplay.php?f=82"
           break;
        case 69:
            //69 e EMPLEO
            location.href = "http://www.forocoches.com/foro/forumdisplay.php?f=23"
            break;
        case 84:
            //84 t TAXIS
            location.href = "http://www.forocoches.com/foro/forumdisplay.php?f=64"
            break;
        case 86:
            //86 v VIAJES
            location.href ="http://www.forocoches.com/foro/forumdisplay.php?f=27" 
            break;
        case 81:
            //81 q QUEDADAS
            location.href = "http://www.forocoches.com/foro/forumdisplay.php?f=15"
            break;
    }
    }
    });
});