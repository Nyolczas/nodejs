// Szerverválaszok logolása
function sendToLog( log) {
    var timeStamp = new Date().getTime();
    document.querySelector( "#node-konzol").innerHTML += "\n"+timeStamp+": "+log;
}

// Termékek megjelenítése
function showProducts( products ) {
    var productsDiv = document.querySelector( ".products-div" );
}

// Ajax kérés indítása a Node szerver felé
var xhr = new XMLHttpRequest();
xhr.open( "get", "http://localhost:3333" );
xhr.onload = function() {
    //sendToLog( this.response);
};
xhr.send();
