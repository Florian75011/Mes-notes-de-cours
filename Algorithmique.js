/*
COURS UDEMY - FONDAMENTAUX DE L'ALGO

Algo : suite d'instructions alignées l'une après l'autre et en fonction d'un résultat attendue
On met la casserole, puis le beurre puis l'oeuf, et on peut le manger (ou je me lève, éteint le réveil, fait ma prière et petit déjeune)
L'algo est compréhensible par l'homme par son langage familier (binaire)
Le langage de programmation (JS, PHP) est celui qui est le langage intermédiaire
L'algo a un début puis une fin, en exécutant une tâche bien définie

Un algorithme prend des données en entrée,
exprime un traitement particulier et fournit des
données en sortie. 

un algorithme ne dépend pas du langage dans lequel il est
implanté, ni de la machine qui exécutera le programme correspondant.

Une notice de montage de meuble est un algorithme à sa façon.

Définition en vrac: bon début pour appréhension du code, instructions pour chemin de la poste, blocs primaires mis bout à bout, POO sans langage spécifié, pseudocode de convention.

Il faut avoir une écriture rigoureuse
• Il faut avoir une écriture soignée : respecter l’indentation
• Il est nécessaire de commenter les algorithmes
• Il existe plusieurs solutions algorithmiques à un problème posé
• Il faut rechercher l’efficacité de ce que l’on écrit


L'algo se décortique en instructions
L'utilisateur qui est développeur utilise une machine, un logiciel et un langage pour optimiser l'algorithmique

On peut créer un algo qui multiplie 4*7= 28
Etapes: donner un titre choisit (résumé de l'obectif visé) 1er nombre, 2e nombre, puis les multiplier, enfin ajouter le résultat, le mettre dans la zone mémoire et l'afficher
Indenter les instructions : mettre en code les lignes dans l'ordre et proprement

Variable et constante : nom et valeur contenue dans une boîte.
Elles se déclarent, elles créent une zone de mémoire, on y stock des informations
Constante est pareil, mais elle ne change jamais (const, nom, type)

Pseudo-code :
Const n:entier N=3
Var SOMME, A:entier
(saisir A, SOMME=A+N, afficher SOMME)

Nombres: entiers, réel (-3 à 3), caractère (spéciaux ou alphanumérique + nombre), string et booléen
Concaténation:  enchaînement de plusieurs chaînes mises bout à bout
const a=PC
Var concat,N:string
(N, A+N, afficher concat

Affectation/Assignation: opération permettant d'attribuer une valeur à une variable/constante
A := B (on affecte la valeur de B dans A)

Permutation: intervertir les valeurs de deux variables (permuter les variables)

Algo de permutation
Constantes A,B : réel  A=2,B=5
Var C : réel
( C<-A ; A<-B ; B<-C ; afficher(B) ; afficher(A) )

Structure conditionelle :
Un traitement ne peut s'exécuter que si une condition est satisfaite (évaluée à vrai)
Si (condition-vraie) Alors <Traitement> FinSi

Prime 200$ pour couples mariés de + de 3 enfants
Var Salaire, nb_enfants: réel
Const prime: réel, prime :=200$
(lire(salaire) ; lire(nb_enfants) Si (nb_enfants >= 3) Alors Salaire := Salaire+Prime FinSi afficher(salaire) fin)

= égal à ; >= supérieur ou égal; <> différent de...


Ex: 2 joueurs +12 pour jouer on-line. Ex: Nombre paire entre 2&4

Var A,B: réel
(lire(A) lire(B) Si ((A>=12) et (B>=12) Alors Afficher("Accès autorisé") FinSi fin) // La fin évite l'erreur

Var C : réel
( lire(C) Si ((C>=2) ou (C>=4) Alors afficher ))

Syntaxe structure conditionnelle imbriquée :
Si le premier traitement est bon on lance le deuxième (plusieurs echelles de vérifications)

Si(cond_vraie1) Alors <Traitement1>
Sinon Si(cond_vraie2) Alors <Traitement2>
Sinon Si (cond_vraieN) Alors <Traitement N> Sinon <TraitementN+1> FinSi
Finsi Finsi // Cloturer chaque Si avec FinSi

Si le traitement n'est pas satisfait, Sinon exécuter l'autre traitement


Structure conditionnelle à choix multiple :
C'est une structure conditionelle pratique pour les structures à plusieurs traitements selon des conditions

Syntaxe (Selon ou Cas):
Selon Selecteur Faire
Val1: <Traitement1>
Val2: <Traitement2>
...
ValN: <TraitementN>
Sinon: <Traitement_erreur>
FinSelon // FinCas

Ex (savoir état de l'eau selon sa « valeur »):
// Algo Etat_de_lEau
Var t : entier
(
    Lire(t)
    Selon (t) Faire
        cas (t>= -100 ET t<0) ; Ecrire('Etat solide')
        cas (t<= 0..t<100) ; Ecrire('Etat liquide')
        cas (t<= 100..t<200) ; Ecrire('Etat gazéifié')
        Sinon Ecrire('Etat inexistant)
    Fin Selon
)

Boucles.
Boucle While dite TANT...QUE (précondition: si ça se vérifie, structure de contrôle qui ex&cuter un enesemble d'isntructions répétées ensuite sur base de condition vrai/faux, booléen)
Boucle JUSQUA Jusqu'à (post-condition, c'est vérifié après la 1ère boucle COMME boucle)
// boucle COMME (préco)

While:  <Initier compteur> TANTQUE <test compteur> Faire Instr1 <compteur> FinTANTQUE
Ex : Dire salut 4 fois à l'user (1 TANTQUE 4)

Var i = entier
(
    i=0
    TANTQUE(i<4)FAIRE
        AFFICHER ("Salut")
        AFFICHER ("Valeur d'incrémentation est de ", i)
        i:=i+1
    FINTANTQUE
    FIN
) // Pour décrémenter, initialiser index de i à 4 et faire dans l'autre sens la boucle (supérieur/inférieur)


JUSQUA -> REPETE() ... JUSQUACEQUE()

Algo(affiche_messages_incrémentants_compteur)
Var i = entier
(
    i=0
    REPETER
        AFFICHER ("Salut")
        AFFICHER ("Valeur d'incrémentation est de ", i)
        i++
    JUSQUA(i=3)
    FIN
)

i--   ->   i:=i-1


Boucle For, Pour.
Syntaxe: POUR <compteur> DE <val_inférieure> à <val_supérieure> [PAR PAS de val_pas]
Instruction1
FIN POUR

Ex:
Algo(affiche_messages_incrémentants_compteur)
Var i = entier
(
    i=0
    POUR (i DE 1 A 4 FAIRE) i:=i++
        AFFICHER ("Salut")
        AFFICHER ("Valeur d'incrémentation est de ", i)
        i++
    FINPOUR
    Fin
)

TABLEAU:
Ensemble de zone de mémoire portant des valeurs associées à un indice (commençant à zéro)
Structure de données (API) présentant une liste d'informations comme des variables ou du JSON (+indices...)

1:Damien, 2:Julien, 3:Bernard, etc.

Const T[4] : entier
Var i:entier
(
    POUR (i DE 1 A 4 FAIRE)(i++)
        AFFICHER("Saisissez le prénom de vos 4 amis")
        LIRE (T[i])
    FINPOUR

    AFFICHER("Maintenant les prénoms sont affichés")

    POUR (i DE 1 A 4 FAIRE)(i++)
        AFFICHER (T[i])
    FINPOUR
    Fin
)


Tableau multi-dimentionnel.
C'est une structure de données présenté en une liste de variables de même type, de dimension précise, et contenant un indice de celles-ci
Comme avec des objets on peut mettre: {type}:voiture, {taille}:grande, {couleur}:rouge.

Ex: tableau 2 dimensions jusqu'au terme 5:

Algo(saisie de 5 valeurs auprès de l'utilisateur)
    const T[5,5] : entier
    var i,j : entier
    (
        POUR (i DE 1 A 5 FAIRE)(i++)
            POUR (j DE 1 A 5 FAIRE)(j++)
            AFFICHER("Saisissez une valeur combinée de votre choix:", T[i,j])
            LIRE (T[i,j])
            FINPOUR
        FINPOUR
    )
*/