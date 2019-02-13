//Expressi mukaan
const express = require("express");
//Luodaan uusi sovellus expressistä
const app = express();
//Määritellään portti:3002 missä palvelu toimii
const portti = 3002;

//Bodyparseri käyttöön
const bodyParser = require("body-parser");
const fs = require("fs");

//Parsi, muunna kaikki bodyn lähetetyt tiedot JSON- muotoon
app.use(bodyParser.json());

//Pitää olla. Ei tarvitse viel ymmärtää... Määrittelee käytetyn formin lähetystavan
app.use(bodyParser.urlencoded( { extended : true} ));

//Staattinen polku. Tarkoittaa, että jokaisen pyynnön yhteydessä etsitään sivun tiedot public kaniosta.
app.use(express.static("./public"));

//Tallennus functio
app.post("/tallenna", (req, res) => {


let vanhatViestit = fs.readFileSync("./viestit.txt");

//Lisätään viesteihin lähetys pvm ja klo aika
let nyt = Date();
let pvm = nyt.toLocaleString();

//Pvm ja klo ennen viestiä
let viestit = `${vanhatViestit}
                
                <i>${pvm}</i>

                <p>
                ${req.body.viesti}
                </p>
                `;

    //Viestit tallentuvat viestit.txt tiedostoon
    fs.writeFileSync("./viestit.txt", viestit);

//Uudelleen ohjaus viestin lähettämisen jälkeen
res.redirect("/kiitos.html");


//Ilmoitus käyttäjälle viestin tallentumisesta
//res.send("viesti tallennettu, kiitos!");

});

//Luodaan lue.html sivun koodi missä lukee kirjoitetut viestit 
app.get("/lue.html", (req, res) => {

    let viestit = fs.readFileSync("./viestit.txt");

let sivu = `<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <!--Bootstrappi mukaan-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <title>Demo 2: Node.js ja ExpressJS</title>
</head>
<body>
    <div class="container">

    <h1>Demo 2: Node.js ja ExpressJS</h1>



<h2>Vieraskirjan viestit</h2>
            
            <p>${viestit}</p>

            <a class="btn btn-primary" href="/">Palaa etusivulle</a>
  
            </div>
            </body>
            </html>

            `;

res.send(sivu);


});





//Reitti. Route get-pyyntöjen käsittelyyn osoitteessa "/". Selain siis ymmärtää localhost:3002/ osoitteen
//app.get("/", (req, res) => {

//res.send("Hello World!");

//});
//Reitti. Route get-pyyntöjen käsittelyyn osoitteessa "/kukkuu". Selain siis ymmärtää localhost:3002/kukkuu osoitteen
//app.get("/kukkuu", (req, res) => {

    //res.send("Kukkuluuruu");
    
    //});





//Tämä käynnistää palvelimen
app.listen(portti, () => {

console.log(`Palvelin käynnistyi porttiin ${portti}`);

});