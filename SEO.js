/*

Le SEO des développeurs :

C'est d'abord le fait d'apparaître le plus haut dans les résultats de recherche suite à un bon développement des pages (sans achat donc lorsque l'on connait la programmation).

Pour ce faire, il vous faut faire un site performant (rapidité, optimisation des pages), accessible (intuitif, handicap, langues), bonnes pratiques, SEO (balises meta, qualité du contenu, bons liens et mots clefs efficaces, images réduites). C'est très bon pour notre valeur et la mise en avant l'ensemble de nos compétences.


Balises meta :
$ ! + entrer (en HTML cette commande vous crée le DOCTYPE de base)

En HTML, et sa page d'acceuil, il faut les utiliser de la bonne façon. Ce sont des balises qui vont aider les moteurs de recherche à vous retrouver avec des balises de langues, de mots clés, de titres, des tailles d'écran (viewport), etc.

Avec les mots clés, mettez en pour améliorer votre visibilité, toutefois sans exagérer pour ne pas être rejetté par Google. En effet, il faut mettre les mots les plus logiques (surtout en lien avec votre site/article) et les plus efficaces.

Balises meta à utiliser :
    <meta charset="UTF-8"> LANGUE
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> COMPATIBILITÉ WINDOWS ET CERTAINS NAVIGATEURS
    <meta name="viewport" content="width=device-width,  initial-scale=1.0"> RESPONSIVE
    <meta name="robots" content="noindex, nofollow"> INDEXATION DE PAGE PRINCIPALE POUR L'AUTOMATISATION DES RECHERCHES ROBOTS, EMPECHE DE SUIVRE


Et à ne plus utiliser (ignorer aujourd'hui par Google pour éviter les abus) :
    <meta name="keywords" content="">
    <meta name="author" content="Florian R">

Ainsi, attention aux articles du net sur le SEO, mieux vaut lire du 2021 que du 2007 !


Les liens :
Les plus importants sont les backlinks : les liens qui pointent vers votre site. Cela donne de la crédibilité. Surtout si le site en question a une bonne « crédibilité » et qu'il y est des mots clefs optimisés dans l'ancre du lien en plus.
Il ne doit y avoir aucun lien mort (404 not found) sur votre site. Et le titre du lien doit être logique également.

Pour en obtenir un bon nombre, il faut avoir des sites amis et des gens de son milieu susceptible de nous appuyer, mais aussi être suivi par des gens qui produisent de la qualité, tout en produisant soi-même des contenus (vidéos, articles, produits) sur des pages bien développées et en rapport avec leur thème, tandis que les utilisateurs eux restent sur votre site, le fouillent et l'aiment.

Il ne faut jamais faire du « piratage noir », il est repérable par les moteurs modernes : le fait de se faire relayer par pliens de sites bidons crées à l'occasion.


Titres, attributs et en-têtes :
- <title></title> COURTE AVEC MAX 50/60 CARACTERES, MOTS IMPORTANTS EN PREMIER, QUELQUES MOTS CLÉS, SANS ATTRIBUT...
- <h1></h1> à <h6></h6> A METTRE DANS L'ORDRE DE HAUT EN BAS ET AVEC UN SEUL h1 (moins immportant que le titre, mais bonne structuration, petit plus).
- <a href="#">Meilleurs livres 2021</a> & <img src="" alt="Mishima, Sartre, Rousseau"> Image à optimiser avec taille résonable et bonne qualité sans lourdeur, site en ligne de compression recommandé COMPRESSOR.IO, format adapté (icone en SVG, photo en JPEG...), attributs/mots clefs logique avec l'image (alt est limité à 125 mots).

Mot clé de base : chat
Mots clés avec modificateurs : nourriture pour chat, race de chat.
Mots clés étendus (alentour): meilleur nourriture pour chat, combien de temps vit un chat, vivre avec un chat... 


Keywords :
Les mots-clés sont des mots ou listes de mots prisés par les moteur de rechercher et tenant d'un thème précis.

Il existe les mots de 1) courte traîne (énormément recherché, mais concurrence très forte, trop de résultat à la recherche) et de 2) longue traîne (plus précis, moins impactant, mais rares et donc utiles). Le site WordTracker peut être utile par exemple pour savoir quels sont les mots efficaces à ajouter.

1) nourriture chat, race chat...
2) races de chats japonais, nourriture pour écureuil...

PS. Les listes aussi sont appréciés par Google, ce qui donne un aura explicatif, une attitude d'expert (<ul><li></li></ul>).
Avec une recherche "best bok ever" vous verrez des résultats sous forme de liste avec pour l'exemple "Les 12 plus grands ouvrages de la littérature"


Les "rich snippets" :
Payer google pour remonter dans les pages de recherche par ajout de bouts de texte. On peut voir ce qui est compatible avec quoi (air pod avec Android par exemple). L'onglet recette pour les plats est également disponible pour Google, il faut développer en ce sens pour en bénéficier.


Localisation :
XML sitemap, carte de notre site à indexer, website et organisation et liaisons des pages. Il le faut pour l'indexation, si vous avez beaucoup de pages avec certaines plus ou moins invisibles.
Cette fonction JS souvent, aide à la localisation. Vous serez cibler par rapport à là où vous vous trouvez. 
C'est non indispensable mais bon si la navigation est claire et fluide et qu'il y a peu de pages.
Une autre méthode consiste à faire son site une seule page avec fenêtres (app SPA avec routers).

La Google Search Console est un outil de SEO important pour suivre son évolution en temps réel.

Un fichier robot.txt permet de dire que certaines pages moins importantes ne seront pas influencée par le SEO (sans description, mots clés). In fine elles seront indexés paradoxalement plus rapidement, car saoulageant la recherche générale. Ceci concerne tous les "agents" sur le site racine :
$ User-agent: * 
$ Disallow: /


Moteurs de recherche :
Chaque moteur à sa façon de trier les sites, bien qu'il suive une logique de programmation dans tous les cas. Le HTML et le CSS sont plus efficaces dans la recherche que le JS (ainsi il est mieux de gérer les animations en CSS).
Google détient les plus grandes part du marché, c'est le mastodonte à 90%. Ensuite suit Bing de Microsoft atteint 6%, c'est le moteur de recherche de Edge par défault. Yahoo est à 2/3% et utilise Bing pour obtenir des résultats, il est activé par défaut avec le navigateur Firefox US. Baidu/Yandex sont les gros moteurs respectivement de la Chine et de la Russie, DuckDuckGo est à 0,5%, il évite les pubs et le trackage en navigation, mais reste moins efficace en recherche (moins évident) ; un navigateur du genre est Brave. YouTube à sa façon est aussi un moteur de recherche avec sa barre propre à ette utilisation ; idem pour Facebook et Amazon.


Sécurisation :
Celle-ci est aussi importante pour le SEO. Avec les manques de protections, cette dernière décennie a vu naître ce sujet, qui est devenu de plus en plus renforcé.
Il faut tout d'abord un HTTPS, et non HTTP seul, pour remonter dans les recherches grâce à cette "certification" en terme de sécurité (secure). Les plus grands hébergeurs le proposent en un clic aujourd'hui (CMS tel WordPress).


Favicon :
Icône principale du site et professionnelle. Cela fait sérieux, on fait naturellement plus confiance à votre site, même si ce n'est qu'un plus avec une petite image à côté du titre dans le navigateur.
Ce générateur avisé vous fera tous les fichiers et balises nécessaires suite au chargement de votre image (générer le HTML tout en bas à la fin) : https://realfavicongenerator.net/


Nom de domaine :
- www.votre-marque.com
C'est un choix entre le préfixe, nom de domaine et son extension. 1 ou 2 mots clés sans trop de fantaisie. Parfois des sites ont des noms n'ayant rien à voir avec leur activité.

C'est important que la prononciation aisée avec formule abrégée à fort potentiel (Instagram, Insta). banissement de tout accent, faute d'orthographe, peu de tirets et de caractère spécial.

Un titre comme "École du web" inspire la confiance aux développeurs. Pensez long terme et image de marque. Pour l'extension, .com reste la plus universel, .fr français, mais il existe pleins d'extensions (.dev est original).
Des outils d'hebergeurs montrent quels sont les noms de domaine disponibles (ex: 1&1).


L'importance de la sémantique :
Plutôt que de ne mettre que des <div></div> ou des <p></p>, il faut être précis en séparant les sections de son code (header, footer, main, section, article, nav) et en utilisant liste et titres.

Main est pour la partie la plus importante. La section découpe le site en partie. ON met le header en haut et le footer en bas. + Ex de raccourci : "nav>ul>li*3"

Notament avec liens et boutons : 
Le lien décrit la destination avec ancre correct et mots clés en bonus, chaque image peut renvoer vers un lien (bonus avec ses alt). Le titre doit faire comprendre aux gens où ils vont se retrouver si possible avec ScreenReader (déplacement avec tab via tabindex dans la balise, accessibilité).
Le bouton sert à effectuer une action, soit une interraction entre utilisateur et site, comme supprimer, modifier, ajouter, déplacer, animer.
Évitez de transformer le lien en bouton ou inversement en une valise.


Attributs ARIA :
C'est un peu différent selon le pays et le navigateur. Ce n'est pas obligé de passer par là. Il suffit de mettre les bons éléments au bon endroit, mettre du texte dans les liens et boutons, ARIA peut aider si nous n'avons pas de solutions natives dans nos languages utilisés pour la programmation.
Les attributs doivent être accessibles par la navigation. Ne cachez pas des éléments qui sont "focus" sans oublier des guillemets par exemple.
Pour l'accessibilité, vous avez le logiciel JAWS, qui lit tout ce qui est présent sur la page d'un site entre autres choses.
En HTML le Aria-Label sert à décrire ce que fait telle ou telle balise (comme un bouton de recherche).
Le reste est sur "all aria attributs" sur le net.


Le contraste :
Important pour la lisibilité et donc l'accessibilité en SEO pour un site.
Il faut donc faire attention à notre couleur de texte avant et notre couleur de fond (pas de orange sur du jaune par exemple).
Il est possible de le vérifier vite notre lisibilité couleur ici : https://webaim.org/resources/contrastchecker/


Le bon formulaire :
Il doit être bien présenté, on lui met toujours le label (<fieldset><legend></legend></fieldset>) :
<label for="age">Votre âge</label>
<br>
<input type="text" id="age">
<button type="submit">Envoie de formulaire</button>


Faire une audit :
Via le navigateur Google Chrome, vous pouvez utilisez l'onglet Lighthouse de la console du développeur en "générant un rapport" sur n'importe quelle page de site afin de constater sa performance (ex donné : page twitter d'Elon Musk).
Non seulement vous aurez des statistiques pour chaque catégories notées sur 100, mais en plus vous aurez en détail de nombreux points bons et d'autres à améliorer avec quelques explications pratiques.

Le responsive (adaptation aux largeurs d'écrans possibles avec mobiles, tablettes et ordinateurs) est obligatoire pour être suivi est bien noté.
Cela se gère en réactif avec le CSS en mobile-first essentiellement : flexbox, grid, container, media queries (max-min).

On peut faire du texte responsive ainsi :
.title { font-size: (1.525rem + 3.3vw) }; 
@media (min-width: 1200px) { .title { font-size: 4rem; } }

En faisant de bonnes unités relatives et propriétés vous passerez moins de temps sur le responsive (%, width, height, min, max, etc.)


Les performances :
temps de chargement raccourci, plus de retentions visiteurs, taux de rebond plus faible (gens intéressés qui restent et regardent plusieurs pages).
Optimiser HTML/CSS et JS avec "minifier", optimiser ses fichiers (compression images, icones, vidéos), avoir un bon hébergeur et minimiser ses requêtes.

- En HTML :
Utilisez preload, le préchargement, en plus de la ligne du stylesheet pour un rendement plus rapide (préciser que la page où l'on est, surtout sur sa page principale) :
<link rel="preload" href="style.css" as="style">
<link rel="stylesheet" href="style.css">

Idem avec le preconnect d'une police d'écriture sur GoogleFonts par ex :
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">

Evitez d'avoir du CSS "in line" avec les balises style (exception pour passer au-dessus du "!important")

Le HTML minifier existe aussi, tout comme en CSS et JS.
Le UnMinifier existe pour passait du minifier au normal, mais il est moins précis.

- En CSS :
transorm/translate et opacity font des calculs de chargements plus rapides que de changer deux couleurs par dessus hover.

.bloc { transition: background-color 0.4s ease-in-out; } + width,height,background
h1 { transition: opacity 0.4s ease-in-out; }
h1:hover { transform: translateY(100px) scale() skew() rotate(); }
Toutes ces propriétés peuvent réaliser 95% des animations proprement.

On peut voir ces résultats dans l'onglet "Performance" en chargement une animation dans la console du développeur (F12).

- En JS : 
console du développeur (F12) : on peut voir dans sources, drawer, coverage toutes les propiétés et fonctions inutilisées et donc inutiles (à enlever). Chassez-le pour libérer de l'espace.

En HTML on met le CSS dans le HEAD, mais SCRIPT à la fin du body pour plus de rendement et de logique. Mais il existe deux méthodes/attibut performantes différentes à placer dans le HEAD :

<script defer src="app.js"></script>
<script async src="app.js"></script>

Defer : attend que tout le DOM (in body HTML) soit prêt, pour lancer le fichier
Async : fait pareil, mais avec l'asynchrone en plus (code s'exécutant de haut en bas en un fil, se bloquant à chaque analyse, sans blocer le chargement malgré les autres scripts cependant - efficace pour les clibement API comme fetch).

Exemple : si vous supprimez un bouton avec un interval, faites supprimer l'interval pour éviter qu'il tourne indéfiiniment en boucle (clearInterval).


Performance image :

C'est en général le point qui dévore la plus d'énergie pour le chargement d'un site. Evitez d'utiliser une immense image pour une vignette toute petite. Faites plusieurs formats de votre image selon son utilisation, avec compression systématique (sauf pour un site de photographes). On utilise le svg ou png pour l'icône et autrement du JPEG.
Certains site compressent mieux que d'autres et selon les images sélectionnées, il faut faire le tour et tester (kraken compressor - tinyjpg.com - bonnes références).

Mieux encore, adaptez l'image avec les tailles d'écrant en HTML :
<img
srcset="
arbre-small.jpg 400w,
arbre-medium.jpg 400w,
arbre-big.jpg 400w"
sizes = "
(max-width: 600px) 400px,
(max-width: 900px) 700px,
1200px"
src="arbre-big.jpg">

Une grosse image se charge rapidement avec détails progressifs :
<img src="" loading="lazy"> 


Les outils :
GoogleTrends : voir les vues par catégorie sur sa page. On peut comparer les recherches de mots clés entre eux, ou encore en retrouver d'autres qui sont liés. C'est utile pour le marketing.

GoogleAnalytics : le plus connu du genre, mettre un ID et son site pour vérifier le trafic de son 

Autres outils de recherches (semi-gratuites avec compte) : Neilpatel Ubersuggest, Semrush, AnswerThePublic...

Outils pour analyser la performance : page speed inside (google), lightouse Chrome,

*/
// Le SEO des développeurs, un autre cours d'Enzo Ustariz sur Udemy. C'est utile pour apprendre ou réviser la logique des moteurs de recherche et comment faire pour améliorer sa performance et qualité de développement avec HTML, CSS et JS (plus théorique que pratique) : en-têtes, titres, balises meta, mots clefs, listes, liens, localisations, gestion et optimisation des fichiers et images, etc. Pour ce faire, vous découvrirez un bon nombre d'outils en ligne par ailleurs. (LinkedIn)

```<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Balises meta pour le SEO -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <!-- <meta name="keywords" content="cours, enseignements, magistère, dispensation">
    <meta name="author" content="Florian R"> -->

    <!-- favicon généré -->
    <link rel="apple-touch-icon" sizes="180x180" href="SEOfavicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="SEOfavicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="SEOfavicon/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <title>Cours SEO</title>
</head>

<body>
    <a href="#" tabindex="1">Accueil</a>
    <a href="https://google.com" tabindex="2">Aller sur la page de google
        <!-- Screen Reader sr-only -->
    <span style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow : hidden;">(Ouvre un lien vers une nouvelle page</span>
    </a>
    <button aria-label="Rechercher">Mon bouton de recherche</button>
</body>

</html>```;
