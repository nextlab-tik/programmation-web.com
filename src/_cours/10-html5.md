---
title: HTML
chapitre: HTML5
permalink: /cours/html5.html
---

Le HTML n'est pas un langage de programmation, mais un langage de "marquage"
(_markup_ en anglais) ou bien de "balises" (_tags_ en anglais).
Il permet de structurer le contenu d'une page web et lui fournir une
signification et un but.

Les versions du langage HTML
----------------------------

Durant ses 25 années d'existence, le standard HTML a connu diverses évolutions.
La première version proposée en 1991 comportait 18 éléments. Différentes
versions du standard HTML sont publiées, jusqu'à la version <b>HTML 4.01</b> en
1999.

S'ensuit une période de stagnation, durant laquelle le groupe de travail HTML
du **W3C** (World Wide Web Consortium) focalise ses efforts sur un nouveau
langage, le **XHTML**, qui s'avère une impasse.

En 2004, un groupe de travail concurrent se forme, nommé **WHATWG** (Web
Hypertext Application Technology Working Group), rassemblant des représentants
de Apple, Mozilla et Opera. Ce groupe élabore le standard **HTML5** entre
2004-2007. En janvier 2008, la première spécification est publiée, qui est
adoptée comme référence par le groupe de travail HTML du W3C. Ce n'est qu'en
2014 que le HTML5 devient une recommandation stable du W3C. En fin 2016, le
W3C rend officielle la version **HTML 5.1**. La version suivante **HTML 5.2**
est en cours d'élaborer.

![](assets/imgs/standards-timeline-html-by-cours-web.ch.png)

Les éléments HTML
-----------------

Le vocabulaire du langage HTML se compose de quelques 120 balises qu'on
assemble autour des différentes parties du contenu pour lui fournir un sens.
Les balises qui entourent un mot ou une image peuvent former un lien
hypertexte, mettre le texte en italique, etc. Par exemple, avec la ligne de
contenu suivante:

```html
Mon chat est fâché
```

Si vous souhaitez indiquer que ce texte fait partie d'un paragraphe, on le
placera dans un élément de paragraphe (`<p>`) :

```html
<p>Mon chat est fâché</p>
```

### Anatomie d'un élément HTML

Regardons de plus près cet élément paragraphe:

![Anatomie d'un élément HTML](assets/imgs/html-tag-explication-by-mozilla-mdn.svg)

Les composants principaux de notre élément sont :

- **La balise ouvrante**: celle-ci se compose du nom de l'élément (ici "p"),
  entre deux chevrons. Cela indique le début de l'élément, où l'endroit à partir
  duquel celui-ci prend effet. Pour notre exemple, cela indique le début du
  paragraphe.
- **La balise fermante**: ici on a également des chevrons et le nom de
  l'élément, auxquels on ajoute un barre oblique avant le nom de l'élément. Cela
  indique la fin de l'élément. Pour notre exemple, cela indique la fin du
  paragraphe.
- **Le contenu**: C'est le contenu de l'élément, ici c'est simplement du texte.
- **L'élément**: Il est composé de la balise ouvrante, de la balise fermante et
  du contenu.

### Imbriquer des éléments

Vous pouvez placer des éléments au sein d'autres éléments, c'est ce qu'on
appelle l'imbrication. Par exemple, si vous souhaitez montrer que votre chat
est vraiment fâché, vous pouvez placer le mot « vraiment » dans dans un élément
`<strong>`, ce qui signifie que le mot sera mis en avant:

```html
<p>Mon chat est <strong>vraiment</strong> fâché.</p>
```

Ce qui résulte en:

<p>
  <iframe height='40' scrolling='no' src='demos/p-inside-strong.html'></iframe>
</p>

Toutefois il faut faire attention à ce que les éléments soient bien imbriqués
les uns dans les autres. Dans l'exemple précédent, on ouvre l'élément `<p>`,
puis l'élément `<strong>`. Plus loin, on ferme l'élément `<strong>` puis on
ferme l'élément `<p>`. Si on utilise le code suivant, ce sera incorrect:

```html
<p>Mon chat est <strong>vraiment fâché.</p></strong>
```

Même qui les navigateurs implémentent des différents algorithmes pour essayer
de fixer ces erreurs dans les documents HTML avant d'afficher le résultat, il
faut vérifier la structure du document parce que ces algorithmes ont des
limites et peut données des résultats différents et inutilisables.

Les éléments peuvent avoir des "attributs".

![](assets/imgs/html-tag-attributes-explication-by-mozilla-mdn.svg)

Les attributs contiennent des informations supplémentaires qui portent sur
l'élément et qu'on ne souhaite pas afficher avec le contenu. Dans cet exemple,
l'attribut `class` a comme valeur "note". Les attributs seront très utiles dans
les chapitres suivants par exemple pour définir le comportement de nos
formulaires et pour mise en forme de page Web.

Un attribut doit toujours avoir:

- un **nom** (le nom de l'attribut) qui doit séparer par un espace du nom de la
  balise ou l'attribut précédent (s'il y a des multiples attributs).
- une **valeur** encadrer par des quotes (") et séparer par un signe égal "="
  du son nom (le nom de l'attribut). Les attributs booléens ne nécessitent pas
  une valeur, un exemple d'un attribut booléen est l'attribut `checked`
  (cocher) de l'élément case à cocher pour spécifier que la case est cochée,
  cet attribut ne nécessite pas une valeur car sa présence est interprétée
  comme la valeur vrai au contraire son absence est interprété comme la valeur
  faux.

Les commentaires dans HTML sont délimités par `<!--` et `-->`. Par exemple:

```html
<!-- Un texte dans un commentaire -->
```

Les commentaires peut être dans n'importe qu'elle partie du code HTML mais pas
dans une balise (entre les chevrons de la balise). Prenons l'exemple:

```html
{% include_absolute _cours/demos/commentaire.html %}
```

Le résultat sera:

<p>
  <iframe height='80' scrolling='no' src='demos/commentaire.html'></iframe>
</p>

Le document HTML
----------------

Pour l'instant nous avons vu quelques éléments HTML de base. Pris séparément,
ils ne sont pas très utiles. Regardons comment les combiner pour créer une page
HTML complète. Nous allons repartir de l'exemple contenu dans le fichier
`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ma première page web</title>
  </head>
  <body>
    <p>Mon chat est <strong>vraiment fâché.</p></strong>
  </body>
</html>
```

Cet exemple contient :

`<!DOCTYPE html>`
: le _doctype_. Au début de HTML, dans les années 1991-1992, les doctypes étaient
utilisés pour faire référence à des ensembles de règles qu'on pouvait utiliser
pour dire qu'un document était du HTML « valide » et détecter les erreurs de
balisage. Cependant, ceux-ci ne sont plus utilisés aujourd'hui et sont juste
présents pour s'assurer que la page puisse fonctionner y compris sur les
anciens navigateurs.

`<html></html>`
: l'élément `<html>`. Cet élément encadre tout le contenu de la page. Cet élément
est parfois appelé l'élément racine.

`<head></head>`
: l'élément `<head>`. Cet élément est utilisé comme un container pour toutes les
choses qui font partie de la page HTML mais qui ne sont pas du contenu affiché.
C'est dans cet élément qu'on mettra des mots-clés, une description de la page
qui apparaîtra sur les moteurs de recherche, les liens vers les fichiers CSS à
utiliser pour la mise en forme, les déclarations des jeux de caractères
(character sets) à utiliser et ainsi de suite.

`<body></body>`
: l'élément `<body>`. Cet élément est celui qui contient tout le contenu que vous
souhaitez afficher pour qu'il soit vu par les visiteurs: cela peut être du
texte, des images, des vidéos, des jeux, etc.

`<meta charset="utf-8">`
: Cet élément définit le jeu de caractères qui devrait être utilisé pour le
document et indique que c'est utf-8. utf-8 regroupe l'ensemble des caractères
connus utilisés dans les différents langages humains. Généralement utf-8 permet
de gérer n'importe quel texte que vous pourriez utiliser sur la page. C'est
pour cette raison qu'on utilise ce jeu de caractères car il permet de couvrir
l'extrême majorité des cas.

`<title></title>`
: Cet élément définit le titre de votre page. C'est ce titre qui apparaîtra sur
l'onglet lorsque la page sera chargée. C'est également ce titre qui sera
utilisé pour décrire la page lorsque vous la placez dans vos marques-pages.

Les balises principales
-----------------------

### Baliser le texte

Dans cette section, nous verrons quelques-uns des éléments HTML de base pour
baliser le texte.

#### Les titres

Les éléments de titre permettent de définir certains textes comme des titres ou
sous-titres pour le contenu. D'une certaine façon, ceux-ci fonctionnent comme
pour un livre : on a le titre du livre (le plus important) puis les titres des
différents chapitres et parfois des sous-titres au sein de ces chapitres. HTML
contient des éléments pour 6 niveaux de titres : `<h1>`–`<h6>`. La plupart du
temps, 3-4 niveaux suffisent amplement :

```html
{% include_absolute _cours/demos/balise-h1.html %}
```

<p>
  <iframe height='220' scrolling='no' src='demos/balise-h1.html'></iframe>
</p>

Vous pouvez ajouter un titre adapté à votre page avec un de ces éléments.

#### Les paragraphes

Comme expliqué auparavant, les éléments `<p>` sont utilisés pour contenir des
paragraphes de texte. Vous les utiliserez fréquemment pour placer du texte sur
une page:

```html
{% include_absolute _cours/demos/balise-p.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-p.html'></iframe>
</p>

Un élément `<p>` placé dans un autre élément de type `<p>` sera interprété
comme définit au dehors et la paragraphe externe est terminée avant l'ouverture
de la balise de l'élément `<p>` interne.

```html
{% include_absolute _cours/demos/balise-p-inside.html %}
```

<p>
  <iframe height='100' scrolling='no' src='demos/balise-p-inside.html'></iframe>
</p>

#### Les listes

Une grande partie du contenu sur le Web est présente sous forme de listes. HTML
a donc des éléments utilisés pour représenter ces listes. Le balisage des
listes contient toujours au moins deux éléments. Les types de listes utilisés
fréquemment sont les listes ordonnées et les listes non-ordonnées :

1. **Les listes non-ordonnées** sont des listes pour lesquelles l'ordre des
   éléments n'a pas d'importance (par exemple une liste de courses). La balise
   utilisée pour ces listes est l'élément `<ul>` (**ul** signifie **u**nordered
   **l**ist qui signifie liste non-ordonnée en anglais)
2. **Les listes ordonnées** sont des listes pour lesquelles l'ordre des
   éléments est important (par exemple une recette). La balise utilisée pour
   ces listes est l'élément `<ol>` (**ol** signifie **o**rdered **l**ist qui
   signifie liste ordonnée en anglais)

Chaque élément d'une liste est balisé avec un élément `<li>`.

Par exemple, si on souhaite modifier un paragraphe en une liste :

```html
<p>Mozilla est une communauté mondiale composée de technologues, penseurs,
constructeurs qui travaillent ensemble...</p>
```

On pourrait faire :

```html
{% include_absolute _cours/demos/balise-ul.html %}
```

<p>
  <iframe height='160' scrolling='no' src='demos/balise-ul.html'></iframe>
</p>

Une lise ordonnées est similaire:

```html
{% include_absolute _cours/demos/balise-ol.html %}
```

<p>
  <iframe height='80' scrolling='no' src='demos/balise-ol.html'></iframe>
</p>

Une liste peut être interne dans une liste. On peut aussi mélanger les listes
des différentes types.

```html
{% include_absolute _cours/demos/balise-ul-ol.html %}
```

<p>
  <iframe height='140' scrolling='no' src='demos/balise-ul-ol.html'></iframe>
</p>

#### Liste des descriptions

La liste des descriptions permettre de décrire un terme. Elle est délimitée par
la balise `<dl>` (**d**escription **l**ist). On utilise la balise `<dt>`
(**d**escription **t**erm) pour spécifier le terme à définir suivi par
un balise `<dd>` (**d**escription **d**escription) pour décrire le
terme. On peut spécifier des multiple des termes par description ou multiple
description par terme.

```html
{% include_absolute _cours/demos/description-list.html %}
```

Le résultat sera:

<p>
  <iframe height='130' scrolling='no' src='demos/description-list.html'></iframe>
</p>

### Les images

Pour afficher un image, On utilise la balise `<img>`. Cet élément permet
d'intégrer une image dans la page, à l'endroit où l'élément apparaît. L'image
utilisée est définie via l'attribut `src` (pour **s**ou**rc**e) qui contient
le chemin vers le fichier de l'image.

```html
{% include_absolute _cours/demos/balise-img.html %}
```

<p>
  <iframe height='440' scrolling='no' src='demos/balise-img.html'></iframe>
</p>

Nous avons aussi utilisé l'attribut `alt` (pour **alt**ernatif) qui contient un
texte qui permet de décrire l'image et qui peut être utilisé par les
utilisateurs qui ne peuvent pas voir l'image en cas ils sont malvoyants ou en
cas quelque chose s'est mal passé et que l'image n'a pu être affichée. Par
exemple, cela peut se produire si le chemin vers l'image est incorrect.

L'image affichée dans le document HTML sera de même dimensionne que
les dimensions réels du fichier image. Les attributs `height` et `width`
permettent de modifier les dimensions d'affichage en dimensionnant l'image
par rapport à la hauteur ou la largeur spécifié en pixels ou à la hauteur et la
largeur spécifié ensemble.

Prenons l'exemple de spécifier un seul dimension, l'autre dimension sera
calculer relativement au dimension spécifié pour garder la format de l'image
origine.

```html
{% include_absolute _cours/demos/balise-img-height.html %}
```

<p>
  <iframe height='160' scrolling='no' src='demos/balise-img-height.html'></iframe>
</p>

Au contraire, si on spécifie les deux dimensions:

```html
{% include_absolute _cours/demos/balise-img-height-width.html %}
```

<p>
  <iframe height='160' scrolling='no' src='demos/balise-img-height-width.html'></iframe>
</p>

Les navigateurs supportent des multiples des formats des images. Les formats
images principales et les plus supportés sont:

- **JPEG**: format image compressé avec perte. Standardisé par JPEG (_Joint
  Photographic Experts Group_). Les extensions sont `.jpg` et `.jpeg`.
- **PNG** (_Portable Network Graphics_) format image compressé sans perte. Il
  supporte les images transparents. L'extension est `.png`.
- **GIF** (_Graphics Interchange Format_) format image compressé sans perte. Il
  support les images transparents et les animations. Les couleurs sont limités
  à 8 bits (256 couleurs). L'extension est `.gif`.
- **BMP** format image non compressé sans perte. L'extension est `.bmp`.
- **SVG** format image vectoriel standarisé par W3C. L'exntesion est `.svg`.

### Les liens

Les liens sont très importants, ce sont eux qui font que le web est une toile
sur laquelle on peut naviguer de page en page. Pour créer un lien, il suffit
d'utiliser l'élément `<a>` (le a est un raccourci pour « ancre »). Pour
transformer du texte en un lien, suivez ces étapes :

1. Choisissez un texte (ici nous travaillerons avec le texte « Manifeste
   Mozilla ».
2. Encadrez le texte dans un élément `<a>`:
```html
<a>Manifeste Mozilla</a>
```

3. Fournissez un attribut `href` (**href** correspond à **h**ypertext
   **ref**erence en anglais, ce qui signifie « référence hypertexte » en
   français) pour l'élément `<a>`, de cette façon:
```html
<a href="">Manifeste Mozilla</a>
```

4. Dans cet attribut, ajoutez le lien vers le site vers lequel vous voulez
   diriger les utilisateurs :
```html
<a href="https://www.google.com/search/">Google Search</a>
```

Les références hypertexte sont de différents types:

- **Références externes absolues**: Ces sont des URL absolues vers un
  ressource dans le Web. Ces URL doivent être composés de la partie protocole
  (`http://` ou `https://`), de la partie du nom de domaine (p.ex:
  `google.com`) ou de l'adresse IP (p.ex: `127.0.0.1`), du numéro du port TCP
  optionnel (`80` par défaut pour `http://` et 443 par défaut pour `https://`)
  et le chemin vers le ressource Web (page Web, image, ...).
```html
<a href="https://www.google.com/search/">Google Search</a>
```
  Si le ressource est dans le même site web que la page Web courante, on peut
  spécifier seulement le chemin absolue du ressource en commençant par `/`.
```html
<a href="/fr/contact.html">Contactez Nous</a>
```
- **Références externes relatifs**: Ces sont des liens relatives au page Web
  courante. Par exemple, pour référencer une page Web `contact.html` dont le
  même dossier que la page courante:
```html
<a href="contact.html">Contactez Nous</a>
<a href="./contact.html">Contactez Nous</a>
```
  De même pour référencer une page Web `acceuil.html` dans le dossier parent:
```html
<a href="../acceuil.html">Acceuil</a>
```
- **Références internes**: Ces sont des références aux éléments HTML dans le
  même document. Pour référencer un élément, on lui donne un identificateur
  unique en utilisant l'attribut `id` puis on le référence par son
  identificateur préfixé par le signe "#".

```html
<h1 id="titre">Mon titre</h1>
<a href="#titre">Allez au titre</a>
```

L'élément `<a>` n'est pas limité à référencer les ressources accessibles par le
protocole HTTP (`http://` et `https://`). Des autres protocoles sont supportés
nativement ou à travers des plugins. Ces protocoles sont principalement:
- `ftp://` (**FTP**) pour accéder au ressources dans les serveurs FTP.
- `file://` pour accéder au ressources dans le système de fichier de
  l'appareil dont le navigateur est éxecuté.
- `mailto:` permettre d'ouvrir le client email pour créer un nouveau email avec
  l'email de réception  spécifiée. La format du lien est
  `mailto:<ADRESSE_EMAIL>`. Par exemple, pour créer un lien mailto de
  destination `contact@exemple.com`:
```html
<a href="mailto:contact@exemple.com">Contactez Nous</a>
```
- `tel:` pour référencer un numéro de téléphone. Il est supporté par la
  majorité des navigateurs mobiles. La format du numéro de téléphone doit
  suivre la spécification [RFC 3966](https://tools.ietf.org/html/3966). Par
  exemple: pour contacter le numéro de téléphone tunisien 12345678 (qui est de
  préfixe international +216):
```html
<a href="tel:+21612345678">Contactez Nous</a>
```

L'élément `<a>` peut accepter l'attribut `target` pour spécifier ou sera ouvré
le lien. La valeur `_blank` permet d'ouvrir le lien dans un nouvel onglet. La
valeur par défaut `_self` permet d'ouvrir le lien dans le même onglet que la
page Web courante.

### Les balises textes en ligne

Ces balises sont utilisés pour définir la structure, le style et le sémantique
du texte. Contrairement aux éléments de structure de texte précédente de type
"bloc" comme les éléments du paragraphe et de listes, ces éléments peuvent être
contenus dans un paragraphe et ne cause pas la création d'un nouveau bloc.

#### Mise en forme de texte

Ces éléments sont initialement introduit dans les anciens versions de HTML
comme des éléments de mise en forme. Ils sont évolues en HTML5 pour présenter
des significations plus sémantiques parce que les CSS présente la solution
préférée pour la mise en forme. On va présenter les éléments principales et ses
significations physique (mise en forme) et sémantique.

L'élément `<b>` (**b**oldface) met en gras le texte. Il est pour prendre
l'attention de l'utilisateur sans aucune signification d'importance. Par
exemple, il est utilisé pour mettre en gras le nom d'un produit ou des mots
clés.

```html
{% include_absolute _cours/demos/balise-b.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-b.html'></iframe>
</p>

L'élément `<i>` (**i**talic) met en italique le texte. Il permet d'indiquer
qu'une partie de texte est différente que le reste du texte. Par exemple, il
est utilisé pour mettre en italique une texte écrit en langage étrangère ou un
terme technique.

```html
{% include_absolute _cours/demos/balise-i.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-i.html'></iframe>
</p>

L'élément `<u>` (**u**nderline) met le texte souligné. Il n'est pas une
signification sémantique exacte comme les autres éléments mais il peut être
utilisé pour indiquer par exemple un texte mal écrit.

```html
{% include_absolute _cours/demos/balise-u.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-u.html'></iframe>
</p>

L'élément `<s>` (**s**trikethrough) met le texte grevé. Il permet d'indiquer
que le texte n'est plus précis ou relié au contexte. Pour indiquer que le texte
est supprimé par l'utilisateur, on utilise l'élément `<del>` (**del**ete).

```html
{% include_absolute _cours/demos/balise-s.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-s.html'></iframe>
</p>

L'élément `<small>` met le texte à un taille de font plus petit. Il permet
d'indiquer que le texte est un commentaire ou un note comme un note de droit
d'auteur ou un note légal.

```html
{% include_absolute _cours/demos/balise-small.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-small.html'></iframe>
</p>

#### Importance Logique

Ces éléments indique un différence de niveau importance de texte dans son
contexte. Ils peuvent causer des changements de la mise en forme du texte mais
pas forcement.

L'élément `<strong>` indique que le texte est de haute importance. Par exemple,
il est utiliser pour présenter un alerte ou un message très sérieux.
Généralement, le texte sera met en gras.

```html
{% include_absolute _cours/demos/balise-strong.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-strong.html'></iframe>
</p>

L'élément `<mark>` met en évidence un texte pour indiquer son importance dans
son contexte. Par exemple, il est utilisé pour indiquer le résultat d'un
recherche ou pour indiquer que le texte est intéressent pour l'utilisateur.
Généralement, le texte aura un différent couleur du fond.

```html
{% include_absolute _cours/demos/balise-mark.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-mark.html'></iframe>
</p>

L'élément `<em>` (**em**phasis) indique que le texte est de forte accent.
Généralement, le texte sera met en italique. La combinaison de `<em>` et
`<strong>` (l'un dans l'autre) augment l'importance du texte.

```html
{% include_absolute _cours/demos/balise-em.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-em.html'></iframe>
</p>

#### Abréviation et Citation

L'élément `<abbr>` permet d'indiquer un abréviation avec son explication en
utilisant l'attribut `title` que sera affichée dans un tooltip quand le souris
est ci dessus du texte. Le mise en forme du texte diffère entre les
navigateurs.

```html
{% include_absolute _cours/demos/balise-abbr.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-abbr.html'></iframe>
</p>

L'élément `<cite>` permet de citer un objet ou un travail par nom ou URL. Par
exemple, il est utilisé pour citer un livre, un recherche, un film, une
musique, un jeu ou un site,... . Généralement, le texte est mis en italique.

```html
{% include_absolute _cours/demos/balise-cite.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-cite.html'></iframe>
</p>

L'élément `<q>` (**q**uotation) permet de coter un texte. L'attribut optionnel
`cite` référence l'URL de source de l'information. Généralement, le texte sera
délimité par deux côtes. L'élément `<blockquote>` permet de coter un bloc.

```html
{% include_absolute _cours/demos/balise-q.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-q.html'></iframe>
</p>

#### Insertion du code

L'élément `<code>` indique que le texte est un partie de code source d'un
logiciel. Le texte sera affiché en font monospace.

```html
{% include_absolute _cours/demos/balise-code.html %}
```

<p>
  <iframe height='40' scrolling='no' src='demos/balise-code.html'></iframe>
</p>

La combinaison de l'élément `<code>` avec l'élément `<pre>` permet d'insérer
un bloc de code source en gardant les espaces et les retourne la ligne.

```html
{% include_absolute _cours/demos/balise-pre-code.html %}
```

<p>
  <iframe height='80' scrolling='no' src='demos/balise-pre-code.html'></iframe>
</p>

HTML définit un ensemble d'autres éléments permettant de présenter des
fragments de texte comme des variables en utilisant `<var>`, des textes saisi
par l'utilisateur au programme ou un ensemble des commandes en utilisant
`<kbd>`, le texte générer par un programme en utilisant `<samp>`.

### Les balises universels

Le HTML définit deux éléments universels qui sont général qui n'ont aucune
signification sémantique ou physique (aucune mise en forme prédéfinie). Ces
deux éléments sont:

- `<span>`: C'est l'élément en ligne (de contenu phrasé); C'est à dire qui il
  peut être contenu dans un paragraphe et qu'il ne cause pas la création d'un
  nouveau bloc. La mise en forme de cet élément est fait par le CSS à travers
  la définition d'un identificateur unique (l'attribut `id`) ou l'ensemble des
  classe où il appartient (l'attribut `class`).
- `<div>`: C'est l'élément bloc; C'est à dire qu'il occupe toute la largeur à
  disposition et crée une cassure de la ligne visuelle avant et après lui.
  Aussi, la mise en forme de cet élément est à travers l'attribut `id` ou
  l'attribut `class`.

Un exemple de l'élément `<span>`:

```html
{% include_absolute _cours/demos/balise-span.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/balise-span.html'></iframe>
</p>

Un exemple de l'élément `<div>`:
```html
{% include_absolute _cours/demos/balise-div.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/balise-div.html'></iframe>
</p>

Balises structurantes
---------------------

HTML5 a ajouté un ensembles des balises dont un ensemble des balises
structurantes qui permettre de construire un document HTML plus sémantique et
ils sont préférés à utiliser au lien de `<div>` quand possible. Ces balises
n'ont pas un effet visuel dans le document, c'est le rôle du CSS.  Les
nouvelles balises structurantes du HTML5:

header
: Section d'introduction d'un article, d'une autre section ou du document
entier (en-tête de page).

section
: Section générique regroupant un même sujet, une même fonctionnalité, de
préférence avec un en-tête, ou bien section d'application web.

article
: Section de contenu indépendante, pouvant être extraite individuellement du
document ou syndiquée (flux RSS ou équivalent), sans pénaliser sa
compréhension.

nav
: Section possédant des liens de navigation principaux (au sein du document ou
vers d'autres pages).

aside
: Section dont le contenu est un complément par rapport à ce qui l'entoure, qui
n'est pas forcément en lien direct avec le contenu mais qui peut apporter des
informations supplémentaires.

footer
: Section de conclusion d'une section ou d'un article, voire du document entier
(pied de page).
