// Szükséges modulok beolvasása
var itfactory = require("itfactory"),
    http = require("http"),
    fs = require("fs"),
    port = 3333;

// Termékek lekérése a file-rendszerből
var products = itfactory.find('json/products.json', 'name', 'otva', 'utf8');

itfactory.showConsoleMessage(products);

// Get kérések kiszolgálása
function handleGetRequest(request, response) {

    var url = "." + request.url;

    // Hibatűrő filekeresés
    try {
        var file = fs.readFileSync(url, "utf8");

        response.end(file);
        
    } catch (e) {
        //
    }
    console.log(url);

}

// Szerver indítása
var app = http.createServer(function (request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*'); // fejléc beállítása, hogy más domainről is el lehessen érni

    //Kérések kezelése
    switch (request.method.toLowerCase()) {
        case "get":
            handleGetRequest(request, response);
            break;
    }

    console.log("Kérés metódus: ", request.method);
    console.log(request.url);

    response.end("Hello...");

}).listen(port);
