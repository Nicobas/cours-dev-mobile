const Player = require('./Player');
const PileOuFace = require('./PileOuFace');

const alice = new Player('Alice');
const bob = new Player('Bob');

const game = new PileOuFace(alice, bob, 3);

const winner = game.playGame();

console.log('\r');
console.log('Le vainqueur est ' + winner.name);
