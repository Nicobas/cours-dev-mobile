const Player = require('./Player');
const ChiFuMi = require('./ChiFuMi');

const alice = new Player('alice');
const bob = new Player('bob');

const game = new ChiFuMi(alice, bob, 100);

game.playGame();
