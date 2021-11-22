/*

ORDINATEUR/INTERNET/PROGRAMMATION - Ce que l'on doit savoir avant d'apprendre à programmer :
Cours avec quiz visant les débutants qui ont envie d'apprendre (conseils théoriques puis pratiques)

Informaticien : un peu de math, de sience, et beaucoup de logique !
D'un point de vue futuriste, la programmation permet d'améliorer notre vie (de façon certes un peu utopiste)
Elle est présente sur les sites, les robots, l'IA, etc.
Leurs salariés sont heureux et il y a de la demande sur le marché de l'emploi (hélas certains ne sont pas déstiné à ça alors qu'ils viennent)
Avant de conduire on apprend le code de la route (respect des lois et usages), idem avec les règles de développement.
Il faut mettre du temps et de l'énergie pour apprendre pleins de chose et bien comprendre.

Un ingénieur apprend des connaissances larges et ainsi il peut être bon un peu en tout (langue, informatique, etc.)
Il faut distinguer les métiers du domaine, un technicien sait réparer un ordinateur en physique ou en installation.

WikiPedia à Dev :
Le développeur (aussi appelé "Programmeur" ou "Analyste programmeur") est celui qui conçoit, écrit, teste et maintien les codes sources d'applications. Il a des compétences générales en informatique (système, réseau, etc...). Le métier est accessible avec un BTS/DUT. Avec des diplômes du type master/école d'ingénieur, ses responsabilités peuvent être accrues, il peut dès lors devenir chef de projet et intervenir sur plusieurs étapes clés du déploiement des projets.

ePortfolio :
Github, le leader dans le domaine : https://github.com/
Gitlab, une alternative populaire à Github : https://about.gitlab.com/
BitBucket : https://bitbucket.org/product
SourceForge : https://sourceforge.net/

Communautés :
Stackoverflow, le meilleur ami des programmeurs : https://stackoverflow.com/ (la légende dit que tout ou partie de n'importe quel programme informatique provient de Stackoverflow...)
Reddit, forum international traitant de divers sujets, dont la programmation : https://www.reddit.com/r/programming/ (n'hésitez pas à parcourir les divers sujets r/ pour y trouver des forums plus spécifiques selon vos besoins)
Quora, sous le même principe que Reddit, Quora est une communauté internationale vous permettant de poser vos questions selon des sujets donnés : https://www.quora.com/topic/Computer-Programming
Developez.com, pour citer tout de même un site 100% francophone : https://www.developpez.net/forums/

Outils web :
Visual Studio, l'éditeur de code de Microsoft pour les langages C#, VB.NET et VC++ (principalement) : https://visualstudio.microsoft.com/fr/
Eclipse, un éditeur de code principalement utilisé pour développer en Java, mais également pour C/C++ : https://www.eclipse.org/
Sublime Text, un éditeur de code multilangage très simple d'utilisation et léger : https://www.sublimetext.com/ (le "Bloc-Notes du programmeur")
Android Studio, pour vos développements sous Android : https://developer.android.com/studio/
Outils pour le développement Web (en anglais) : https://www.keycdn.com/blog/web-development-tools/


Ordinateurs :
PC et MAC se procurent chez le même fournisseur pour leurs pièces. Microsfot est arrivé juste après.
C'est une machine qui fait en permanence des calculs, des traitements d'informations (unité central et écran, clavier et souris)
Ou une machine programmable qui prduit un résultat en fonction des données fournis (idem en programmation)

Un processeur exécute des instructions machines (opérations arithmétiques, logiques et de transfert)
3 circuits viennent à l'aide des transistors + d'autres composants avec additionneur et bascules.

RAM, mémoire (vive) à accès aléatoire (sert aux calculs et au stock de mémoire via un ensemble de cases), se combine avec processeur efficace.
Le cycle de rafraichissement régulier effectué par l'ordinateur est nécessaire (lignes, colonnes, transistors, sauvegarde de gros volumes de donnéees). Utile pour les jeux vidéos notamment.
SRAM (évite raffraichissement) DRAM (inverse), SRAM (lecture donnée séquentielle) DDR SDRAM (plus rapide que le précédent)
CPU...

Disque dur (opposé à la mémoire ram), pour ne jamais perdre nos données (sauvegarde), couche magnétique, capte signaux éléctrique. SSD (plus speed) et HHD ?
GPU gère l'affichage graphique, relié à l'écran, calculs encore.
Périphériques entrés et sorties (interractions humains et système, pilotes)

Logique programmation : "Si Chargeur_vide() ET Munitions_disponibles() alors Recharger_pistolet()" dans un jeu vidéo.

Manager :
Lancement après programme boot, permet de lancer plusieurs appli en même temps, accès ressources matérielles, droit accès, accès mémoire, espace de travail.
Système d'exploitation, API et bibliothèque de code.

Architectures Windows (plus populaire, jeux vidéos, quotidiens) MacOS (plus sécurisé, pro design) et LINUX (hébergement, terminal pur) diffèrents plus ou moins.
Leurs fondations sont toutes en langage #C, le choix est une question de préférence.
OS système d'exploitation: classique, mobile, embarqué, différents langages et normes


Langage machine :
Octcets, bits et langage binaire (fonctionne qu'avec du courant et circuit, matérialisé par transistor, aligne quantité énorme de 0 et de 1 - binary -, octet est une série de 8, )

#C et L'informatique utilise des "0 et 1", nous utilisons des chiffres de 0 à 9. Autrement dit, l'ordinateur utilise la base 2 mais nous utilisons la base 10.
2^7x1 + 2^6x0 + 2^5x0 + 2^4x1 + 2^3x1 + 2^2x0 + 2^1x1 + 2^0x0 = 154  

Encodage (ASCII norme 1960) et normalisations (caractère, plus avec space et escape, caractère de contrôle en emoji)
Normalisation iso avec des langues et encodage unicode (centaines de milliers de caractères), UTF-8 (source HTML)

Langage bas et haut niveau :
Niveau fait réf à la proximité ou éloignement du marériel, le bas est proche du processeur, gestion bonne de la mémoire et plus souple/performant
Le haut est plus proche du langage naturelle (programmation: PHP, Python), abstraction des détails, simplifié et rapide, mais moins souple/robuste,
Langage Assembleur: populaire mais peu usé, instruction saisissable, représente langage machine (binaire, 0 à 20), place valeur 8 bits en registre, etc.


Fonctionnement d'internet :
Actualité en temps réel, possibilité de dialoguer avec n'importe qui dans le monde, jeux en ligne, les réseaux sociaux.
Concepts de fondamentaux pour comprendre sa base.

LAN: réseau local, à la maison
MAN: réseau métropolitain, régional et plus grand
WAN réseau étendu, plus grande échelle
C'est plus spécifié encore ! Le réseau passe d'abord par chez soi plus MAN puis WAN selon ce que l'on cherche.

OSI: interconnection ISO (couches session, application, transport, laision, etc.)
TCP/IP: modèle simplifié, 4 couches pas plus, modèle classique du net
DNS: système de nom de domaine (plus simple à retenir que chiffre/adresse IP), protocole de convertion, fichier HOST manuel créable sur le système OS.
Recherche dans le cache (GG) -> système exploitation (ordi) -> serveur DNS -> serveur racine du DNS -> serveur DNS de 1er niveau.

WWW: on croit que c'est internet en entier, ce sont les sites que l'on voit tous seulement (échange entre côté serveur/baseDeDonnées et avant des sites - front/back)
A la base le net c'était le morse à l'armée et dans les métiers d'infiltration!


Algorithmique :
Gateau: ingrédiens, ustensiles et recettes = préparation
Code régit par un langage de programmation (ingrédien), outils à écrire (ustencile, VScode), puis recette (algorithme, intelligence transformant le code en résultat)
1) doit être fini 2) Chaque étape doit être bien définie 3) doit parvenir à son but.

Notion de complexité: ordinateur inégal en puissance, des programmes ont besoin de rapidité (jeux vidéo, site avec animations dynamiques et grosses images), garantir stabilité en temps et espace
Calculer cette complexité: algorithme de chiffrement (RSA), analyse de liens, Dijkstra (chemin plus court) et de compression (JPG, AAC, MP3, etc.)...


Paradigmes de programmation :
Façon de formuler et résoudre un problème, programmation impérative (langage C), orienté objet (JS, Ruby), redéfinition de programmation déclarative (redéfinir format ou taille image en ex) et d'autres.
POO: encapsulation (boîte avec attribut et enchaînement de fonctions)

Premier langage :
Prendre l'un des plus populaires x commencer (PHP, JS, HTML, CSS, Java, C)
Du langage découlera le but
Chercher le but du programme, de l'apprentissage (WP, RS, POO ???), et ensuite le logiciel (VSc) et système d'exploitation (MAC)
Programmation pour métier, domaine et secteur activité (dev front en agroalimentaire)
Ou idée à mettre en place, la choisir comme faire une appli mmobile (React) ou mise en place d'un site.
Apprenez avec ce qui existe (sites, écoles, cours bons, vidéo Grafikart), résolvez les prob un à un, se lancer de suite sans découragement, tout est bon !
Pour bien apprendre, assimiler le type de syntaxe, la logique, l'environnement (interface logiciel pour écrire du code)
L'erreur est d'écouter des heures sans pratiquer ni prendre de notes

Choisir un langage populaire, sur lequel les patrons recrutent
Développeur web frontal, anglicisme: frontEnd (client et visiteur voit, présentation site), backEnd (côté serveur et stock cachés, sécurisation) fullStack (fait les deux, POO avec CSS)

Programmer pour le web :
Ca ne s'arrête jamais, les langages évoluent et il reste toujours une chose à apprendre.

Souviens toi de tes objectifs de début.
HTML est un incontournable mais ne relève pas de la POO non plus (balise, texte de fond).

Le langage PHP est plus compliqué car on voit moins ce que l'on test.
Ruby est le plus simplifié et anglais, mais le Python aussi est sympathique (sans syntaxe ;)


Framework de votre choix :
Ne pas confondre framework, bibliothèque et CMS

Framework: infrastructure logicielle (Vue)
Library: bibliothèque de code réutilisable (BootStrap)
CMS: solution toute faite prête à l'emploi (WP)

WordPress est le plus gros CMS mondial (bon SEO, bonne sécurité, administration répandue et facile, service client apprend à le gérer)
Framewok.NET, doc.net, pour Windows (fenêtre) avec C++ et quelques autres trucs (liste de fonctions pratiques)
jQuery: bibli code source JS, rapide et souple, écoute d'évènement en une ligne, populaire et facilite hautement JS.
SDL: idem pour langage C (pratique pour création jeux pour gérer souris et clavier, installation complexe)

Il y en a des centaines voire des milliers.
Choisissez plutôt parmi les populaires et selon votre langage avec la constitution que vous préférez ou selon l'offre d'emploi + adapté à un projet donné !


Concepts fondamentaux :
Syntaxe, façon d'écrire un code.
Instructions, processeur comprend quelque chose, 
Variable et constante (invariable), types de données (manip, nature de la donnée, stockage), structure de contrôle (indexation, boucles, itération), tableaux (objet joueur avec array), fonctions (paramètres, récursif, erreur, etc.)

Choix de technologie, tendances et bonus :
Internet des objets. Vers le tout connecter. Sécurité et rendre tout public.
Le bon code vient avec l'expérience. On peut faire un truc fonctionnel mais pas propre.
Bon programme: complet, efficace, facile d'uilisation, maintenable, lisible (éditable, commenté, conventions d'erreur gérée, sécurisation, sans répétition), éviter le code spaghetti)

Cycle de développement: 1) privillégier individu à outils 2) crée logiciel opérationnel avant documentation complète 3) collaboration et souplesse avec client 4) adaptation au changement plutôt que planification lourde).
Architecture logiciel: projet orienté dès le début avec environnement logiciel-appli-framework, etc.
*/

// «Ce que vous devez savoir AVANT d'apprendre la PROGRAMMATION», cours @Udemy avec de superbes diapositifs et des enregistrements auditifs dynamiques, précis et complets. Il faut commencer par apprendre les fonctionnements de base du net pour se lancer dans le développement en ayant mieux assimiler la logique.
