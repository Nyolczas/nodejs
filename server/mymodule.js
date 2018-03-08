// Szükséges modulok beolvasása
var itfactory = require("itfactory");

// Termékek lekérése a file-rendszerből
var products = itfactory.find('json/products.json', 'name', 'Borotva', 'utf8');

itfactory.showConsoleMessage(products);
