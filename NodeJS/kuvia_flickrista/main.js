//Expressi käyttöön
const express = require("express");
//Määritetään expressi
const app = express();

//Määritetään portti mihin palvelin käynnistyy
const portti = 3009;

//Flickr niminen moduuli
const flickr = require("./models/flickr");

//Määritetään ejs käyttöön. ejs toimii indexissä.
app.set("views", "./views");
app.set("view engine" , "ejs");



//Määritellään etusivun functiot
app.get("/", (req, res) => {

//Etusivulla ajetaan functio nimeltään
flickr.uusimmatKuvat((kuvat) => {

    //Kerrotaan selaimelle, että tulee json- dataa
    res.render("index", { "kuvat" : kuvat});

});

});

//Kuunnellaan porttia
app.listen(portti, () => {
    //Consoliin ilmoitus palvelimen käynnistämisestä.
    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});