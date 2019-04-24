const weather = require('weather-js');

const city = process.argv[2];

if (!city) {
    console.log('Vous devez entrer la ville');
    return;
}

weather.find({search: city, degreeType: 'C'}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    }

    // Le module renvoie un tableau, on prend mle 1er element si il y en a plusieurs
    const firstResult = result[0];

    if (!firstResult) {
        console.log("Pas de données à afficher");
        return;
    }

    console.log("Il fait " + firstResult.current.temperature + "°C à " + firstResult.location.name + " en ce moment");
});