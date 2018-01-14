---
title: Style de text
chapitre: CSS3
permalink: /cours/style-text.html
---

Taille de texte
---------------

Pour changer la taille d'un texte, on utiliser la propriété `font-size`. Les
valeurs acceptés par cette propriété peuvent être:

- **En pixels**: détermine la hauteur en pixels de votre texte. Par exemple: `14px`, `16px`...

```css
p {
    font-size: 14px;
}
h1 {
    font-size: 24px;
}
```

- **En pourcentage**: spécifier la taille du texte relativement au taille
normal. C'est à dire: 100% est le taille normale.

```css
h2 {
    font-size: 160%
}
h3 {
    font-size: 140%;
}
```

- **En mot clés**: Les mots sont: xx-small, x-smal, smal, medium, large,
x-large, xx-large.

```css
h1 {
    font-size: xx-large;
}
```

- **En em**: spécifie la largeur de la lettre "M" avec la police utilisée.

```css
dt {
    font-size: 1.2em;
}
```

- **En rem**: rem est beaucoup plus facile à utiliser comme unité qu'em car la
taille du texte dépend de la taille initiale du texte, au lieu de dépendre de
l'héritage d'un quelconque élément parent.

Polices
-------

`font-family` définit en effet une liste de polices dans lesquelles votre texte
peut apparaître. La valeur de cette propriété est une liste de polices séparées
par des virgules. Si le navigateur ne peut pas trouver la première police de la
liste, il passe alors à la suivante et l'applique au texte concerné. Si aucune
police de la liste ne fonctionne, alors le navigateur utilise sa propre police
par défaut. Ce peut-être serif, sans-serif ou monospace.

```css
p {
    font-family: Helvetica, Arial, sans-serif;
}

h1 {
    font-family: "Times New Roman", Times, serif;
}
```

Epaisseur du texte
------------------

La propriété `font-weight` définit l'épaisseur des caractères, généralement à
l'aide des valeurs normal ou bold. Voici un exemple :

```css
strong {
    font-weight: bold;
}
```

Les valeurs peuvent être des nombres de 100, 200 jusqu'à 900 dont 400 est un
font d'épaisseur normal, 200 est la plus fine et 900 est la plus épaisse. Ou
des mots clés absolues ("normal" pour 400, "bold" pour 700).  Ou des mots clés
relatives à l'élément parent ("lighter" pour plus fine, "bolder" pour plus
épaisse).  Quelques fonts ne supportent que les épaisseurs "normal" et "bold".

Style du font
-------------

La propriété `font-style` détermine si le texte doit être affiché normalement,
en italique ou en oblique (penché) respectivement grâce à "normal", "italic",
et "oblique" :

```css
i {
    font-style: italic;
}
```

Alignement du texte
-------------------

La propriété text-align contrôle l'alignement du texte, en définissant
l'alignement à gauche, à droite, ou centré ou justifié ("left", "right",
"center", ou "justify"):

```css
h1 {
    text-align: center;
}
.signature {
    text-align: right;
}
```

Majuscule
---------

La propriété `text-transform` modifie la casse du texte (autrement dit, elle
permet d'afficher du texte en MAJUSCULES, minuscules ou en Capitales), comme le
montre cet exemple :

```css
h1 {
    text-transform: uppercase;
}
```

Les valeurs possibles sont "capitalize", "uppercase", "lowercase" ou "none".

Décoration
----------

La propriété `text-decoration` permet de faire apparaitre une ligne en dessous
("underline"), au dessus ("overline"), ou à travers ("line-through") de votre
texte. La valeur par défaut "none" supprime tout formatage. Voici, par exemple,
comment barrer un texte en CSS :

```css
del {
    text-decoration: line-through;
}
a {
    text-decoration: underline solid blue;
}
```

Cette propriété accepte optionnellement le style et la couleur de la ligne.
Les valeurs du style de la ligne sont le même que les valeurs du style de
bordure.

Indentation
-----------

La propriété `text-indent` permet de gérer l'indentation du texte. Elle accepte
des valeurs absolues (en px) et des valeurs relative (en % ou em). Une valeur
négative permet de décaler le texte vers le gauche.

```css
p {
    text-indent: 6em;
}
```

Espacement
----------

La propriété `line-height` permet de gérer la distance entre les lignes. Elle
accepte des valeurs absolues (en px) ou relatives (sans unité).

La propriété `letter-spacing` permet de gérer l'espace entre les lettres tant
que la propriété `word-spacing` permet de gérer l'espace entre les mots dans un
texte.
