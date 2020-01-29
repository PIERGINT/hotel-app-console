var request = require('request');
var xhr = new XMLHttpRequest();
var nom = encodeURIComponent(nom),
    prenom = encodeURIComponent(prenom);

function afficherListeClient(callbackErr, callbackFonc) {
    request('https://pierre-hotel-ap.herokuapp.com/client', { json: true }, function (err,
        res, donnees) {
        if (err) { callbackErr(err); }
        callbackFonc(donnees);
    })
}
;

exports.afficherListeClient = afficherListeClient;

function ajouterNouveauClient(nom, prenom) {
    xhr.open('POST', 'https://pierre-hotel-ap.herokuapp.com/client', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("nom=" + nom + "&prenom=" + prenom);

} 
exports.ajouterNouveauClient = ajouterNouveauClient;
