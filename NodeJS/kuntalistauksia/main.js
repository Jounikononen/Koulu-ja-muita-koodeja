const express = require("express");

const app = express();

const fs = require("fs");

app.set("views", "./views");
app.set("view engine", "ejs");

const portti = 3104;

let kayttajat = [];

fs.readFile("./model/kayttajat.json", "utf-8", (err, data) => {

    if (err) throw err;

    kayttajat = JSON.parse(data);

});

app.use(express.static("./public"));

app.get("/tiedot", (req, res) => {

  
    let kaupungit = req.params.val5;




    let indeksi = req.params.id - 1;

    let otsikko = "Kaikki kaupungit";

    let kayttaja = kayttajat[indeksi];

    res.render("tiedot", { "kayttajat" : kayttajat, "kaupungit" : kaupungit, "kayttaja" : kayttaja, "otsikko" : otsikko });

});

//Maakunnat
app.get("/maakunnat", (req, res) => {

  
    let maakunnat = req.params.val3;




    let indeksi = req.params.id - 1;

    let otsikko = "Maakunnat";

    let kayttaja = kayttajat[indeksi];

    res.render("tiedot", { "kayttajat" : kayttajat, "maakunnat" : maakunnat, "kayttaja" : kayttaja, "otsikko" : otsikko });

});


app.get("/", (req, res) => {

  


    let otsikko = "Kaikki maakunnat";

    res.render("index", { "kayttajat" : kayttajat, "otsikko" : otsikko });

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttin: ${portti}`);

});