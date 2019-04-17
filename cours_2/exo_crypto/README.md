### Exercice crypto : ###

Faire deux programmes (crypt.js et decrypt.js) qui permettent de chiffrer/déchiffrer un fichier avec un mot de passe à l'aide de l'algorithme aes

Vos programmes doivent prendre 3 arguments : le fichier d'entrée, le fichier de sortie et le mot de passe ([Voir ici pour récuperer les arguments](./exemple_arguments.js)) :
```
node crypt.js monfichier.txt monfichier.txt.aes monsupermotdepasse
node decrypt.js monfichier.txt.aes monfichierdechiffre.txt monsupermotdepasse
```

Vous devez utiliser les modules suivants :
- fs (module vu en cours)
- [aes256](https://www.npmjs.com/package/aes256)

**Bonus** : chiffrer un repertoire, il faudra alors dans un premier temps créer une archive du repertoire (un zip par exemple, des modules npm existent)