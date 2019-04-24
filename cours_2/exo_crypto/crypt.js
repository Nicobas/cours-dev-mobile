const aes256 = require('aes256');
const fs = require('fs');

const fileInPath = process.argv[2];
const fileOutPath = process.argv[3];
const password = process.argv[4];

if (!fileInPath || !fileOutPath || !password) {
    console.log('Vous devez entrer le fichier d\'entrée, le fichier de sortie et le mot de passe en argument');
    return;
}

fs.readFile(fileInPath, 'utf8', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    const encrypted = aes256.encrypt(password, data);

    fs.writeFile(fileOutPath, encrypted, 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Le fichier a été chiffré !');
    });
});
