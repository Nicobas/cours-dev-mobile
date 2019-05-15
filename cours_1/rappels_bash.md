## Commandes bash de base :

```
man <commande>
// Affiche la documentation de la commande
// Ex : man ls
// Ce n'est pas super lisible, la doc est également dispo sur internet ;)

echo <texte>
// Affiche du texte 

pwd 
// Permet de savoir ou l'on se situe dans l'arboressence de fichiers
// Ex: /home/nicobas/workspace/cours-dev-mobile

Il y a quelques raccourcis à connaitre pour se déplacer dans l'arboressence des fichiers :
.   c'est le repertoire courant (celui dans lequel je me trouve)
..  c'est le repertoire parent (si je suis dans "/home/nicobas", ce sera "/home")
/   c'est la racine, tous les fichiers du système sont contenu dedant, on ne peut pas remonter plus haut dans l'arboressence
~   c'est le repertoire personnel de l'utilisateur connecté (chez moi /home/nicobas)

cd <repertoire>
// Permet de se déplacer dans l'arboressence de fichier
// Le chemin du repertoire peut être absolu (/home/nicobas/workspace/cours-dev-mobile/cours_1) ou relatif (cours_1 ou ./cours_1)
// Ex : cd /home, cd ..

Pour toutes les commandes suivantes on peut indiquer un fichier/repertoire à l'aide de son chemin relatif ou absolu
Si vous ne specifier rien, c'est le repertoire courant (.) qui est utilisé ("ls -la" == "ls -la .")

ls <fichier/repertoire>
// Liste le contenu d'un repertoire
// On peut ajouter des parametre, par exemple -l (afficher en ligne) et -a (afficher les fichiers/repertoires cachés (ils commencent par .)) 
// Ex : ls -la ../unautrerepertoire

touch <fichier>
// Créé un fichier
// Ex : touch toto.js

mkdir <repertoire>
// Créé un repertoire
// Si on souhaite créer une arboressence de fichier il faut ajouter le paramètre -p (ex: mkdir -p a/b/c)

cat <fichier>
// Affiche le contenu d'un fichier

rm <fichier/repertoire>
// Supprime un fichier ou un repertoire
// Pour supprimer un repertoire il faut ajouter le paramètre r (récusfif) -> rm -r ...
// Dans certains cas le système demandera une confirmation, si vous souhaiter ignorer cette confirmation il faudra ajouter le paramètre f (forced) -> rm -rf ...

mv <source> <destination>
// Déplace un fichier/repertoire de la source vers la destination
// A noté que cette commande nous permet de renommer un fichier/repertoire (ex : mv toto.txt titi.txt)

cp <source> <destination>
// Copie un fichier
// Il faut utiliser le parametre -r (recursif) pour copier un repertoire

bash <fichier>
// Execute un fichier bash (.sh), qui contient plusieurs commandes bash

sudo <commande>
// Execute une commande avec les droits administateur
// La commande "sudo -su" permer de se connecter avec l'utilisateur root (superutilisateur, il a tout les droits)
// /!\ faire très attention avec cette commande, par exemple la commande "sudo rm -rf /" va essayer supprimer tout les repertoires/fichiers de votre système et le rendra inutilisable

Par défaut le résultat d'une commande est affiché dans la sortie standard (votre console), vous pouvez la rediriger vers un fichier den utilisant ">" ou ">>"
Ex : pwd > oujesuis.txt
// oujesuis.txt contiendra "/home/nicobas/workspace/cours-dev-mobile"
// > écrase le fichier si il existe, sinon il le crée tout seul
// >> ajoute le résultat à la fin du fichier si il existe, sinon le crée

A savoir que tous les programmes installés sur votre système peuvent s'executer/s'ouvrir en ligne de commande
Ex : node, git, firefox, gedit, filezilla, nautilus (gestionnaire de fichier sur Ubuntu) ...
```