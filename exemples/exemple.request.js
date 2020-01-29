var request = require('request');

request('https://jsonplaceholder.typicode.com/posts', { json: true }, function(err,
res, body) {
if (err) { return console.log('Erreur', err); }
// body contient les données récupérées
console.log('Ok', body);
});