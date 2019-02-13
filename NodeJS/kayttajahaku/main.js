const express = require("express");
const app = express()
const bodyParser = require("body-parser");

const kayttajat = require("./models/kayttajat")

const portti = 3008; 

app.set("views", "./views");
app.set("view engine", "ejs");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.post("/haku/", (req, res) => {

    console.log(req.body.luottokorttityyppi);


    kayttajat.hae(req.body, (err, data) => {

            
            let tulosrivit = data;
            let virhe = null;
            let lomaketiedot = req.body;


            //Virhe jos hakutuloksia ei löydy 
            if (data.length == 0) {
                virhe = "Haulla ei löytynyt tuloksia. Muuta hakuehtoja";
                tulosrivit = null;
            }

            //Virheen käsittelyä. Virhe väärästä tietokannasta
            if (err) {
                virhe = "Virhe tietokantayhteydessä. Yritä myöhemmin uudelleen.";
                tulosrivit = null;
            }
            
            //Virhe tyhjällä hakutuloksella
            if (req.body.hakusana.length == 0) {
                virhe = "Hakusana puuttuu. Anna hakusana";
                tulosrivit = null;
            }

           



        
        res.render("index", { 
                                "kayttajat" : tulosrivit, 
                                "virhe" : virhe, 
                                "lomaketiedot" : lomaketiedot
                            });

    

    
});
});

app.get("/", (req, res) => {
    
    let lomakeoletukset = {
                            "hakusana" : null,
                            "sukupuoli" : "Molemmat"
                        };



    res.render("index", { 
                        "kayttajat" : null, 
                        "virhe" : null, 
                        "lomaketiedot" : lomakeoletukset});
    
});











app.listen(portti, () => {
    
    console.log(`Palvelin käynnistyi porttiin ${portti}`);
    
});