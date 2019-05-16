## Commandes et architecture React-Native :

```
react-native init <nom du projet>
// Permet d'initialiser un nouveau projet react-native
// Un projet react-native est un projet node préconfiguré pour react-native, il y a le fichier package.json pour les dépendances
// Pour installer de nouveaux modules il faut utiliser les commandes classiques npm ou yarn (équivalent)

// Architecture d'un projet react-native (je ne cite que ce qui nous est utile)
android                                     // tout ce qui concerne la couche native Android
|--app
   |--build                                 // Les fichiers de compilation Android (ce que le clean supprime), c'est également ici que l'on récupère les APK
   |--src                                   
      |--main
         |--java
            |--...                          // en fonction du nom du package de votre projet
               |--MainActivity.java         // point d'entrée de l'application Android (couche native)
               |--MainApplication.java      // pour initialiser les dépendances react-native 
         |--res                             // Fichiers de resources Android (contient le nom de l'app, les icones, le splash screen, ...)
         |--AndroidManifest.xml             // fichier de conf, utilisé notament pour ajouter des permissions (caméra, localisation, ...)
   |--build.gradle                          // fichier de conf pour ajouter des dependances react-native, il permet de faire aussi beaucoup d'autres choses      
|--build.gradle                             // fichier de conf pour ajouter des dependances gradle
|--gradlew                                  // script bash pour clean et compiler
|--settings.gradle                          // fichier de conf pour ajouter des dependances react-native native
ios                                         // tout ce qui concerne la couche native iOS
|--<nom du projet>.xcodeproj                // projet à ouvrir dans Xcode (qui nous permetra de configurer la couche native iOS)
node_modules                                // fichiers des dependances
src                                         // (à créer) tout votre code JS sera dedant (la structure évoluera en fonction du projet)
|--assets                                   // contient les images, polices, ...
|--components                               // contient touts vos composants
App.js                                      // Premier component appelé dans index.js, je conseille de le déplacer dans src
.gitignore                                  // pour ignorer les fichier dans git (préadapté pour react-native)
index.js                                    // point d'entrée de l'application (couche JS)
package.json                                // scripts et dependances npm

./gradlew clean
// Permet de clean le projet android (il faut d'abord se déplacer dans le dossier android)
// Gradle est un outil qui permet de gérer les dépendances d'un projet Android et de le configurer (équivalent de npm pour un projet node)
// gradlew est un fichier bash qui contient les commandes pour compiler android (clean, install, génération d'apk, ...)
// Pensez à clean avant de commencer à travailler et dès que vous avez un bug bizarre (apres un clean, il faut toujours relancer le start puis le run)

react-native start
// Démare le serveur web (couche JS) qui execute votre code donne les instructions à la couche native
// Il faut distinguer la couche JS (commune) de la couche native Android ou iOS

react-native run-android
// Compile l'application Android avec Gradle (couche native) et lance l'app sur le device

react-native run-ios
// Nécessite Xcode, l'équivalent de Android Studio pour iOS
// Compile l'application iOS avec les outils Xcode (couche native), lance l'émulateur et lance l'app sur le device
// Il est plus simple de compiler l'application directement depuis Xcode

react-native log-android
// Permet d'afficher en temps réel les logs de l'application Android
// Cette commande ne fonctionne pas pour iOS, il faudra utiliser d'autres outils (comme l'inspecteur de Google Chrome)

// Je vous conseil d'avoir toujours 4 terminaux ouvert : un pour le clean, un pour le start, un pour le run et un pour les logs

// Quand vous avez un bug et que vous ne trouvez pas le problème, il se peut que ce soit la couche JS qui ai planté, dans ce cas, vous pouvez essayer les commandes suivantes à la suite :
rm -rf node_modules     // on supprime les dependances (il peut y avoir un fichier corrompu)
npm i                   // on réinstalle les dépendances
// ensuite vous relancez les commandes des 4 terminaux 

PS : Pour Android tout peut se faire via votre IDE, pas besoin d'Android Studio, pour iOS la plupart de la configuration native doit obligatoirement se faire via Xcode

```