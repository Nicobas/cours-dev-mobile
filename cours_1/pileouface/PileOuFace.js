const Coin = require('./Coin');

module.exports = class PileOuFace {
    constructor(player1, player2, numberOfWon) {

        this.p1 = player1;
        this.p2 = player2;

        this.numberOfWon = numberOfWon;
        this.currentRound = 1;
        this.scoreP1 = 0;
        this.scoreP2 = 0;

        // On instancie une pièce qui va nous servir pour la partie
        this.coin = new Coin();

        // On initialise la partie en determinant quel coté de la pièce fait gagner p1 et celui qui fait gagner p2
        this.init();
    };

    init() {
        console.log('Préparation de la partie');

        // On affecte aléatoirement pile ou face à p1
        const p1Side = this.coin.randomThrow();
        this.p1.setCoinSide(p1Side);
        console.log(this.p1.name + ' (P1) gagne avec ' + p1Side);

        // On affecte l'autre coté de la pièce à p2
        const p2Side = this.coin.getOtherSide(this.p1.coinSide);
        this.p2.setCoinSide(p2Side);
        console.log(this.p2.name + ' (P2) gagne avec ' + p2Side);

        console.log('\r');
    }

    playRound() {
        console.log('\r');
        console.log('Manche ' + this.currentRound);

        // on lance la pièce
        const side = this.coin.randomThrow();

        console.log('La pièce tombe sur ' + side);

        // Si la pièce tombe sur le coté de p1 il gagne, sinon c'est p2 qui gagne
        if (this.p1.coinSide === side)  {
            this.scoreP1++;
            console.log(this.p1.name + ' (P1) gagne la manche');
        }
        else {
            this.scoreP2++;

            console.log(this.p2.name + ' (P2) gagne la manche');
        }

        console.log('Score : ' + this.p1.name + ' (P1) ' + this.scoreP1 + ' - ' + this.scoreP2 + ' (P2) ' + this.p2.name);

        this.currentRound++;
    };

    playGame() {
        console.log ('Début de la partie (' + this.numberOfWon + ' victoires requises)');

        while (this.scoreP1 < this.numberOfWon && this.scoreP2 < this.numberOfWon) {
            this.playRound();
        }

        console.log('\r');
        console.log ('Fin de la partie');

        if (this.scoreP1 > this.scoreP2) {
            console.log(this.p1.name + ' (P1) gagne la partie en ' + (this.currentRound - 1) + ' manches');

            return this.p1;
        }
        else {
            console.log(this.p2.name + ' (P2) gagne la partie en ' + (this.currentRound - 1) + ' manches');
            return this.p2;
        }
    };
};