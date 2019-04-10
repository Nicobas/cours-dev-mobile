module.exports = class Player {
    constructor(name) {
        this.name = name;
    }

    setCoinSide(side) {
        // le coté de la pièce qui est attribué au joueur et qui le fait gagner
        this.coinSide = side;
    }
};