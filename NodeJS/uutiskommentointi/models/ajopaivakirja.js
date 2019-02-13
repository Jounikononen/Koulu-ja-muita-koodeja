const fs = require("fs");
const tiedostoMatkat = "./models/uutiset.json";
const tiedostoKommentit = "./models/kommentit.json";
const tiedostoKayttajat = "./models/kayttajat.json";

module.exports = {

    "haeKaikki" : (callback) => {

        fs.readFile(tiedostoMatkat, "utf-8", (err, data) => {

            if (err) throw err;

            return callback(JSON.parse(data));

        });
    },

    "haeKommentit" : (callback) => {

        fs.readFile(tiedostoKommentit, "utf-8", (err, data) => {

            if (err) throw err;

            return callback(JSON.parse(data));

        });
    },

    "lisaaUusi" : (uusi, callback) => {

        fs.readFile(tiedostoKommentit, "utf-8", (err, data) => {

            if (err) throw err;

            let kommentit = JSON.parse(data);

            kommentit.push(uusi);

            fs.writeFile(tiedostoKommentit, JSON.stringify(kommentit, null, 2), (err) => {

                if (err) throw err;

                callback();

            });

        });


    },

    "haeKayttaja" : (tunnus, callback) => {

        fs.readFile(tiedostoKayttajat, "utf-8", (err, data) => {

            if (err) throw err;

            let kayttajat = JSON.parse(data);

            let indeksi = kayttajat.findIndex((kayttaja) => {

                return kayttaja.tunnus == tunnus;

            });

            if (indeksi >= 0) {

                callback(kayttajat[indeksi]);

            } else {

                callback(null);
            }

        });

    }

    //Testailua vain
    //"haeTunnus" : (tunnus, callback) => {
      //  fs.readFile(tiedostoKayttajat, (err, data) => {
        //    if (err) throw err;
          //  let kayttaja = JSON.parse(data);
            //let tunnus = kayttaja[0].tunnus;
            //console.log(tunnus);
        //});
    //}

};