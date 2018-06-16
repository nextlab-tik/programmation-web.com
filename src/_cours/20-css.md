---
title: Introduction CSS
chapitre: CSS
permalink: /cours/css.html
---

Le langage **CSS** (*Feuille de style en cascade*, *Cascading Style Sheets* en
anglais) est un langage de feuille de style qui sert à appliquer des styles sur
différents éléments dans un document HTML. Il est un langage complémentaire à
HTML qui permet de séparer la présentation d'un élément (CSS) de son contenu
(HTML).

Les versions du langage CSS
---------------------------

**CSS1**, apparu en 1996, définit essentiellement les propriétés de rendu
typographique du texte.  La spécification **CSS 2**, publiée en 1998, étend
considérablement les possibilités théoriques de CSS, avec environ 70 propriétés
supplémentaires. Suivie par une version révisée, **CSS 2.1**.

Dés la spécification **CSS 3**, le langage CSS a été développé sous la forme de modules
indépendants, dans le but que des modules "prêts" puissent être implémentés
rapidement par les navigateurs. Cet objectif a été atteint, et de nombreux
modules sont actuellement bien supportés par les navigateurs et utilisés au
quotidien (p.ex. *WebFonts*, *Media Queries*, *Flexbox*, *Backgrounds &
Borders*), alors que d'autres sont encore en développement. En plus au lieu des
versions du standard, il y aura des documents des modules stables dans chaque 3
ans (2015, 2018, ...).

<figure>
  <img src="assets/imgs/CSS_Modules_and_Snapshots-by-mdn.png" alt="Évolultion du CSS et ses modules" />
  <figcaption>Évolultion du CSS et ses modules. Par <cite><a href="https://developer.mozilla.org/" target="_blank">Mozilla Developer Network</a></cite></figcaption>
</figure>

L'année 2010, qui marque une large adoption du standard HTML5, représente une
avancée importante pour le CSS 3. C'est en 2010 que le terme "Responsive Web
Design" faisant son apparition, sous la plume d'Ethan Marcotte.

Principes de base
-----------------

Le langage CSS permet de définir des règles, qui sont exprimées sous forme de
couples `propriété: valeur`.

Les **propriétés** sont libellées à l'aide de mots-outils anglais tels que
`width` (largeur), `font-size` (taille de la police de caractères) ou
`background-color` (couleur de fond). Ces propriétés sont spécifiées dans le
standard CSS.

Les **valeurs** sont exprimées à l'aide d'unités (pixels, pourcents...), ou de
mots-clés propres au CSS. Par exemple, une couleur peut être exprimée à l'aide
des mots clés ("black", "blue", etc), de valeurs hexadécimales (p.ex. #FF0000)
ou des fonctions (p.ex. `rgb(255, 255, 255)`).

Les couples propriété-valeur constituent le "bloc de déclaration" d'une règle
CSS. S'il y en a plusieurs, on les sépare avec des points-virgule. Ces
déclarations seront appliquées à des parties du document identifiées par un
**sélecteur**.

Chaque règle CSS comporte un **sélecteur**, et un **bloc de déclaration**.

Exemple de règle CSS :

```css
h1 {
    color: red;
    text-transform: uppercase;
}
```

Dans cet exemple, nous avons :

* le **sélecteur** : `h1`
* le **bloc de déclaration**, qui contient deux déclarations : `color: red;` et
  `text-transform: uppercase;`
* la première déclaration définit une **propriété** : `color`
* avec la **valeur** : `red`
* la seconde déclaration définit la **propriété** `text-transform`
* avec la **valeur** : `uppercase`

**Résultat :** dans cette règle, on applique un style à tous les éléments `h1`
du document : la couleur du texte sera rouge (`red`), et tous les caractères
seront affichés en majuscules (`uppercase`).

Pour tester notre exemple CSS, on va utiliser la balise `<style>` qui permet de
définir notre feuille de styles directement dans notre document HTML. On va
placer cette balise dans l'en-tête de notre document. Le code complet de notre
exemple sera :

```html
{% include_absolute _cours/demos/css-h1.html %}
```

<p>
  <iframe height='160' scrolling='no' src='demos/css-h1.html'></iframe>
</p>

On peut aussi séparer notre code CSS de notre code HTML pour permettre la
réutilisation du code CSS entre de multiples pages Web, faciliter la
maintenance du code et améliorer la lisibilité. Le code CSS sera écrit dans un
fichier séparé nommé avec une extension `.css`. Pour appliquer le CSS de ce
fichier aux éléments de notre document HTML, on déclare un élément `<link>` à
l'intérieur de l'élément `<head>` comme suit :

```html
<link href="ma-feuille.css" rel="stylesheet" type="text/css" />
```

Les attributs utilisés de la balise `<link>` sont :

- **href** définit l'URL de notre fichier CSS.
- **rel** définit la relation entre le document HTML et ce fichier. Il doit
  toujours être "stylesheet" pour le fichier CSS.
- **type** définit le type MIME du fichier. Il doit toujours être "text/css"
  pour le fichier CSS.

En appliquant les changements nécessaires pour séparer notre code CSS de notre
document HTML de l'exemple précédent, le résultat sera :

```css
{% include_absolute _cours/demos/css/demo1.css %}
```

```html
{% include_absolute _cours/demos/css-h1-seperate.html %}
```

<p>
  <iframe height='160' scrolling='no' src='demos/css-h1-seperate.html'></iframe>
</p>

Autre solution **mais pas recommandée** est d'écrire la mise en page des
éléments directement dans l'attribut `style` de l'élément. Cette méthode ne
permet pas la réutilisation des mises en page entre les éléments du même
document HTML ce qui en résulte est beaucoup de duplication du code, difficulté
de maintenance et un code peu lisible. C'est pourquoi cette méthode est à
éviter. Le code de l'exemple précédent sera :

```html
{% include_absolute _cours/demos/css-h1-in-element-style.html %}
```
Pour commenter en CSS on utilise des commentaires de style de langage C `/*
*/`. Prenons par exemple le code précédent.

```css
{% include_absolute _cours/demos/css/demo1-comments.css %}
```

Pour améliorer la lisibilité du code, on utilise l'indentation qui peut être
d'une seule tabulation ou de deux ou quatre espaces. Une fois une indentation
choisie, il faut suivre la même indentation pour le reste du code. Une autre
règle à suivre est de retourner à la ligne après chaque déclaration.

Les sélecteurs CSS
------------------

Le sélecteur définit à quel élément de la page un style CSS sera appliqué. Par
exemple :

```css
h1 { color: Tomato }
```

La couleur <span style="color: Tomato">Tomato</span> sera appliquée à tous les
éléments h1 de la page.

Il est possible de grouper plusieurs sélecteurs, en les séparant par des
virgules. Exemple :

```css
h1 { color: Tomato }
h2 { color: Tomato }
h3 { color: Tomato }
```

Ces trois règles peuvent être groupées comme ceci :

```css
h1, h2, h3 { color: Tomato }
```

### Sélecteurs de base

`E`
: sélectionner tout élément de type E. Pour sélectionner tous les éléments de
type paragraphe.

```css
p {
    color: blue;
}
```

`.c`
: Séléctionner tout élément ayant la classe "c". L'utilisation des classes
permet la réutilisation des styles entre multiples élements. Un élément peut
avoir plus q'une seule classe. Pour séléctionner l'élement de classe "note" du
code HTML suivant :

```html
<p class="note">Faire attention!</p>
```

```css
.note {
    color: yellow;
}
```

`#myid`
: Sélectionner tout élément avec un ID égal à l'identificateur "myid".
Contrairement à la classe, l'identificateur est unique à un seul élément dans
le document HTML.

### Sélecteurs imbriqués

`E.warning`
: Sélectionner tout élément E ayant la classe "warning".

`E#myid`
: Sélectionner tout élément E avec un ID égal à "myid".

`E F`
: Sélectionner tout un élément F qui est contenu dans tout élément E.

`*`
: Sélectionner tous les éléments du document

`E > F`
: Sélectionner tout élément de type F qui est le fils de tout élément de type E.

`E + F`
: Sélectionner tout élément de type F qui est l'élément suivant direct de tout
élément de type E.

Les unités CSS
--------------

Il existe diverses unités de mesure disponibles en CSS. Elles peuvent être
classées en trois catégories :

- **Unités absolues:** mm (millimètres), cm (centimètres), in (pouces), pt
  (point), pc (pica)
- **Unités relatives:** %, em, ex, rem, ch, vh, vw
- **Unités dépendantes de l'interface:** px

Les unités *absolues* correspondent à ce que l'on connaît de la mise en page
"papier". Elles sont à éviter sur le Web, sauf pour les styles d’impression
(p.ex. pour spécifier les marges des pages). Comme l'indiquent les inventeurs
du CSS, Håkon Wium Lie et Bert Bos (dans *Cascading Style Sheets : Designing
for the Web*) :

- Utilisez les unités *ems* pour créer des feuilles de styles s'adaptant à
  différentes échelles.
- Utilisez les *ems* pour définir les tailles de fonte.
- Utilisez des unités relatives pour définir la longueur des éléments de mise
  en page.
- N'utilisez les longueurs absolues que si les caractéristiques
  physiques du medium de sortie sont connues.

#### Unités relatives

- **Les pourcentages** (%) : Définit une mesure en % par rapport à la taille de
  l'élément parent. Il est utile pour créer des mises en page flexibles, et
  pour définir des tailles de fonte.
- **em** : Unité typographique ancienne, correspondant historiquement à la
  largeur de la lettre "m". Par défaut, 1em est équivalent à 16px.
- **rem** : Unité relative, qui fonctionne comme le **em**, mais la taille est
  relative à la taille de fonte à la racine du document (attribuée à l'élément
  `html`).

#### Les pixels

- **Les pixels** (px) : ils ont été pendant longtemps l'unité la plus utilisée
  en Webdesign, autant pour définir des mises en page que pour les tailles de
  fontes. On préfère actuellement utiliser des em ou des pourcentages.


Les couleurs CSS
----------------

Dans le langage CSS, les couleurs peuvent être exprimées en différentes
notations :

- par leur nom
- par un code hexadecimal
- Rouge, Vert, Bleu
- RGBA et HSL

```css
color: yellow;
color: #FFFF00;
color: #FF0;
color: rgb(255, 255, 0); /*Red, Green, Blue*/
color: hsl(60, 100%, 50%); /*Hue, Saturation, Luminosity*/
```

La couleur jaune peut être définie indifféremment par les cinq variantes
ci-dessus. Le résultat sera strictement identique.

#### Par leur nom

Il existe quelques 140 couleurs qui sont définies par des mots-clés : on y
trouve des couleurs fondamentales comme
<span style="padding: 0 0.3em; background:black;color:#fff">black</span>,
<span style="padding: 0 0.3em; background:blue;color:#fff">blue</span>,
<span style="padding: 0 0.3em; background:red;color:white">red</span>,
mais aussi des teintes plus originales comme
<span style="padding: 0 0.3em; background:aquamarine;">aquamarine</span>,
<span style="padding: 0 0.3em; background:hotpink;color:white">hotpink</span>,
<span style="padding: 0 0.3em; background:tomato;color:white">tomato</span>,
<span style="padding: 0 0.3em; background:olive;color:white">olive</span>...

La liste complète peut être consultée :

* sur [Wikipédia](https://fr.wikipedia.org/wiki/Couleur_du_Web#Noms_de_couleurs_SVG_1.0)
* sur [HTMLColorCodes.com](http://htmlcolorcodes.com/)
* dans la [spécification W3C](https://www.w3.org/TR/css3-color/#svg-color)

#### Code héxadécimal

Le code hexadécimal (ou *triplet hexadécimal*) est une manière d'exprimer les
couleurs du modèle RVB (en anglais: RGB). En RVB, la valeur du rouge (R), vert
(V) et bleu (B) sont définis sur un intervalle allant de zéro à 255, ou de 00 à
FF en notation hexadécimale.

Le nombre total de couleurs possibles est de 256 * 256 * 256, càd quelques
16'777'216 teintes.

Si les caractères sont dédoublés, la triplette peut être raccourcie à trois
chiffres :

- `#0099cc` est équivalent à `#09c`
- `#00ff00` équivaut à `#0f0`
- `#666666` équivaut à `#666`, etc.

#### Rouge, Vert, Bleu

Le CSS autorise également la définition d'une couleur en notation RVB (en
anglais: RGB). Pour chacune des trois valeurs, on peut utiliser un nombre
entier allant de 0 à 255, ou un pourcentage allant de 0% à 100%.

Exemple de deux couleurs identiques :

```css
p { color: rgb(255,0,0) }
p { color: rgb(100%,0%,0%) }
```

La première valeur étant au maximum, cette couleur correspond au <span
style="padding: 0 0.3em; background:rgb(255,0,0);color:#fff">rouge le plus
intense</span>.

#### RGBA

RVB avec transparence (alpha), définie sur un intervalle allant de 0.0 à 1.0.

Exemple :

```css
p { color: rgba(255,0,0,0.5) }
```

La dernière valeur (l'opacité) étant de 0.5, il en résulte
<span style="padding: 0 0.3em; background:rgba(255,0,0,0.5);color:#fff">un rouge semi-transparent</span>.

#### Teinte, saturation, luminosité (HSL)

Une nouvelle manière de représenter les couleurs a été introduite avec le CSS3:
c'est le modèle HSL (Hue-saturation-lightness), basé sur un cercle chromatique

- **H - Hue** : la teinte (en anglais: *Hue*) correspond à une position (un
  angle) sur le cercle chromatique. Cet angle est mesuré en degrés, mais il est
  indiqué sans unité en CSS. Le point de départ du cercle (0 ou 360°)
  correspond au <span style="color:hsl(0, 100%, 50%)">rouge</span>. Les
  couleurs sont réparties sur ce cercle, le <span style="color:hsl(120, 100%,
  50%);background:#fff">vert</span> se trouvant au premier tiers (120°), le
  <span style="color:hsl(180, 100%, 50%);background:#fff">cyan</span> à
  mi-parcours (180°) et le <span style="color:hsl(240, 100%, 50%)">bleu</span>
  aux deux tiers (240°).

<figure>
  <img src="assets/imgs/hsl-model-by-coursweb.ch.png" alt="Modèle HSL" />
  <figcaption>Modèle HSL. Par <cite><a href="https://cours-web.ch/" target="_blank">cours-web.ch</a></cite></figcaption>
</figure>

La saturation et la luminosité sont exprimés en pourcentage.

- **S – saturation** : 100% correspond à la saturation maximale, à 0% on se
  situe dans les niveaux de gris.

- **L - luminosité** : 0% correspond au noir, 100% au blanc. À 50% on obtient
  la luminosité "normale".

Quelques exemples :

-----|-----:
`p { color: hsl(0, 100%, 50%) }` | <span style="padding: 0 0.3em; background:hsl(0, 100%, 50%);color:#fff">rouge</span>
`p { color: hsl(120, 100%, 25%) }` | <span style="padding: 0 0.3em; background:hsl(120, 100%, 25%);color:#fff">vert foncé</span>
`p { color: hsl(120, 100%, 50%) }` | <span style="padding: 0 0.3em; background:hsl(120, 100%, 50%);">vert standard</span>
`p { color: hsl(120, 100%, 75%) }` | <span style="padding: 0 0.3em; background:hsl(120, 100%, 75%);">vert clair</span>
`p { color: hsl(120, 100%, 90%) }` | <span style="padding: 0 0.3em; background:hsl(120, 100%, 90%);">vert très clair</span>
`p { color: hsl(120, 50%, 75%) }` | <span style="padding: 0 0.3em; background:hsl(120, 50%, 75%);">vert désaturé</span>

#### HSLA

Avec une quatrième valeur définissant l'opacité :

```css
p { color: hsla(240, 100%, 50%, 0.5) } /* semi-transparent solid blue */
p { color: hsla(30, 100%, 50%, 0.1) }  /* very transparent solid orange */
```

#### Définir la couleur du texte

Pour donner une couleur au texte en CSS, utiliser la propriété `color` :

```css
p { color: #333; }
```

#### Définir la couleur de fond

Pour donner une couleur de fond à un élément, utiliser la propriété
`background-color` :

```css
p { background-color: #C0C0C0; }
```
