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
   
    // Termékek lekérése a file-rendszerből
    var products = fs.readFileSync( 'json/products.json', 'utf8');
    //docs: https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
    
    response.end( products );
    
} ).listen( port );

console.log("Server listen in "+port+" port." );

/*
Szerver indítása parancssorból (ugyanabból a mappából): node server 
Szerver leállítása parancssorból: Ctrl+C
*/