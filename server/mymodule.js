// Szükséges modulok beolvasása
var itfactory = require("itfactory"),
    fs = require("fs");

// Termékek lekérése a file-rendszerből
    var products = itfactory.readAsJSON( 'json/products.json', 'utf8');

itfactory.showConsoleMessage(products);