---
title: Référencement
chapitre: Référencement
permalink: /cours/referencement.html
---

Le référencement est l'ensemble des techniques qui permettent d'inscrire un
site dans les moteurs de recherche ou dans les annuaires. Le référencement est
souvent associé avec le positionnement.

Il existe deux types de référencements :

- **Le référencement naturel** consiste à optimiser les différentes pages de
  son site Web afin d'apparaître dans les « top » positions des résultats de
  moteurs de recherche.

- **Les liens sponsorisés** ou positionnement publicitaire consiste à payer
  (aux enchères, donc très coûteux) les moteurs de recherche pour obtenir un
  positionnement dans les espaces réservés à cet effet.

Terminologie
------------

L'annuaire
: il fonctionne telle une encyclopédie : les sites y sont classés par thème et
par ordre alphabétique.

Le moteur de recherche
: c'est un système automatique qui parcourt l'Internet et ajoute les sites et
les pages qu'il rencontre à sa base.

Le positionnement
: c'est le fait qu'un site donné soit en haut des résultats de recherche. Tout
site peut être référencé (dans la base des outils de recherche) mais mal
positionné (n'est pas présent dans les premiers résultats d'une recherche sur
un mot spécifique)

Importance du référencement Web
-------------------------------

Le nombre des utilisateurs du Web est des milliards d'utilisateurs dont la
plupart se basent sur les moteurs de recherche pour trouver et accéder à
l'information.

Donc, le référencement Web est une étape incontournable pour augmenter le
nombre de visiteur. Il permet de faire apparaître un site Web suite à des
requêtes ce qui assure qu'un site donné soit mieux placé que ses concurrents.

Un site Internet sans référencement dans les moteurs de recherche c'est
l'équivalent d'un véhicule sans roue. En effet, un site internet n'est qu'un
support de communication comme les autres, s'il n'est pas mis en avant (dans
les dix premiers), il restera introuvable et donc sans lecteur. Il faut aussi
savoir qu'un référencement ne se fait pas en une seule fois. Il faut surveiller
la position de son site régulièrement.

Les techniques de référencement naturelles
------------------------------------------

Il existe quelques techniques de conception de site permettant de donner plus
d'efficacité au
référencement des pages d'un site :

- un contenu original et attractif,
- un titre bien choisi,
- une URL adaptée,
- un corps de texte lisible par les moteurs,
- des balises `<meta>` décrivant précisément le contenu de la page,
- des liens hypertextes bien pensés,
- des attributs `alt` pour décrire le contenu des images.

### Le contenu de la page Web

Les moteurs de recherche et les annuaires cherchent avant tout à fournir un
service de qualité à leurs utilisateurs en leur donnant les résultats les plus
pertinents en fonction de leur recherche ainsi il est indispensable de
s'attacher à créer un contenu consistant et original.

Un contenu original ne signifie pas un contenu qui n'est proposé par aucun
autre site, cela serait une mission impossible. En revanche, il est possible de
traiter un sujet et de lui ajouter une valeur et ceci en approfondissant
certains points, en l'organisant d'une manière originale et/ou en mettant en
relation différentes informations.

D'autre part, toujours dans l'objectif de fournir le meilleur contenu aux
visiteurs, les moteurs de recherche et les annuaires accordent de l'importance
à la mise à jour des informations. Le fait de mettre à jour les pages du site
permet donc d'augmenter l'indice accordé par le moteur au site.

### Le titre de la page

Il faut veiller à ce que les titres des pages Web soient pertinents et
contiennent des mots intéressants pour le référencement et qu'ils soient
différents sur chaque page. Les titres des pages Web sont utilisés par les
moteurs de recherche pour deux raisons :

– L'indexation des pages
– L'affichage de votre page dans les résultats du moteur de recherche

L'insertion d'un titre se fait comme suit :

```html
<tilte>le titre de la page</title>
```

Le titre doit décrire le plus précisément possible le contenu de la page Web et
sa longueur totale recommandée ne doit pas dépasser 60 de caractères soit 6 ou
7 mots au maximum. Le titre est d'autant plus important qu'il s'agit de
l'information qui s'affichera dans les favoris de l'internaute, ainsi que dans
son historique.

### L'URL de la page

Certains moteurs de recherche accordent une importance capitale aux mots-clés
présents dans l'URL, notamment les mots-clés présents dans le nom de domaine.
Il est donc conseillé de mettre un nom de fichier adapté, contenant un ou deux
mots-clés, pour chacun des fichiers du site plutôt que des noms du genre
"page1.html", "page2.html", etc.

### Le corps de la page

Afin de valoriser au maximum le contenu de chaque page il est nécessaire que
celui-ci soit transparent (par opposition aux contenus d'un site développé par
exemple avec flash), c'est-à-dire qu'il comporte un maximum de texte indexable
par les moteurs.

Les cadres (frames) sont fortement déconseillés car ils empêchent parfois
l'indexation du site dans de bonnes conditions.

L'utilisation des titres et des sous titres sont très important pour le
référencement. Il est intéressant aussi d'utiliser une barre de maillage ou
bien un menu qui permet de naviguer entre toutes les rubriques principales du
site : l'internaute peut ainsi naviguer facilement et savoir dans quel page il
se trouve et cela augmente aussi le maillage des pages du site ce qui est très
apprécié par les moteurs de recherche.

### Les balises `<meta>`

Les méta données sont des informations situées au sein d'un document afin de le
décrire. Les métadonnées sont ainsi utilisées par les moteurs de recherche lors
du référencement de la page Web. Grâce à ces balises non affichées, il est
ainsi possible de renseigner des informations relatives à la page où au site
afin de mieux en décrire le contenu, en particulier des informations sur le ou
les auteur(s) du document, sa limite de validité, la langue utilisée, etc.

On appelle ainsi «méta tags» (en français «méta-balises») des balises spéciales
situées dans l'en-tête du document HTML (c'est-à-dire la balise `<head>`,
située avant la balise `<body>`), afin de fournir des informations permettant
aux moteurs de recherche d'indexer la page Web.

**Exemple :**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>ISET Sfax</title>
    <meta name="keywords" content="ISET Sfax, INSTITUT SUPERIEUR ETUDES
                TECHNOLOGIQUES, TUNISIE, Sfax, STUDIES, TUNISIA">
    <meta name="description" content="Le site Web de l'institut superieur des
                                      etudes technologiques de Sfax">
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

#### Les différents types de balises méta

On distingue cinq types de méta tags :

- Les métas `name`, permettant de décrire la page HTML :

```html
<meta name="nom du tag" content="attribut" />
```

- Le méta `charset`, permettant de définir le jeu de caractères qui devrait
  être utilisé pour le document.

```html
<meta charset="utf-8" />
```

- Les métas `http-equiv`, permettant d'envoyer des informations supplémentaires
  au navigateur via le protocole HTTP. Depuis HTML5, 3 HTTP en-têtes étaient
  standardisés pour être utilisés définir dans ces balises méta
  ("Content-Security-Policy", "default-style", "refresh") :

```html
<meta http-equiv="nom du tag" content="attribut" />
```

- Les métas `itemprop`, permettant de définir des métadonnées supplémentaires
  qui ne sont pas destinées aux navigateurs Web. Ils sont par exemple utilisées
  pour définir les informations sémantiques pour le protocole
  [Schema.org](https://schema.org/) qui est utilisé par les moteurs de
  recherches comme Google Search pour explorer les sites Web.

```html
<meta itemprop="nom du propriété" content="valeur" />
```

- Les métas `property`, permettant aussi de définir des métadonnées
  supplémentaires qui ne sont pas destinés aux navigateurs Web. Ils sont par
  exemple utilisées par définir les informations sémantiques pour le protocole
  [Open Graph Protocol](https://ogp.me/) qui est utilisé par le site social
  Facebook pour explorer les pages Web

```html
<meta property="nom du propriété" content="valeur" />
```

**Exemple :**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="Un démo des meta données en HTML" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  <body>
  </body>
</html>
```

Il est possible de renseigner plusieurs métas les uns après les autres dans
l'en-tête de la page.

#### Exemples de balises méta `name`

##### author

Elle permet de présenter des informations sur l'auteur de la page

```html
<meta name="author" content="Sawssen Hariz Abid">
```

#### copyright

Elle permet de référencer des informations de droits d'auteur

```html
<meta name="copyright" content="Sawssen Hariz Abid 2017-2018, All Rights Reserved." />
```

#### description

Elle permet de décrire le contenu d'une page Web par un court texte son contenu
apparait dans les pages de résultats de certains outils de recherche. Voici
quelques conseils pour créer la balise méta `description` :

- Elle ne doit pas faire plus de 250 caractères
- Il faut créer un résumé avec des phrases et éviter les fautes d'orthographes
- Et pour la page d'accueil il faut faire une balise description décrivant le
  site dans son ensemble

```html
<meta name="description" content="Le site Web de l'institut superieur des
                                      etudes technologiques de Sfax">
```

#### generator

Elle permet de décrire le nom de logiciel utilisé pour générer la page Web si
la création de la page était automatisée.

#### keywords

Elle permet de décrire le contenu d'une page Web par une liste de mots clés.
Voici quelques conseils pour créer la balise meta keywords :

- Pour une bonne efficacité on recommande de ne mettre que 5 ou 6 mots par
  pages séparés par une virgule.
- Un mot clé peut être composé de plusieurs mots. Il est recommandé d'utiliser
  des termes simples et précis (par exemple au lieu de choisir le mot clé «
  ISET de Sfax » on choisit « ISET Sfax»)

```html
<meta name="keywords" content="ISET Sfax, INSTITUT SUPERIEUR ETUDES
    TECHNOLOGIQUES, TUNISIE, Sfax, STUDIES, TUNISIA">
```

#### robots

Elle permet de spécifier le comportement du moteur de recherche à la rencontre
de la page (indexation, suivi de liens...). Voici un tableau présentant les
différentes valeurs de l'attribut content du robots :

------|--------
Index | Le "robots" indexera la page.
Noindex | Le "robots" n'indexera pas la page.
Follow | Les liens seront indexés et suivis.
Nofollow | Les liens ne seront pas indexés, ni suivis.
All | Les liens ne seront pas indexés, ni suivis.
None | Le "robots" passe mais n'indexe pas la page ni les liens

```html
<meta name="robots" content="index, follow">
```

### Liens hypertextes

Afin de donner le maximum de visibilité à chacune des pages d'un site, il est
conseillé d'établir des liens internes entre ces pages pour permettre aux
robots indexeurs (appelés crawlers) de parcourir la totalité de l'arborescence
du site. Ainsi, il peut être intéressant de créer une page présentant
l'architecture du site et contenant des pointeurs vers chacune des pages qui le
constitue.

D'autre part, il est important d'avoir des liens externes pointant vers le site
Web car cela augmente d'une part le trafic et d'autre part la visibilité de ce
site. Certains moteurs de recherches prennent en compte le nombre et la qualité
des liens pointant vers un site pour caractériser son niveau de pertinence
(c'est le cas de Google avec son indice appelé _PageRank_).

### L'Attribut `alt` de l'image

Les images du site sont opaques pour les moteurs de recherche, c'est-à-dire
qu'ils ne sont pas capables d'en indexer le contenu, il est donc conseillé de
mettre un attribut `alt` sur chacune des images, permettant d'en décrire le
contenu.

Voici un exemple de balise `<img>` avec l'attribut `alt` :

```
<img src="images/logo.png" alt="logo de l'ISET Sfax">
```

Le fichier `robots.txt`
-----------------------

Le mot robot ou encore spider désigne un programme circulant sur le Web dédié
au traitement de documents Web en vue de leur indexation et intégration dans le
moteur de recherche. Chaque moteur de recherche est caractérisé par un robot.

### Présentation de `robots.txt`

Sur un site Web, on essaie de faire en sorte que ces pages soient indexées au
mieux par les robots des moteurs de recherche. Mais il peut également arriver
que certaines de ces pages soient confidentielles, (ou en travaux) ou en tout
cas ils ne doivent pas être diffusés largement sur les moteurs de recherche. Il
faut alors empêcher les robots de les prendre en compte.

Cela peut se faire à l'aide d'un fichier texte, appelé `robots.txt`, présent
sur la racine du site. Ce fichier va donner des indications au spider du moteur
qui va vouloir explorer le site : ce qu'il peut faire ou ne doit pas faire sur
le site.

Dès que le spider d'un moteur arrive sur un site (par exemple
`http://monsite.com/`), il va rechercher le document présent à l'adresse
`http://monsite.com/robots.txt`, avant d'effectuer la moindre indexation du
document. Si ce fichier existe, il le lit et suit les indications inscrites.
S'il ne le trouve pas, il commence son travail de lecture et d'enregistrement
de la page qu'il est venu visiter ainsi que de celles qui peuvent y être liées,
considérant que rien ne lui est interdit.

### Structure du fichier `robots.txt`

Il ne doit exister qu'un seul fichier `robots.txt` sur un site, et il doit se
trouver au niveau de la racine du site. Le nom du fichier (`robots.txt`) doit
toujours être créé en minuscules. Voici un exemple de structure d'un fichier
`robots.txt` :

```
User-agent: *
Disallow: /cgi-bin/
Disallow: /settings/
Disallow: /profile/edit.html
Disallow: /reset-password.html
```

Dans cet exemple :

- `User-agent: *` signifie que l'accès est accordé à tous les agents (tous les
  spiders), quels qu'ils soient.
- Le robot n'ira pas explorer les répertoires `/cgi-bin/` et `/settings/` du
  serveur ni les fichiers `/profile/edit.html` et `/reset-password.html`.
- Le répertoire `/settings/`, par exemple, correspond à l'adresse
  `http://monsite.com/settings/` . Chaque répertoire à exclure de l'aspiration
  du spider doit faire l'objet d'une ligne `Disallow:` spécifique. La commande
  `Disallow:` permet d'indiquer que "tout ce qui commence par" l'expression
  indiquée ne doit pas être indexé.
- `Disallow: /profile` ne permettra l'indexation ni de
  `http://monsite.com/profile/index.html`, ni de
  `http://monsite.com/profile.html`
- `Disallow: /profile/` n'indexera pas `http://monsite.com/profile/index.html`,
  mais ne s'appliquera pas à l'adresse `http://monsite.com/profile.html`.

Voici quelques commandes très classiques et importantes du fichier `robots.txt`
:

- le fichier `robots.txt` ne doit pas contenir de lignes vierges.
- L'étoile (`*`) n'est acceptée que dans le champ `User-agent`.
- Elle ne peut pas servir de joker comme par exemple : `Disallow: /entravaux/*`
- Il n'existe pas de champ correspondant à la permission, de type `Allow:`
- Les deux champs de description (`User-agent` et `Disallow`) peuvent être
  indifféremment saisis en minuscules ou en majuscules
- Les lignes qui commencent par un signe  "`#`" représentent des commentaires.
- `Disallow: /` Permet d'exclure toutes les pages du serveur (aucune aspiration
  possible).
- `Disallow:` Permet de n'exclure aucune page du serveur (aucune contrainte).
- Un fichier `robots.txt` vide ou inexistant aura une conséquence identique.
- `Disallow: /profile/index.html` : interdiction de visiter ou d'indexer la
  page `index.html` du répertoire `profile`.
- `Disallow: /download/*.zip` : interdiction de visiter ou d'indexer les
  fichiers à extension `.zip` du répertoire `download`.
- `User-Agent: googlebot` permet d'identifier un robot particulier (ici, celui
  de Google).

```
User-agent: googlebot
Disallow:
User-agent: *
Disallow: /
# Permet au spider de google de tout aspirer, mais refuse les autres robots.
```

### `sitemap.xml` et `robots.txt`

Afin d'aider les moteurs de recherche (Google, Yahoo,...) à indexer le site
Web, on précise dans le fichier `robots.txt` l'arborescente du site décrite
dans un fichier `sitemap.xml`. Le fichier `sitemap.xml` est un document XML
permettant notamment de déclarer les URL d'un site Web dans l'objectif d'une
indexation par les robots des moteurs de recherche.

On peut ajouter par exemple dans le fichier `robots.txt` l'instruction suivante
:

```
sitemap: http://monsite.com/sitemap.xml
```

Les logiciels de mesure d'audience
----------------------------------

Les logiciels de mesure d'audience peuvent fournir des informations précieuses
pour analyser et suivre les effets d'un référencement (nombre de visites,
profil des visiteurs, mots-clés ...).  En voici quelques uns :

### Google Analytics

Google Analytics n'est pas un logiciel mais un service Internet qui permet de suivre avec
précisions l'évolution du trafic d'un site Web. Son principal avantage réside
dans le fait qu'il ne nécessite aucune installation coté serveur. Il suffit
seulement d'insérer un petit code sur chacune des pages de son site.

Les statistiques proposés sont facilement exploitables et certaines
vous permettent de mesurer l'impact de votre référencement : analyse des sites
affluents (sites, moteurs de recherche), identification des mots-clés,…

### Matomo (Piwik)

Logiciel très répandu chez les hébergeurs de sites Web qui permet de visualiser
et de mesurer la fréquentation de son site Web. On trouve aussi des
statistiques (sous formes d'histogrammes et de tableaux) concernant les
référents et moteurs de recherche qui ont permis d'atteindre un site donné.

**Remarque :**

Il existe plusieurs exemples de logiciel d'aide au référencement tels que :
Submitic, The SkyFox Promotion, Yooda seeUrank, GenerMTag, GSA Auto SoftSubmit,
AdaUrl,...

Mais, il est déconseillé d'utiliser ce type de logiciels car certains moteurs
de recherche rejetteront les sites qui sont référencés à l'aide des logiciels
de référencement automatique
