const QRCode = require('qrcode');

const text = process.argv[2];
const filePath = process.argv[3];

if (!filePath || !text) {
    console.log('Vous devez entrer un fichier et un texte en argument');
    return;
}

QRCode.toFile(filePath, text, {
    color: {
        dark: '#000000',  // Blue dots
        light: '#ffffff' // Transparent background
    }
}, function (err) {
    if (err){
        console.error(err);
        return;
    }

    console.log('Le qr code a été créé')
});