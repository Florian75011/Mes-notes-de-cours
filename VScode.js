/*
Utilisation de VScode (exemples HTML/CSS, JS en back, JSON) :
Un dev JS va souvent utilisé VScode car les deux sont crées/réflechis pour le web.
Résumé: personnaliser l'interface, se sentir à l'aise, les services intégrées, extensions, plus loin, etc.
Installer le logiciel ne suffit pas !
Paramètres de niveaux : global, utilisateur, workspace.

Raccourcis. Ctrl > Pomme sur MacOS :
Ctrl+Maj+P est LE raccourci de VScode pour avoir accès à tout le logiciel et nos ajouts (avec suggestion et ordre d'utilisation)
Ctrl+Maj+E: Exploreur
Ctrl+Maj+G: Git
Ctrl+Maj+D: Debugger
Ctrl+Maj+X: Extension
Ctrl+Maj+F : Recherche
Ctrl+Maj+U : Ouvre terminal en cours ou intégré
Ctrl+MAj+/ : Transforme selection en commentaire ou code alternativement
Ctrl+P: permet d'accéder à n'importe quel fichier
Ctrl+espace sur un format (obtension d'informations .app, .querySelector)
Avec Ctrl+* on fractionne le lecteur gauche/droite ou bas/haut
Les "raccourcis clavier" peuvent être modifiés dans son menu

Ajouts post cours :
Sur mac faire OPT+Z pour basculer sur mise à la ligne du code ou non.
CMD+K, M (choisir nouveau format d'un nouveau fichier)
CTRL+^`(lance terminal in. dossier - chapeau + accent grave)
Touche alt+fleche deplace texte haut en bas, ou saute de mot en mot.
In Terminal: "open ." ouvre finder, "code ." ouvre projet in VScode
Maj+Cmd+K : supprime la ligne en cours

Faire les MAJ à l'instant, car elles sont rapides et n'empêche pas de coder (redemarrer après pour que ce soit effectif)
Les points JSON gèrent tous les détails de définition de l'application dans ses extentions et paramètres
On crée aussi des paramètres liés uniquement à un dossier avec "settings json workspace"

settings.json // Version workplace, permet de mettre des paramètres propres à un seul dossier
Dans le Pom+Maj+P, vous pouvez taper "languages" pour modifier les paramètres par langages de programmation

On peut activer dans la roue en bas à gauche la "syncronisation des paramètres" pour enregistrer ses propres options via son compte (GitHub).
Ou que vous vous connecté, vous aurez vos options.

Le mappage de touches (changer raccourci etc),
Le breadcrums (on voit le fichier, les fichiers du dossier, ses sous-dossiers jusqu'au dossier principal/source)

Recherche: petite fleche vers le bas, on peut remplacer les mots concernés. Avec la touche respect de la 'case' on peut respecter les majuscules strictement

Services intégrés du logiciel ;
Auto-complétion de code (function comme format, etc.), informations de paramètres et rapides, symboles des icones (module, keyword, dossier...), etc.

Refactoring :
On refait le code en plus propre sans changer strictement rien au comportement et à l'exécution du code

Emmet :
Principalement agissant sur HTML/CSS. On peut écrire une balise complète sans les crochets
En tapant en HTML: " ul>li*3>:a:link " (élément parent et enfant) vous allez ouvrir les ul avec 3 li (3 lignes en un paragraphe) + ajouts de liens
ul>li>*3>:a:
Pom+Opt+Down: Selection des autres occurences
ul>custom*3>spanSpecial (idem avec sa particularité)

En CSS, c'est naturel quand on connait le titre des propriétés :
mb10: margin-bottom: 10px;
bdrs5: border-radius: ;


Extensions :
Marketplace, sécurité des installations, exemples concrets,

On met .svelte pour chercher une extension lisant ces fichiers
On peut cliquer sur le premier icone de recherche et trier par (note évaluation, nombre téléchargements...)
Une extention installée peut être désactivée en un clic (pour un espace de travail uniquement aussi) en cliquant sur la "roue paramètres"
On installe ce qui a de bons commentaires, bonnes notes et qui sont à jour et bien téléchargées
En cas de pépin, désinstaller tout de ce qui a posé problème.

En recherche: @builtin : vous affiche les extensions intégrées de base
Existe aussi :  @installed @category:"themes"   (on voit les extensions installées dans le domaine des changements de thèmes d'affichage)
Ou:  @category:"extension packs" vue (recherche les extensions pour la techno Vue.js)

En niveau intermédiaire vous pourrez gérer Git, Debogueur, Terminal, Snippets, etC.
Après avoir votre schéma en pseudocode algorithmique, réécrivez votre formule avec un langage comme JS ou PHP
*/

function myF() {
  console.log("My name");
}

// Après faire:  "  myF+ALT+MAJ+F12  "  ": explication d'où se fait sa définition
