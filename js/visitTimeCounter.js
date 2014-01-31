// mache eine Variable namens 'startzeit'.
// Wert der Variable ist anfangs 0.
var startzeit = 0;

// mache eine funktion, die gerundet dividiert
function dividiereGerundet(zahl, wieViel) {
  var ergebnis = zahl / wieViel;
  ergebnis = Math.round(ergebnis);
  return ergebnis;
  // oder:
  // return Math.round(zahl / wieViel);
}

// mache eine funktion, die die startzeit setzt.
function setzeStartzeit() {
  // wir fragen (den browser) nach der zeit,
  // indem wir die "now" funktion des eingebauten
  // "Date" objektes aufrufen:
  // ergebnis ist ein zeitstempel in milisekunden
  // ("dividiereGerundet" durch tausend)
  // speichere das ergebnis in der 'startzeit' variable
  startzeit = dividiereGerundet(Date.now(), 1000);
}

function errechneBesuchsdauer() {
  // wie oben, aber in einer zeile
  // da wir in einer neuen funktion sind, 
  // hat diese "jetzt" variabel NICHTS mit der oben zu tun…
  var jetzt = dividiereGerundet(Date.now(), 1000);
  var ergebnis =  jetzt - startzeit;
  return ergebnis;
}

function zeigeBesuchsdauer() {
  if ($) {
    $('#counter').text(errechneBesuchsdauer());
  } else {
    console.log("Fehler! Kein jQuery :(");
  }
}

// -------------------------------------------
// hier beginnt das programm, d.h. es werden funktionen ausgeführt

// jQuery: führe diesen block erst aus wenn die seite fertig geladen ist:
$(document).ready(function () {
  
  // zuerst eine einebaute funktion des browsers: eine meldungs(/alert)-box
  // alert("hello world");

  // rufe unsere eigene funktion auf und setze die startzeit
  setzeStartzeit();

  // mache einen loop, der jede sekunde die funktion "zeige besuchsdauer" aufruft
  // (wir rufen die eingebaute funktion setInterval auf, mit den argumenten funktion und zeit)
  setInterval(zeigeBesuchsdauer, 1000);

});
