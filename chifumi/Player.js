const PIERRE = 'pierre';
const FEUILLE = 'feuille';
const CISEAU = 'ciseau';

module.exports = class Player {
    constructor(name) {
        this.name = name;
    }

    play() {
        const rand = Math.random();

        if (rand < 1/3) {
            return PIERRE;
        } else if (rand > 2/3) {
            return FEUILLE;
        } else {
            return CISEAU;
        }
    }
};