// Szerverválaszok logolása
function sendToLog( log) {
    var timeStamp = new Date().getTime();
    document.querySelector( "#node-konzol").innerHTML += "\n"+timeStamp+": "+log;
}

// Ajax kérés indítása a Node szerver felé
var xhr = new XMLHttpRequest();
xhr.open( "get", "http://localhost:3333" );
xhr.onload = function() {
    sendToLog( this.response);
};
xhr.send();
