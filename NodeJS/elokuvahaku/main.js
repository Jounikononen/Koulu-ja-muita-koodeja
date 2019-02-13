const express = require("express");
const app = express()
const bodyParser = require("body-parser");

const elokuvat = require("./models/elokuvat")

const portti = 3008; 

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));

//Kun haku-nappia painetaan
app.post("/haku/", (req, res) => {

    elokuvat.hae(req.body, (err, data) => {

            //Määritetään tietoja
            let tulosrivit = data;
            let virhe = null;
            let lomaketiedot = req.body;
            let hakusana = lomaketiedot.hakusana;

            //Virheen käsittelyä
            //Virhe jos hakutuloksia ei löydy hakusanalla
            if (data.length == 0) {
                virhe = `Hakusanalla "${lomaketiedot.hakusana}" ei löytynyt yhtään elokuvaa.`;
                tulosrivit = null;
            }

            //Virhe väärästä tietokannasta
            if (err) {
                virhe = "Virhe tietokantayhteydessä. Yritä myöhemmin uudelleen.";
                tulosrivit = null;
            }
            //Virhe jos hakutuloksia yli 10kpl. 
            if (data.length >= 10) {
                virhe = `Haulla löytyi yli kymmenen elokuvaa, näytetään vain ensimmäiset 10 tulosta. Ole hyvä ja tarkenna hakua.`;
                tulosrivit;
            }

            //Virhe jos hakuteksti alle 2 merkkiä pitkä
            if (req.body.hakusana.length < 2) {
                virhe = "Hakusana puuttuu tai on liian lyhyt. Tarkenna hakuasi.";
                tulosrivit = null;
            }

        res.render("index", { 
                                "elokuvat" : tulosrivit, 
                                "virhe" : virhe, 
                                "lomaketiedot" : lomaketiedot,
                                "hakusana" : hakusana
                            });
});
});

app.get("/", (req, res) => {
    
    let lomakeoletukset = {
                            "hakusana" : null,
                            "hakuvalinta" : "nimi"
                        };

    res.render("index", { 
                        "elokuvat" : null, 
                        "virhe" : null, 
                        "lomaketiedot" : lomakeoletukset});
    
});

app.listen(portti, () => {
    
    console.log(`Palvelin käynnistyi porttiin ${portti}`);
    
});