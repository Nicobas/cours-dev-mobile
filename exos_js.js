// bnicolas.pro@gmail.com

// Exo 1

const n = 10;

function draw (number) {
    //...
}

console.log(draw(n));

// OOOOOOOOOO
// OXXXXXXXXO
// OXXXXXXXXO
// OXXXXXXXXO
// OXXXXXXXXO
// OXXXXXXXXO
// OXXXXXXXXO
// OXXXXXXXXO
// OXXXXXXXXO
// OOOOOOOOOO

// Exo 2

const date = new Date('2019-03-27');

function showDateFr (date) { // aller voir la doc JS de l'objet Date
    //...
}

console.log(showDateFr(date));

// Mercredi 27 mars 2019 10 heures 0 minute 30 secondes

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
        //... initialise la partie
    };

    playRound() {
        //... permet de jouer un tour
    };

    playGame() {
        //... permet de jouer la partie et renvoie le gagnant
    };
}

const alice = new Player('Alice');
const bob = new Player('Bob');

console.log(alice.play())

// const game = new ChiFuMi(alice, bob, 3);
//
// const winner = game.playGame();
//
// console.log(winner.name + 'gagne la partie');

// Nouvelle partie en 3 victoires avec Alice et Bob
// Tour 1 : Alice pierre, Bob feuille, Bob gagne (1-0)
// Tour 2 : Alice ciseau, Bob feuille, Alice gagne (1-1)
// Tour 3 : Alice pierre, Bob feuille, Bob gagne (2-1)
// Tour 4 : Alice feuille, Bob ciseau, Bob gagne (3-1)
// Bob gagne la partie
