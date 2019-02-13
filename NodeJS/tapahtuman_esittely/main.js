//Expressi mukaan
const express = require("express");
//Luodaan uusi sovellus expressistä
const app = express();
//Määritellään portti:3102 missä palvelu toimii
const portti = 3102;

//Bodyparseri käyttöön
const bodyParser = require("body-parser");
const fs = require("fs");

//Parsi, muunna kaikki bodyn lähetetyt tiedot JSON- muotoon
app.use(bodyParser.json());

//Pitää olla. Ei tarvitse viel ymmärtää... Määrittelee käytetyn formin lähetystavan
app.use(bodyParser.urlencoded( { extended : true} ));

//Staattinen polku. Tarkoittaa, että jokaisen pyynnön yhteydessä etsitään sivun tiedot public kaniosta.
app.use(express.static("./public"));

//Alustetaan osallistujien määrä
var osallistujat = 0;

//Tallennus functio
app.post("/tallenna", (req, res) => {

  //Formin pakolliset tiedot.. Kokeile jos löytyy yksinkertaisempi tapa!!!
  //Pakolliset tiedot
  let nimi    = (req.body.viesti);
  let titteli = (req.body.titteli);
  let koulu   = (req.body.koulu);
  let katuo   = (req.body.katuo);
  let postin  = (req.body.postin);
  let postit  = (req.body.postit);
  let puh     = (req.body.puh);
  let sposti  = (req.body.sposti);

  //Muut tiedot
  let ruoka = (req.body.ruoka);
  let muuta   = (req.body.muuta);

  //Tarkastetaan onko pakolliset kentät tyhjiä... Löytyykö helpompi keino?!!!
  if(nimi === "" | titteli === "" | koulu === "" | katuo === "" | postin === "" | postit === "" | puh === "" | sposti === "") {
    res.redirect("/virhe.html");

  }
  //Jos pakolliset kentät on täytetty niin tallennetaan tiedot, lisätään ne ilmoittautuneiden listaan ja näytetään käyttäjälle kiitos.html
  else {
    osallistujat++;
  
let vanhatViestit = fs.readFileSync("./viestit.json");

//Lisätään viesteihin lähetys pvm ja klo aika
let nyt = Date();
let pvm = nyt.toLocaleString();

//Pvm ja klo ennen viestiä
let viestit = `${vanhatViestit}

<table class="table table-condensed">
<thead>
</thead>
<tbody>
  <tr>
    <th>Etu- ja sukunimi:</th>
    <td>${req.body.viesti}</td>
  </tr>
  <tr>
    <th>Titteli:</th>
    <td>${req.body.titteli}</td>
  </tr>
  <tr>
    <th>Ammattikorkeakoulu tai muu organisaatio:</th>
    <td>${req.body.koulu}</td>
  </tr>
  <tr>
    <th>Katuosoite:</th>
    <td>${req.body.katuo}</td>
  </tr>
  <tr>
    <th>Postinumero:</th>
    <td>${req.body.postin}</td>
  </tr>
  <tr>
    <th>Postitoimipaikka:</th>
    <td>${req.body.postit}</td>
  </tr>
  <tr>
    <th>Puhelinnumero:</th>
    <td>${req.body.puh}</td>
  </tr>
  <tr>
    <th>Sähköpostiosoite:</th>
    <td>${req.body.sposti}</td>
  </tr>
  <tr>
    <th>Erikoisruokavalio:</th>
    <td>${req.body.ruoka}</td>
  </tr>
  <tr>
    <th>Muuta huomioitavaa:</th>
    <td>${req.body.muuta}</td>
  </tr>
</tbody>
</table><br>

                `;

    //Viestit tallentuvat viestit.txt tiedostoon
    fs.writeFileSync("./viestit.json", viestit);

//Uudelleen ohjaus viestin lähettämisen jälkeen
res.redirect("/kiitos.html");

  };
});

//Luodaan lue.html sivun koodi missä lukee kirjoitetut viestit 
app.get("/ilmoittautuneet.html", (req, res) => {

    let viestit = fs.readFileSync("./viestit.json");

let sivu = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <title>Ilmoittautuneet</title>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body>
            <a href="/"><img src="xamk_logo.png" style="width:190px; height:50px;"></a>
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                  </button>
                  <a class="navbar-brand" href="/">Etusivu</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                  <ul class="nav navbar-nav">
                    <li><a href="tapahtuma.html">Tapahtuma-aika ja -paikka</a></li>
                    <li><a href="ohjelma.html">Päivien ohjelma</a></li>
                    <li><a href="ilmottautuminen.html">Ilmoittautuminen ja lisätietoja</a></li>
                    <li><a href="majoitus.html">Majoitus</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="container">
              <h3>Ilmoittautuneet</h3>
              <h5>Ilmoittautuneita yhteensä: <strong>${osallistujat}</strong></h5>
              <p>${viestit}</p>
            </div>
            </body>
            </html>
            `
             ;

res.send(sivu);

});

//Tämä käynnistää palvelimen
app.listen(portti, () => {

console.log(`Palvelin käynnistyi porttiin ${portti}`);

});