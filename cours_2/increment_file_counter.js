// Le module fs (file system) permet de travailler avec les repertoires et les fichiers du systeme
const fs = require('fs');

// On va dans un premier temps récuperer la valeur contenue dans notre fichier texte
fs.readFile('counter.txt', 'utf8', function(err, data) {

    // Le résultat est renvoyé dans la fonction de callback quand l'opération est terminée

    const number = Number(data); // On transforme la valeur texte récupérée en nombre afin de pouvoir réaliser des opération dessus (ici une incrémentation)

    console.log('Le fichier contient la valeur ' + number);

    const numberNext = number + 1; // On incrémente la valeur de 1

    // On écrit dans notre fichier la valeur calculée
    fs.writeFile('counter.txt', numberNext, 'utf8', function (err, data) {

        // Quand l'opération est terminé, la fonction de callback passée en paramètre est appelée

        console.log('On écrit dans le fichier la valeur ' + numberNext)
    });

    // /!\ A cet endroit du code, le fichier n'a pas encore été modifié

});

// /!\ A cet endroit du code, le fichier n'a pas encore été lu
