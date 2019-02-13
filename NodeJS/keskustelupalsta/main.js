const express = require("express");
const app = express();
//Haetaan palvelut.js tähän javascript- tiedostoon
const viestit = require("./models/viestit");
const bodyParser = require("body-parser");

const portti = 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));

app.set("views", "./views");
app.set("view engine", "ejs");



app.post("/tallenna/", (req, res) => {

    viestit.lueViestia(req.body, (err) => {
    
    if (err) throw err;

    res.redirect("/");
    });
    });


    //Kommentointi
    app.post("/kommentoi/", (req, res) => {

        viestit.lueKommenttia(req.body, (err) => {
        
        if (err) throw err;
    
        res.redirect("/");
        });
        });


        //Keskustelusivut/id
app.get("/keskustelu/:id", (req, res) => {

    let id = req.params.id;

    viestit.haeViesti(id, (err, data) => {

    if (err) throw err;

        res.render("viesti", { "viesti" : data[0] });

    });

});



app.get("/aloitaKeskustelu", (req, res) => {


    viestit.haeKaikkiViestit((err, data) => {
    
    
            if (err) throw err;
    
    
    
        res.render("aloitaKeskustelu", { "viestit" : data });
    
    });
    
        
    
    });





app.get("/", (req, res) => {


viestit.haeKaikkiViestit((err, data) => {


        if (err) throw err;



    res.render("index", { "viestit" : data });

});

    

});



app.listen(portti, () => {

console.log(`palvelin käynnistyi porttiin ${portti}`)

});