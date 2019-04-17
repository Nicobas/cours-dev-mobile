const http = require('http');
const fs = require('fs');

// Ce script est un exemple basique de serveur http en node, je ferais un cours complet sur le protocole http

// On initialise un serveur http
const server = http.createServer((req, res) => {

    // La fonction passée en paramère est executée à chaque requete faite par un utilisateur

    // Le status http de la requete, 200 (OK) indique que la requete a été comprise et que tout c'est bien passé
    res.statusCode = 200;

    // On ajoute un header pour indiquer le type de contenu renvoyé, en cours nous avions mis du text (text/plain)
    // Ici, j'ai décidé de renvoyer du html
    // Vous pouvez renvoyer tout type de contenu en indiquant le type mime (image/jpeg, video/mp4, ...)
    res.setHeader('Content-Type', 'text/html');

    // On renvoit le contenu de la requete
    res.end("<html><body><h1>Hello world !</h1></body></html>");
});

// On indique l'adresse et le port que le serveur va écouter
const host = 'localhost';
const port = 8080;

server.listen(port, host, () => {

    // La fonction de callback est appelée une fois que le serveur http est prêt

    console.log("Server running at http://" + host + ":" + port);
});
