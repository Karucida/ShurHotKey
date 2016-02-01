// ==UserScript==
// @name         ShurHotKey
// @version      0.4
// @description  Recorre el foro con el teclado ->
// @author       Karucida
// @include      http://www.forocoches.com/foro/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant        none
// @downloadURL    https://github.com/Karucida/ShurHotKey/raw/master/ShurHotKey.user.js
// @updateURL    https://github.com/Karucida/ShurHotKey/raw/master/ShurHotKey.user.js
// ==/UserScript==

$(document).ready(function(){var e=[];e.general="http://www.forocoches.com/foro/forumdisplay.php?f=2",e.informatica="http://www.forocoches.com/foro/forumdisplay.php?f=17",e.fotografia="http://www.forocoches.com/foro/forumdisplay.php?f=82",e.empleo="http://www.forocoches.com/foro/forumdisplay.php?f=23",e.taxis="http://www.forocoches.com/foro/forumdisplay.php?f=64",e.viajes="http://www.forocoches.com/foro/forumdisplay.php?f=27",e.kdd="http://www.forocoches.com/foro/forumdisplay.php?f=15",$(document).keydown(function(){if($("textarea:focus")||(">>"==$("a[rel='next']").text()||"<<"==$("a[rel='prev']").text())&&(39==event.which&&(">>"==$("a[rel='next']").text()?location.href=$("a[rel='next']").prop("href"):"« Primer« Primer"==$("a[rel=start]").text()?location.href=$("a[rel='start']").prop("href"):location.href=$("a[title^='Mostrar Resultados del 1']").prop("href")),37==event.which&&("<<"==$("a[rel='prev']").text()?location.href=$("a[rel='prev']").prop("href"):"Último »Último »"==$("a[title^=Última]").text()?location.href=$("a[title^=Última]").prop("href"):location.href=$("a[title^='Mostrar']:last").prop("href"))),event.altKey)switch(event.which){case 71:location.href=e.general;break;case 73:location.href=e.informatica;break;case 70:location.href=e.fotografia;break;case 66:location.href=e.empleo;break;case 84:location.href=e.taxis;break;case 86:location.href=e.viajes;break;case 81:location.href=e.kdd}})});
