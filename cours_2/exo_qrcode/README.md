### Exercice qrcode : ###

Faire un programme qui permet de générer un qrcode qui représente une chaine de caractère
```
node qrcodegenerator.js "ma chaine de caractère" monqrcode.jpg
```

Vous devez utiliser le module suivant :
- [qrcode](https://www.npmjs.com/package/qrcode#tofilepath-text-options-cberror)

Pour tester votre programme, vous pouvez télécharger sur votre téléphone une application capable de lire un qrcode

**Bonus** : Faire un serveur http qui renvoie un qrcode représentant la route

Ex : si je me rends sur http://localhost:8080/coucou , le navigateur doit m'afficher un qrcode qui représente la chaine de caractère "coucou"
