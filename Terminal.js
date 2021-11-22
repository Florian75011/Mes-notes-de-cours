/*
Le terminal controle le Mac, c'est moins intuitif car une interface texte
Puissant, on peut y faire des bêtises (donner accès, suppression irréversible)
Terminal UNIX est né en 1969. Logiciel iTerm permet de personnalisé la forme pour être attractif
Sa philo est une commande = une action, petite et précise + association de commandes pour piloter la machine

Outil incontournable du web :
- Apprentissage rapide
- Productivité accrue une fois expérimenté
- Se servir que du finder c'est n'user que 5% de l'ordi (joli mais limité)
- Mac moins cher à l'usage (vente logiciel notamment)

/ = racine (root)
~ = maison utilisateur (alt+n)
| = (fonction supplémentaire, injecte commande dans une autre - alt+maj+l in terminal)

Cmd+espace = barre recherche "terminal"

Commandes de base :
mkdir exo (make directory)
ls (montre fichier du dossier actuel)
cd exo (aller dans le dossier)
pwd (regarde où l'on est)
open . (ouvre répertoire courant)
nano 1er-fichier.txt (fonction editeur de texte, avec texte ouvert, on écrit plusieurs lignes, ctrl+x sortir et y enregistrer)
touch index.html (créer fichier vide)
mv 2.html essai (déplace fichier du dossier courant vers dossier essai)
mv 4* essai (4 fichiers déplacés du courant au suivant)
rm essai/*.html (remove tout fichier html)
cp 2.txt moi (copier text dossier courant dans nouveau dossier enfant "moi")
mv moi essai (déplacer dossier moi in dossier courant vers dossier enfant essai in dossier courant)
rmdir essai/moi (possible suppression si dossier vide)
rm -r essai/moi (suppression recursive de moi)
ls essai (voir fichier dans le sous-dossier)
ls * (voir tous fichiers des dossiers et sous-dossiers)
cp -r essai test (copie intégrale de essai dans test)
rm -r test/essai (racines et suppression récursive)
cp r- essai/ test (pour copier les fichiers d'essai sans le dossier)
mv 1er-fichier.txt fichier.txt (façon simple de renommer le fichier)

touche: tab (fait de la complétion des mots, nom de dossier par ex)
alt+clic (ou fleches pour modifier son texte avant entrée)
Fleche-haut (voir les anciennes instructions, tout est garder en mémoire, Big Brother)
Opt+fleches gauche-droite (déplacement mot à mot)
CTRL+C (annulation totale de commande)

man+ls (ouvrir manuel pour explication de chaque commande - ls ici)
q (quitter quand on est bloquer dans un menu)

Affichage fichiers personnalisés :
ls -a (all, affiche tout fichiers même cachés)
ls-F (affiche un slash à chaque répertoire)
ls-h (fichiers visible pour l'humain)
ls-l (affiche tout en liste)
ls -t (afficher par ordre de modif et non alphabétique)
ls -Flah (ombinaison : liste alphabétique et humanisante + slashDossier - t pour ordre de modif à la place de a)

Utiliser man cd et faites vos propres choix d'utilisation !
Personnaliser préférence du terminal dans son fichier profile.txt (nano) ou menu préférence

Création et ajout à distance :
ls -a > liste.txt (création depuis commande)
less liste.txt (vérification de réussite)
man ls >> liste.txt (ajout dans liste.txt de la partie manuel de ls)
> (dans un fichier)

ls /System/Library/ | cat | sort -r | tail n- 12
(dossier racine analysé, cat=concatenation, sort -r=tri inverse, tail=10 derniers éléments n=12 inverse et dit 12 éléments)

Fonctions de recherche dans le terminal :
find . depth 2 (trouver fichiers avec profondeur de 2)
find . -name premier-fichier (afficher fichier de ce nom)

Fonction grep recherche avec une casse indifférente (minuscule/majuscule)
find . | grep ma | grep test (trouve fichiers avec ma et pas test)

XARGS: fonction permettant de passer des arguments dans les résultats
find . -type f | xargs grep read | (obtenir toutes les lignes où il y a le mot read dans les .txt)

Permission :
Droits associés selon dossier et fichier. Typique à UNIX.
Droits définis pour et par l'utilisateur, sinon les membres du groupe, puis enfin le reste hors du groupe
3 permissions : R (read) W (write) X (execute) - drwxr--r--- (in terminal) - représentation 1-3-3-3 (1 informe dossier, le reste user-group-everyone).

Permission Read 4 si oui, 0 si non, Write 2 si oui 0 si non, Execute 1 si oui 0 si non
Ajout d'une valeur à chaque permission (logique retrouvable en backend type MYSQL)

Gérer les permissions :
ll (double L pour afficher sa lecture de permission)
cat > salut echo "Hello World" (ajoute à l'intérieur d'un fichier) less salut (lire fichier)
chmod u+x salut (chmod j'ajoute la permission, à l'utilisateur d'éxecuter au fichier "salut")

Changement utilisateur, passer en superbe utilisateur :
su training (mdp à taper, changer user) bach-3.2s (nouvel utilisateur)
sudo (super user) - sudo nano grepman.txt (modifier intérieur fichier)
*/

//Bons rappels pour ne rien oublier de ce qui est acquis et poussé sur quelques petites choses (racines dossiers, copie ciblée, etc. Diapositifs bien réalisés, audio dynamique.
