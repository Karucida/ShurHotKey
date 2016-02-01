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

$(document).ready(function () {
    var urls = [];
    urls['general'] = "http://www.forocoches.com/foro/forumdisplay.php?f=2";
    urls['informatica'] = "http://www.forocoches.com/foro/forumdisplay.php?f=17";
    urls['fotografia'] = "http://www.forocoches.com/foro/forumdisplay.php?f=82";
    urls['empleo'] = "http://www.forocoches.com/foro/forumdisplay.php?f=23";
    urls['taxis'] = "http://www.forocoches.com/foro/forumdisplay.php?f=64";
    urls['viajes'] = "http://www.forocoches.com/foro/forumdisplay.php?f=27";
    urls['kdd'] = "http://www.forocoches.com/foro/forumdisplay.php?f=15";
    $(document).keydown(function () {
        if (!$("textarea:focus")) {
            if ($("a[rel='next']").text() == ">>" || $("a[rel='prev']").text() == "<<") {
                //39 -> NEXT
                if (event.which == 39) {
                    if ($("a[rel='next']").text() == ">>") {
                        location.href = $("a[rel='next']").prop("href");
                    } else {
                        if ($("a[rel=start]").text() == "« Primer« Primer")
                            location.href = $("a[rel='start']").prop("href");
                        else
                            location.href = $("a[title^='Mostrar Resultados del 1']").prop("href");
                    }
                }
                //37 <- BACK
                if (event.which == 37) {
                    if ($("a[rel='prev']").text() == "<<") {
                        location.href = $("a[rel='prev']").prop("href");
                    } else {
                        if ($("a[title^=Última]").text() == "Último »Último »")
                            location.href = $("a[title^=Última]").prop("href");
                        else
                            location.href = $("a[title^='Mostrar']:last").prop("href");
                    }
                }
            }
        }
        if (event.altKey) {
            switch (event.which) {
            case 71:
                //71 g  GENERAL "http://www.forocoches.com/foro/forumdisplay.php?f=2"
                location.href = urls['general'];
                break;
            case 73:
                //73 i INFORMATICA "http://www.forocoches.com/foro/forumdisplay.php?f=17"
                location.href = urls['informatica'];
                break;
            case 70:
                //70 f FOTOGRAFIA "http://www.forocoches.com/foro/forumdisplay.php?f=82"
                location.href = urls['fotografia'];
                break;
            case 66:
                //66 b EMPLEO "http://www.forocoches.com/foro/forumdisplay.php?f=23"
                location.href = urls['empleo'];
                break;
            case 84:
                //84 t TAXIS "http://www.forocoches.com/foro/forumdisplay.php?f=64"
                location.href = urls['taxis'];
                break;
            case 86:
                //86 v VIAJES "http://www.forocoches.com/foro/forumdisplay.php?f=27"
                location.href = urls['viajes'];
                break;
            case 81:
                //81 q QUEDADAS  "http://www.forocoches.com/foro/forumdisplay.php?f=15"
                location.href = urls['kdd'];
                break;
            }
        }

    });
});