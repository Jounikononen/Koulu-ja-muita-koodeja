
//npm install request. Otetaan tässä käyttöön
const request = require("request")

//npm install xml2js. Otetaan tässä käyttöön
const xml2js = require("xml2js");

//Ainut tehtävä palauttaa uusi lupaus siitä, että jotain tullaan tekemään.
let haeKuvat = (url) => {

    //Tämä palauttaa promisen/lupauksen. Lupaus määritellään tässä functiossa.
    //resolve = Lupaus onnistunut. 
    //reject = Lupaus ei onnistunut
    //new Promise luo uuden ilmentymän. Voidaan välittää 2 parametriä, 2 cllback- functiota.
    return new Promise((resolve, reject) => {


        //Tässä callbackissa käytetään requestia. Response koko palautus mitä urlista tulee takaisin kaikkineen koodeineen.
        request(url, (err, response) => {

            //Määritellään data
            let data = response.body;

            let kaikkiKuvat = [];

            //xml2js parsii xml JSONiksi
            //Toinen callbacki. Jos ei toimi niin tulee error. Jos toimii niin palautetaan results
            xml2js.parseString(data, (err, results) => {

                //Haetaan kokonaisuus Flickr.comin julkaisuista
                results.feed.entry.forEach((entry) => {

                    //Määritellään haluttu kokonaisuus mitä halutaan käyttää
                    let kuvaOlio = {
                                    //entry.title[0] antaa ensimmäisen titlen
                                    "nimi" : entry.title[0],
                                    //entry.published[0]
                                    "julkaistu" : entry.published[0],
                                    //Haetaan urli. Hieman monimutkainen, mutta tällä saadaan entry.linkin viimeinen linkki
                                    "url" : entry.link[entry.link.length - 1].$.href

                                    };

                                    //Pusketaan kuvaOlio
                                    kaikkiKuvat.push(kuvaOlio);
                });


            //Tässä tuostetaan consoleen JSON dataa
            //console.log(results.feed.entry);

            });


            //Tässä data pihalle kaikkineen mitä API sivulta löytyy.
            //Tässä tulee usein enemmän viivettä kuin normaaleissa functioissa.
            resolve(kaikkiKuvat);

        });

    });

}

module.exports = {

"uusimmatKuvat" : (callback) => {

    //Flickr.comin api ja feedi
    let url = "https://api.flickr.com/services/feeds/photos_public.gne";

    //let url = "https://www.xamk.fi";

    //Täällä toteutetaan apufunctio "haeKuvat" ja sen sisältö. Kun kaikki toimii niin palautetaan flickr.apin data sivulle.
    //.then käsittelee toteutetun lupauksen.
    haeKuvat(url).then((kuvat) => {

        //Kun data on saatu niin mennään eteenpäin ja välitetään tiedot selaimeen.
        callback(kuvat);

    });
}



}