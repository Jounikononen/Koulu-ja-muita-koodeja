const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const session = require("express-session");

const portti = 3202;

const paitakauppa = require("./models/paitakauppa");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(session( { "secret" : "SuuriSalaisuus2018!", "resave" : false, "saveUninitialized" : false } ));



//Kun palvelin käynnistetään uudestaan niin ostoskori pysyy tallella
  //Jos ostokoriin ei ole määritelty niin silloin me luodaan uusi
  app.use((req, res, next) => {

    if (!req.session.ostoskori) {
        //Alustetaan ostoskori tyhjäksi arrayksi
        req.session.ostoskori = [];
        
  } 
  

  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { "extended" : true } ));

app.use(express.static("./public"));

//Ostoskorin route
app.post("/ostoskori/", (req, res) => {

  

    paitakauppa.haeTuote(Number(req.body.id), (tuotetiedot) => {

        //Nämä tehdään kun saadaan luettua tietoja haeTuote-callbackista

    let koko = (req.body.koko) ? req.body.koko : "";


//Tietorakenne 
let uusiOstos = {
    "tuoteid" : Number(req.body.id),
    "nimi" : `${tuotetiedot.merkki} ${tuotetiedot.tyyppi} ${tuotetiedot.vari}`,
    "myyntihinta" : tuotetiedot.hinta,
    "koko" : koko,
    "maara" : Number(req.body.maara),
    "rivisumma" : (Number(req.body.maara) * tuotetiedot.hinta)

};

//Lisätään tämä sessiossa olevaan ostoskoriin
req.session.ostoskori.push(uusiOstos);


//Testailua. Kun tuote lisätään ostoskoriiin näkyy selaimessa tuotteen id
//res.send(req.session.ostoskori);

res.redirect("/tuote/" + req.body.id);

    });

});

app.get("/ostoskori/", (req, res) => {
    res.render("ostoskori", { "ostoskori" : req.session.ostoskori });

});



app.get("/tuote/:id", (req, res) => {

    paitakauppa.haeTuote(req.params.id, (data) => {

        res.render("tuote", {"tuote" : data, "ostoskori" : req.session.ostoskori });

    });

});

//Luodaan route eri merkeillä. Toimii hakuna
app.get("/merkki/:merkki", (req, res) => {

    paitakauppa.haeTuotteet((data) => {

        res.render("index", {"tuotteet" : data, "ostoskori" : req.session.ostoskori });

       //Näytetään tuotteet merkkien mukaan
    }, req.params.merkki);

});




app.get("/", (req, res) => {

    paitakauppa.haeTuotteet((data) => {

        res.render("index", {"tuotteet" : data, "ostoskori" : req.session.ostoskori });

       
    });

});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});