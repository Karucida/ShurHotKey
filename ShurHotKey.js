// ==UserScript==
// @name         ShurHotKey
// @version      0.1
// @description  Recorre el foro con el teclado ->
// @author       Karucida
// @include      http://www.forocoches.com/foro/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    $(document).keydown(function(){
        if($("a[rel='next']" ).text()==">>"||$( "a[rel='prev']" ).text()=="<<"){
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
    });
});