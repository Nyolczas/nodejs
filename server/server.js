/*
Valós környezetben port = 80; <- minden kérés erre jön
*/

// Http modul beolvasása
var http = require( "http" ),
    fs = require( "fs" ), //beépített modul fileSystem olvasáshoz
    port = 3333;


// Szerver indítása
http.createServer( function( request, response) {
    
    response.setHeader('Access-Control-Allow-Origin', '*');
   
    // Termékek lekérése a filerendszerből
    var products = fs.readFileSync( 'json/products.json', 'utf8');
    
    response.end( products );
    
} ).listen( port );

console.log("Server listen in "+port+" port." );

/*
Szerver indítása parancssorból (ugyanabból a mappából): node server 
Szerver leállítása parancssorból: Ctrl+C
*/