const fs = require("fs");
const tiedostonimi = "./models/tuotteet.json";

module.exports = {
    
    "haeTuotteet" : (callback, filtteri) => {

        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;
    
            let tuotteet = [];

            if (filtteri) {

                //Parsitaan data ja filtteröidään se
                tuotteet = JSON.parse(data).filter((haettavaTuote) => {

                    //Jos merkki on sama kuin kuin filtteri niin tuote palautetaan tuotteisiin... haku...
                    return (haettavaTuote.merkki === filtteri);

                });

            }   else {

                tuotteet = JSON.parse(data);

            }

            callback(tuotteet);
     
        });

    },

    "haeTuote" : (id, callback) => {

        fs.readFile(tiedostonimi, "utf-8", (err, data) => {

            if (err) throw err;

            let tuote = JSON.parse(data).find((etsittavaTuote) => {

                return (etsittavaTuote.id == id);

            });

            callback(tuote);
     
        });

    }    


};