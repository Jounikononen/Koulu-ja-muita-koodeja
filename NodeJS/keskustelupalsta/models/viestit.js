//Otetaan mysql käyttöön. cmd-->npm i mysql
const mysql = require("mysql");

//Luodaan yhteys tietokantaan
const yhteys = mysql.createConnection({
                                        "host" : "localhost",
                                        "user" : "root",
                                        "password" : "",
                                        "database" : "keskustelupalsta" 
                                        });

                                        
//Kun yhteys on luotu
yhteys.connect((err) => {

    //Jos ei ole erroreita/virheitä niin tulostetaan consoliin viesti
    if (!err) {

console.log("Yhteys tietokantapalvelimeen avattu");

        //Jos tulee virhe niin näytetään virheilmoitus
    } else {

        throw err;

    }



});


module.exports = {

    //Tarvitsee callbackin, koska tietojen hakemisessa tulee viivettä. Callbackia käytetään siis kun tulee viivettä ja odotetaan viiveen valmistumista. Käytetään callbackia odottamisen ja viiveen takia.
haeKaikkiViestit : (callback) => {

    //Haetaan tietokanta ja järjestetään tiedot id:n perusteella laskevaan järjestykseen
let sql = "SELECT * FROM keskustelut ORDER BY id DESC;";



//Luodaan kysely ja tulostetaan dataa selaimeen
yhteys.query(sql, (err, data) => {



    //Haetaan tietokannan arraysta yksittäinen tieto
    //callback(data[0].nimi);

    callback(err, data);

});



},

haeViesti : (id, callback) => {

let sql = "SELECT * FROM keskustelut WHERE id = ?";

yhteys.query(sql, [id], (err, data) => {

callback(err, data);

});
},

lueViestia : (tiedot, callback) => {

    tiedot.aikaleima = new Date().getTime();

    if(!tiedot.kirjoittaja) {

        tiedot.kirjoittaja = "Anonyymi";

    };

    let sql = "INSERT keskustelut SET otsikko = ?, sisalto = ?, kirjoittaja = ?, aikaleima = ?";

    yhteys.query(sql, [tiedot.otsikko, tiedot.sisalto, tiedot.kirjoittaja, tiedot.aikaleima, tiedot.id], (err) => {

        callback(err);

    });
},


//Kommentoitia
haeKommentti : (id, callback) => {

let sql = "SELECT * FROM viestit WHERE id = ?";

yhteys.query(sql, [id], (err, data) => {

callback(err, data);

});

},

lueKommenttia : (kTiedot, callback) => {

    

    if(!kTiedot.viestikirjoittaja) {

        kTiedot.viestikirjoittaja = "Anonyymi";

    };


    let sql = "INSERT viestit SET sisalto = ?, kirjoittaja = ?";

    yhteys.query(sql, [kTiedot.viestisisalto, kTiedot.viestikirjoittaja, kTiedot.viestiid], (err) => {

        callback(err);

    });

}








};