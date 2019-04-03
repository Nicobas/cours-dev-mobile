const {PIERRE, FEUILLE, CISEAU} = require('./consts');

module.exports = class ChiFuMi {
    constructor(player1, player2, numberOfWon) {

        //-- 5 - On reçoit en paramètre les deux joueurs et le nombre de victoires requis puis on prépare le partie (tour n°0, scores à 0)

        this.p1 = player1;
        this.p2 = player2;
        this.numberOfWon = numberOfWon;
        this.currentRound = 1;
        this.scoreP1 = 0;
        this.scoreP2 = 0;
    };

    playRound() {
        console.log('Manche ' + this.currentRound);

        //-- 8 - Les deux joueurs choisissent ce qu'ils veulent jouer
        const p1Choice = this.p1.play();
        const p2Choice = this.p2.play();

        console.log(this.p1.name + ' (P1) joue ' + p1Choice);
        console.log(this.p2.name + ' (P2) joue ' + p2Choice);

        //-- 9 - On détermine qui remporte la manche
        
        if ((p1Choice === PIERRE && p2Choice === CISEAU) //-- Tous les cas qui font gagner P1
            || (p1Choice === CISEAU && p2Choice === FEUILLE)
            || (p1Choice === FEUILLE && p2Choice === PIERRE)) {

            //-- 10 - On incrémente le score du joueur qui gagne la manche
            this.scoreP1++;

            console.log(this.p1.name + ' (P1) gagne la manche');

        } else if ((p2Choice === PIERRE && p1Choice === CISEAU) //-- Tous les cas qui font gagner P2
            || (p2Choice === CISEAU && p1Choice === FEUILLE)
            || (p2Choice === FEUILLE && p1Choice === PIERRE)) {

            this.scoreP2++;

            console.log(this.p2.name + ' (P2) gagne la manche');

        }
        else { //-- Les cas restants représentent une égalité
            console.log('Egalité');
        }

        console.log('Score : ' + this.p1.name + ' (P1) ' + this.scoreP1 + ' - ' + this.scoreP2 + ' (P2) ' + this.p2.name);

        //-- 11 - On incrémente ne numéro de la manche
        this.currentRound++;
    };

    playGame() {
        console.log ('Début de la partie');

        //-- 7 - Tant qu'aucun des joueurs n'a atteint le nombre de victoires requis, on lance une nouvelle manche
        while (this.scoreP1 < this.numberOfWon && this.scoreP2 < this.numberOfWon) {
            this.playRound();
        }

        console.log ('Fin de la partie');

        //-- 12 - L'un des score à atteint la valeure requise, on determine le vainqueur de la partie

        if (this.scoreP1 > this.scoreP2) {
            console.log(this.p1.name + ' (P1) gagne la partie en ' + (this.currentRound - 1) + ' manches');

            //-- 13 - On retourne le vainqueur
            return this.p1;
        }
        else {
            console.log(this.p2.name + ' (P2) gagne la partie en ' + (this.currentRound - 1) + ' manches');
            return this.p2;
        }
    };
};