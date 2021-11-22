/*

Notes de cours pour la librairie CSS TailWind.

Introduction :
C'est un framework CSS qui contient des classes utilitaires, il ressemble à d'autres mais il a néanmoins une approche différente : il n'a aucun composant par défaut, nous les créons nous-mêmes. C'est plus souple ainsi bien qu'il faille bâtir un pseudo-CSS.
Ce framework est tiré du CSS, donc on écrit quelque chose en rapport tout de même avec ses propriétés natives.

Brève comparaison avec Bootstrap :
De la même façon, on régige encore dans la balise HTML.
Cependant, tailwindCSS permet de mieux particulariser son site (sans SASS pour le coup)
Le plus simple est Bootstrap pour bien démarrer, et Tailwind ensuite pour aller plus loin.

Exemple de composition :
class="bg-gray-900 text-white rounded shadow"
Indique que 1) notre fond sera en gris teint "900" 2) notre texte sera blanc, 3) que notre surface sera arrondie et 4) possédera un ombrage.

Installation et configuration :
Cela se fait avec NPM et le terminal de VScode ici.
npm init -y (package.json créé immédiatement)
npm install tailwindcss postcss autoprefixer (ou : npm i tailwindcss)
npx tailwindcss init (fichier de configuration ajouté : tailwind.config.js)
npm run build (compilation - ou build-css, ou dev selon le nom donné)
npx tailwindcss init --full (sert à mettre la totalité de tailwind et faire des fichiers personnalisables)

Flexbox s'utilise dans la balise class="" HTML, avec "flex justify-end" par exemple.
Les prefix s'utilisent pour remplacer les mediaquery, ils ressemblent à ceux de Bootstrap avec 'sm' pour small ou 'lg' pour large.

Fonctionnement :
Il est bon avec tailwind de le faire se convertir dans notre fichier source en CSS natif.

Create a CSS file if you don’t already have one, and use the @tailwind directive to inject Tailwind’s base, components, and utilities styles.
https://tailwindcss.com/docs/installation

npm run build-css

Projet pratique :
Site de restaurants avec propositions de plats, boutons et détails.
Bases HTML et CSS (en ne pratiquant aucun CSS pur)


*/
