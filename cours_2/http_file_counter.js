const http = require('http');
const fs = require('fs');

// Ici on a simplement regroupé les deux exercices précédents, le contenu fichier est incrémenté à chaque requete d'un utilisateur et non à l'execution du script

const server = http.createServer((req, res) => {

    fs.readFile('counter.txt', 'utf8', function(err, data) {
        const number = Number(data);
        console.log('le fichier contient la valeur ' + number);

        const numberNext = number + 1;

        fs.writeFile('counter.txt', numberNext, 'utf8', function (err, data) {
            console.log('on écrit dans le fichier la valeur ' + numberNext)

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(""+ numberNext);

        });
    });

});

const host = 'localhost';
const port = 8080;

server.listen(port, host, () => {
    console.log("Server running at http://" + host + ":" + port);
});
