/*
Git (centralisé) s'est affirmé comme le meilleur enregistreur de projet. Centralisé signifie que l'on peut faire en local et en ligne.
Au début il était en ligne de commande pure et Apache Subversion le compétitioner un peu. Cela a commencé avec SVN (décentralisé, non en local) qui a disparu depuis. Et d'autres logiciels font à peu près la même chose mais sont peu connus.

3 phases : Voyage dans le temps - Prendre des photos (commit) - Se déplacer dans le temps.

- Commandes en local :
$ git init (lance git pour un dossier)
$ git add .
$ git add --all (ajout de tout fichier modifié)
$ git commit -m "${NAME}" (enregistre, prend photo à l'instant)
$ git log (répertorie avec précision les sauvegardes - dates, changements, titres)
$ git push (envoyer depuis local)
$ git pull (reprendre du distant)

On peut récupérer une version antérieure.
Il y en a pleins avec git "revert, checkout, reset".

${} -> nom à donner

- Commandes en distant (côté serveur) :
$ git clone ${adresse ou clef SSH}
$ git push (il suffit, votre repo est déjà lié)
$git remote get-url origin
git@github.com:Florian75011/formation-git-udemy.git (savoir ou en est avec l'url)

Avec pull et push on peut travailler en équipe.

Après il faut apprendre la gestion des branches :

Chaque commit a des univers parallèles.
Au début on fait branche Master (ou Main) et une autre type "développement" pour travailler plutôt sur celle-ci avant "d'envoyer en production".

$ git branch --all (voir toutes nos branches, * specifie on est sur quelle branche)
$ git checkout -b developement
$ git merge ${NAME} (fusion de deux branches, on se met sur une branche et on l'actualise par rapport à une autre plus avancée)
$ git push -u ${origin developement}

Des branches pour nos tests d'équipe et une branche pour tout le monde (master).

GitHub :
Faites vous un compte GitHub pour intérragir avec.
Création à distance. On peut y créer un dossier, que l'on récupérera avec Git ensuite.
Si vous modifiez un fichier directement sur GitHub, faites un $ git pull pour récupérer en local le changement et éviter tout conflit avec le distant préalablement modifié.

App :
TurtoiseGit sur Windows permet de voir un peu mieux le log et utilise des raccourcis.

Revenir à un commit antérieur :
https://www.journaldunet.fr/web-tech/developpement/1202945-revert-git-revenir-a-une-version-anterieure-de-votre-repo-git-en-annulant-un-commit/

*/
// Voici un cours très pratique pour réviser la logique et les commandes classiques de #Git. Vous verrez quelques sites et applications pour améliorer son utilisation, mais aussi la façon de travailler en local, en distant et en équipe. #gitHub #turtoiseGit #gitLab #terminal $ git init add commit log push pull clone remote checkout branch merge revert...
