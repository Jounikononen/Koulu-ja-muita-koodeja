const mysql = require("mysql");
const yhteys = mysql.createConnection({
                                        host     : "localhost",
                                        user     : "root",
                                        password : "",
                                        database : "kayttajatietokanta"
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



        //Temän arrayn sisälle kerätään sql kyselyitä. Tämän arrayn sisällä on siis nim- sukupuoli ja luottokorttihakuehdot
        let ehdot = [];

        //Tarkastetaan onko yhtäänluottokorttityyppiä valittu. Jos ei niin tämä tarkastus unohdetaan ja siirrytään seuraavaan.
        if (lomaketiedot.luottokorttityyppi) {

                let luottokorttiehdot;

                //Katsotaan onko array
                if (Array.isArray(lomaketiedot.luottokorttityyppi)) {

                    //Kun tämä on array niin käydään kaikki arrayn ehdot läpi, tehdään niihin muutos eli kaikkiin arrayn tietoihin "sql.escape()"
                    let tyypit = lomaketiedot.luottokorttityyppi.map((tyyppi) => {

                        return mysql.escape(tyyppi);

                    });

                    luottokorttiehdot = tyypit.join(" OR luottokorttityyppi = ");

                } else {

                    luottokorttiehdot = mysql.escape(lomaketiedot.luottokorttityyppi);
                    

                }

                ehdot.push(`(luottokorttityyppi = ${luottokorttiehdot})`);


        }

        //Sukupuoliehdot
        let sukupuoliehto = `(sukupuoli = ${lomaketiedot.sukupuoli})`;

        if (lomaketiedot.sukupuoli == "Mies") {

            ehdot.push(`(sukupuoli = \'Mies\')`);
        }

        if (lomaketiedot.sukupuoli == "Nainen") {

            ehdot.push(`(sukupuoli = \'Nainen\')`);
        }
        

        //mysql.escape() on sama kuin kyselyssä ?. On siis parempi tapa. %-merkkien sisällä olevalla haetaan samankaltaisia hakutuloksia
        //Jos etummaisen %-merkin ottaa pois niin haku toimii siten, että haetaan nimen ensimmäisten kirjainten perusteella.
        let hakusana = mysql.escape(`%${lomaketiedot.hakusana}%`);

         //Haku toimii sukunimellä. LIKE komennolla haetaan samankaltaisia tuloksia
        let hakusanaehdot = `(sukunimi LIKE ${hakusana} OR etunimi LIKE ${hakusana})`;
 

        ehdot.push(hakusanaehdot);


        //Haetaan tietokanta ja rajoitetaan tulokset 50 ensimmäiseen tulokseen. Esimerkiksi LIMIT 50, 50 näyttää ensimmäisten 50 tuloksen jälkeiset 50 tulosta. LIMIT 0, 50 on sama kuin LIMIT 0, 50.
    let sql = `SELECT * FROM kayttajat WHERE ${ehdot.join(" AND ")} LIMIT 50;`;

        console.log(sql);

    yhteys.query(sql, (err, data) => {

        callback(err, data);

    });

}

    
};