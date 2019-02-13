const fs = require("fs");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const session = require("express-session");
const crypto = require("crypto");

const ajopaivakirja = require("./models/ajopaivakirja");
const tiedostoKayttajat = "./models/kayttajat.json";
const tiedostoMatkat = "./models/uutiset.json";
const portti = 3006;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { "extended" : true } ));

app.use(express.static("./public"));



//Etusivu näkyville ilman kirjautumista
app.get("/", (req, res) => {

    let uutiset = ajopaivakirja.haeKaikki((uutiset) => {

        res.render("index", { "uutiset" : uutiset }); 

    }); 

});

//Mitä tämä tarkoittaa?
app.use(session({ 
    "secret" : "SuuriSalaisuus!", 
    "resave" : false, 
    "saveUninitialized" : false 
}));

app.use((req, res, next) => {

if (!req.session.saaTulla && req.path != "/login/") {

res.render("login", { "virhe" : null });

} else {

next();

}

});

//Kirjautuminen ja tunnnuksen/salasanan tarkastaminen
app.post("/login/", (req, res) => {



ajopaivakirja.haeKayttaja(req.body.tunnus, (kayttaja) => {

if (kayttaja) {

let hash = crypto.createHash("SHA512").update(req.body.salasana).digest("hex");

if (hash == kayttaja.salasana) {

req.session.saaTulla = true;

let sessioKayttaja = {
                        "id": kayttaja.id,
                        "tunnus" : kayttaja.tunnus
                    };

req.session.kayttaja = sessioKayttaja;

//Jos kaikki täsmää niin käyttäjä siirretään paasivulle missä voi kommentoida
app.get("/paasivu", (req, res) => {

    

    let uutiset = ajopaivakirja.haeKaikki((uutiset) => {
        let kommentit = ajopaivakirja.haeKommentit((kommentit) => {

        res.render("paasivu", { "uutiset" : uutiset, "kommentit" : kommentit }); 

    }); 

    });
   
});


res.redirect("/paasivu");

} else {

req.session.saaTulla = false;

res.render("login", { "virhe" : "Virheellinen käyttäjätunnus tai salasana" });

}

} else {

req.session.saaTulla = false;

res.render("login", { "virhe" : "Virheellinen käyttäjätunnus tai salasana" });

}

});

});

var luku = 0;

app.post("/kommentit/", (req, res) => {

    //Luodaan aikaleima
    let aikaleima = new Date().getTime();
    
    //Kommentin Id
    luku++;
    
    //Haetaan kayttajatunnus
    fs.readFile(tiedostoKayttajat, (err, data) => {
        if (err) throw err;

        let kayttaja = JSON.parse(data);
        
        let tunnus = kayttaja[0].tunnus;
       
        //Haetaan uutisId
        fs.readFile(tiedostoMatkat, (err, data) => {
            if (err) throw err;
    
            let uutinen = JSON.parse(data);
            
            let Id = uutinen[0].uutisId;
        
    //Testataan toimiiko tulostus
    console.log(tunnus);

    //Viedään tarvittavat tiedot kommentit.json -tiedostoon
    let uusiKommentti = {
                        "kommenttiId": Number(luku),
                        "uutisId": Id,
                        "kayttajaId": tunnus,
                        "kommentti": req.body.kommentti,
                        "aikaleima": aikaleima
                        
                    };

    ajopaivakirja.lisaaUusi(uusiKommentti, () => {


        
        res.redirect("/paasivu");

    });
});
});

});




app.get("/logout/", (req, res) => {

req.session.saaTulla = false;

res.redirect("/");

});





app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});