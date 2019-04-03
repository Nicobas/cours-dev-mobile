//-- Le script commence ici
//-- Les numéros indiquent l'ordre d'exécution

//-- 1 - On importe les classes Player et ChiFuMi afin de povoir les utiliser
const Player = require('./Player');
const ChiFuMi = require('./ChiFuMi');

//-- 2 - On instancie les deux joueurs (ici bob et Alice).
//-- Instancier -> création d'un objet à partir d'une classe, la classe peut etre vue comme une structure ou un plan, l'objet est l'entitée que l'on manipule
const alice = new Player('Alice');
const bob = new Player('Bob');

//-- 4 - On instancie la partie de chifumi
const game = new ChiFuMi(alice, bob, 3);

//-- 6 - Début de la partie, tout ce qui était avant n'était que la préparation de la partie
const winner = game.playGame();

console.log('Le vainqueur est ' + winner.name);
