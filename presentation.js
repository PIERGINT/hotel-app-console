var readline = require('readline');
var service = require('./service.js')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var nom = nom
var prenom =prenom
function start(texte) {
    console.log(
        '1. Lister les clients')
    console.log(
        '99. Sortir')


    rl.question('Choisir une action : ', function (saisie) {
        if (saisie != 1 && saisie != 99) {
            console.log('Veuillez saisir une option valide !')
            start();
        }
        if (saisie == 1) {
            console.log('Vous avez saisi :', saisie)
            console.log(' ===> Liste des clients')
            service.afficherListeClient(
                function (erreur) {
                    console.log('La liste ne peut être affichée')
                    start();
                }, function (donnees) {
                    console.log(donnees)
                })

            start();
        }
        if (saisie == 2) {
            rl.question2('Veuillez entrer un nom : ', function (nom) {
                console.log('Vous avez saisi :', nom)
                rl.question3('Veuillez entrer un prenom : ', function (prenom){
                    console.log('Vous avez saisi :', prenom)
                    service.ajouterNouveauClient(
                        
                    )
            })})
        }

        if (saisie == 99) {
            console.log('Vous avez saisi :', saisie)
            console.log('Au revoir')
            rl.close();
        }


    })

}

exports.start = start;




