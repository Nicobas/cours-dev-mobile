// Exo 3 ChiFuMi

const PIERRE = 'pierre';
const FEUILLE = 'feuille';
const CISEAU = 'ciseau';

class Player {
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
}

class ChiFuMi {
    constructor(player1, player2, numberOfWon) {
        this.p1 = player1;
        this.p2 = player2;
        this.numberOfWon = numberOfWon;
        this.currentRound = 0;
        this.scoreP1 = 0;
        this.scoreP2 = 0;
    };

    playRound() {
        console.log('Tour no ' + this.currentRound);
        const p1Round = this.p1.play();
        const p2Round = this.p2.play();

        console.log('P1 : ' + p1Round);
        console.log('P2 : ' + p2Round);

        if ((p1Round === PIERRE && p2Round === CISEAU)
            || (p1Round === CISEAU && p2Round === FEUILLE)
            || (p1Round === FEUILLE && p2Round === PIERRE)) {

            this.scoreP1++;
            console.log('P1 gagne (score : ' + this.scoreP1 + ')');
        } else if ((p2Round === PIERRE && p1Round === CISEAU)
            || (p2Round === CISEAU && p1Round === FEUILLE)
            || (p2Round === FEUILLE && p1Round === PIERRE)) {

            this.scoreP2++;
            console.log('P2 gagne (score : ' + this.scoreP2 + ')');
        }
        else {
            console.log('Egalité');
        }

        this.currentRound++;
    };

    playGame() {
        console.log ('Début du jeu');
        while (this.scoreP1 < this.numberOfWon && this.scoreP2 < this.numberOfWon) {
            this.playRound();
        }

        if (this.scoreP1 > this.scoreP2) {
            console.log('P1 gagne la partie')
        }
        else {
            console.log('P2 gagne la partie')
        }
        console.log ('Fin du jeu');

    };
}

const alice = new Player('alice');
const bob = new Player('bob');

const game = new ChiFuMi(alice, bob, 100);


game.playGame();

