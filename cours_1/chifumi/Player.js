const {PIERRE, FEUILLE, CISEAU} = require('./consts');

module.exports = class Player {
    constructor(name) {

        //-- 3 - Le joueur est instancié ici, on enregistre son nom dans l'objet

        this.name = name;
    }

    play() {

        //-- 9 - Le choix du joueur est aléatoire

        const rand = Math.random(); //-- cette fonction renvoie un nombre aléatoire entre 0 et 1

        if (rand < 1/3) {
            return PIERRE; //-- entre 0 et 0.333 on retourne 'pierre'
        } else if (rand < 2/3) {
            return FEUILLE; //-- entre 0.333 et 0.666 on retourne 'feuille'
        } else {
            return CISEAU; //-- entre 0.666 et 1 on retourne 'ciseau'
        }

        //-- On pourrait par la suite créer une classe HumanPlayer qui hérite de la classe Player et redéfinir la méthode play() afin qu'une vraie personne puisse jouer (avec une interface en console par exemple)
    }
};