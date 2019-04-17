const {PILE, FACE} = require('./consts');

module.exports = class Coin {

    //-- Lancé aléatoire de la pièce
    randomThrow() {
        const rand = Math.random();

        if (rand < 1/2) {
            return PILE;
        } else {
            return FACE;
        }
    }

    // Permet de récuperer l'autre coté de la pièce
    getOtherSide(side) {
        if (side === PILE)
            return FACE;
        else
            return PILE;
    }
};