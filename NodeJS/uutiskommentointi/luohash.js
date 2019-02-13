// apuohjelma SHA256-tiivisteiden luontiin, aja erikseen komennolla 'node luohash'

const crypto = require("crypto");

let salasana = "kissakala";

let tiiviste = crypto.createHash("SHA512").update(salasana).digest("hex");

console.log(tiiviste);