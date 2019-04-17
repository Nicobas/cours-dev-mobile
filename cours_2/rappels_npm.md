## Commandes NPM :

```
npm init
// Permet d'initialiser un nouveau projet npm
// Cette commande va créer un fichier package.json qui est  la carte d'identitée du projet
// Le fichier package.json va contenir des informations tels que la version, les informations sur l'auteur, le repository associé, les dependences, les scripts, ...

npm install (ou npm i)
// Installe les nodules qui sont indiqués dans le package.json
// Les modules vont êtres téléchargés dans le dossier node_modules

npm install <module>
// Va ajouter le module passé en paramètre dans le package.json et installer les dependances

npm install -g <module>
// Le paramètre -g (global) indique que le module est un programme que l'on souhaite installer sur le système
// Il va donc ajouté une (ou plusieurs) commandes bash sur le système que l'on pourra utiliser
// Cette commande ne modifie pas le package.json

npm start
// Execute la commande bash indiquée dans le script "start" du package.json
// Généralement cette commande execute le fichier principale du projet (ex: nodemon index.js)

npm run <script>
// Execute la commande bash indiqué dans le script associé du package.json
// On peut mettre toute sorte de script, par exemple pour lancer les jeux de tests ou deployer une version sur un serveur ...
// "npm start" est un racourcis de "npm run start"

```