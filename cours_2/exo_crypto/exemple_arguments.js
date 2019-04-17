// vous pouvez récuperer les arguments de la commande avec process.argv
// process.argv est un tableaux qui contient le nom de la commande, le fichier js executé et les arguments

console.log('tableau process.argv :', process.argv);

// si vous essayez d'exécuter la commande suivante :
// node exemple_arguments.js argument1 argument2
// vous pouvez récuperer les deux arguments à l'aide de process.argv[2] et process.argv[3]

console.log('1er argument :', process.argv[2]); // vaut "argument1"
console.log('2eme argument :', process.argv[3]); // vaut "argument2"