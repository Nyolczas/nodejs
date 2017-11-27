// Http modul beolvasása
var http = require( "http" ),
    port = 3333;


// Szerver indítása
http.createServer( function( request, response) {
    
    response.setHeader('Access-Control-Allow-Origin', '*');
   
    response.end( "Hello NodeJS!" );
    
} ).listen( port );

console.log("Server listen in "+port+" port." );