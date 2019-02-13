const mysql = require("mysql");
const yhteys = mysql.createConnection({
                                        host     : "localhost",
                                        user     : "root",
                                        password : "",
                                        database : "elokuvatietokanta"
                                    });

yhteys.connect((err) => {
    if(!err) {
        console.log("Tietokantayhteys avattu");    
    } else {
        throw `Virhe yhdistettäessä tietokantaan: ${err}`;    
    }
});

module.exports = {
    
    //Metodi hae
    "hae" : (lomaketiedot, callback) => {

        //Tämän arrayn sisälle kerätään sql kyselyitä. Tämän arrayn sisällä on ainoastaan haun kohde radiobuttoneiden perusteella.
        let ehdot = [];

        //mysql.escape() on sama kuin kyselyssä ?. On siis parempi tapa. %-merkkien sisällä olevalla haetaan samankaltaisia hakutuloksia
        //Jos etummaisen %-merkin ottaa pois niin haku toimii siten, että haetaan nimen ensimmäisten kirjainten perusteella.
        let hakusana = mysql.escape(`%${lomaketiedot.hakusana}%`);

        //Radiobuttonit. Katsotaan mikä radiobuttoni valittuna ja tehdään haku sen perusteella.
        let hakuvalintaehto = `(hakuvalinta = ${lomaketiedot.hakuvalinta})`;

        //Nimen perusteella. LIKE kyselyssä tarkoittaa samankaltaisia tuloksia.
        if (lomaketiedot.hakuvalinta == "nimi") {

            ehdot.push(`(nimi LIKE ${hakusana})`);
        }
        //Ohjaajan perusteella
        if (lomaketiedot.hakuvalinta == "ohjaajat") {

            ehdot.push(`(ohjaajat LIKE ${hakusana})`);
        }
        //Näyttelijöiden perusteella
        if (lomaketiedot.hakuvalinta == "nayttelijat") {

            ehdot.push(`(nayttelijat LIKE ${hakusana})`);
        } 
        
        //Haetaan tietokanta ja rajoitetaan tulokset 10 ensimmäiseen tulokseen.
    let sql = `SELECT * FROM elokuvat WHERE ${ehdot.join(" OR ")} LIMIT 10;`;

        //Kyselyiden tulostus consoliin
        console.log(sql);
        

    yhteys.query(sql, (err, data) => {

        callback(err, data);

    });
}
 
};