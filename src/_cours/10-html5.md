---
title: HTML
chapitre: HTML5
permalink: /cours/html5.html
---

Le HTML n’est pas un langage de programmation, mais un langage de “marquage”
(_markup_ en anglais). Il permet de “baliser” un document afin de décrire
sa structure.

Les balises
-----------

Le vocabulaire du langage HTML se compose de quelques 120 balises.

Quelques balises présentes depuis le début:

- La balise principale - `<html>` - racine du document se trouvant au début et
  à la fin du code.
- L’en-tête - `<head>` - contient tous les éléments de
  l’en-tête d’un document.
- Le corps - `<body>` - encadre le corps d’un fichier HTML.
- L’hyperlien - `<a>` - qui permet de pointer vers une autre
  ressource en ligne.
- Le titre - `<h1>` à `<h6>` - permettant
  d’instaurer une structure interne à un document.
- Le paragraphe - `<p>` - qui identifie un paragraphe de texte.

Un exemple de balise hyperlien:

```html
<a href="http://example.com">Un Lien</a>
```

Les versions du langage HTML
----------------------------

Durant ses 25 années d’existance, le standard HTML a connu diverses évolutions.
La première version proposée en 1991 comportait 18 éléments. Différentes
versions du standard HTML sont publiées, jusqu’à la version <b>HTML 4.01</b> en
1999.

S’ensuit une période de stagnation, durant laquelle le groupe de travail HTML
du **W3C** (World Wide Web Consortium) focalise ses efforts sur un nouveau
langage, le **XHTML**, qui s’avère une impasse.

En 2004, un groupe de travail concurrent se forme, nommé **WHATWG** (Web
Hypertext Application Technology Working Group), rassemblant des représentants
de Apple, Mozilla et Opera. Ce groupe élabore le standard **HTML5** entre
2004-2007. En janvier 2008, la première spécification est publiée, qui est
adoptée comme référence par le groupe de travail HTML du W3C.

![](assets/imgs/standards-timeline-html-by-cours-web.ch.png)

HTML5
-----

Dès 2010, les premiers éléments du HTML5 ont commencé à être supportés par les
navigateurs, et des livres sur le HTML commencent à être publiés. Un logo
officiel, conçu par l’agence hawaïenne Ocupop, est dévoilé en janvier 2011.

Ce n’est qu’en 2014 que le HTML5 devient une recommandation stable du W3C,
alors que ses fonctionnalités sont implémentées depuis longtemps dans les
navigateurs.

En fin 2016, le W3C rend officielle la version **HTML 5.1**.

Actuellement, la spécification HTML est maintenue de manière parallèle par ces
deux groupes de travail:

- [La spécification HTML du **W3C**](https://w3c.github.io/html/)
- [La spécification HTML du **WHATWG**](https://html.spec.whatwg.org/multipage/)

Tout comme les pages HTML ou XHTML, les documents HTML5 nécessitent une
déclaration Doctype indiquant la méthode standard de rendu par le navigateur.
La décaration s’écrit “`<!DOCTYPE html>`”

Balises structurantes
---------------------

Les nouvelles balises structurantes du HTML5:

header
: Section d’introduction d’un article, d’une autre section ou du document
entier (en-tête de page).

section
: Section générique regroupant un même sujet, une même fonctionnalité, de
préférence avec un en-tête, ou bien section d’application web.

article
: Section de contenu indépendante, pouvant être extraite individuellement du
document ou syndiquée (flux RSS ou équivalent), sans pénaliser sa
compréhension.

nav
: Section possédant des liens de navigation principaux (au sein du document ou
vers d’autres pages).

aside
: Section dont le contenu est un complément par rapport à ce qui l’entoure, qui
n’est pas forcément en lien direct avec le contenu mais qui peut apporter des
informations supplémentaires.

footer
: Section de conclusion d’une section ou d’un article, voire du document entier
(pied de page).

Pourquoi on ne peut pas mettre de DIV dans un P
-----------------------------------------------

Historiquement, les éléments HTML peuvent se présenter de deux manières: sous
forme de **bloc** (“block-level” elements) ou sous forme de **ligne**
(“inline” elements).

Un élément “bloc” va toujours occuper toute la largeur à disposition,
contrairement à l’élément “ligne”, qui se limite à la place nécessaire, et
tolère des éléments voisins.

Chaque élément possède un aspect par défaut, mais il est possible d’agir dessus
avec la propriété CSS “display”. On peut ainsi modifier simplement l’aspect
d’un menu: en mode “display-bloc”, ce sera un menu vertical. En mode “inline”,
cela devient un menu horizontal.

Avec HTML5, ce mode binaire se complexifie, on se retrouve avec toute une liste
de catégories de contenu:

- **Contenu de flux (Flow content)** - correspond de près au mode
  “block-level”, et s’applique à la majorité des éléments. Notamment:
  `<div>`, `<article>`, `<blockquote>`, `<img>`, `<p>`...
- **Contenu sectionnant (Sectioning content)** - les éléments qui définissent
  des sections: `<article>`, `<aside>`, `<nav>`, `<section>`
- **Contenu de titre (Heading content)** - du contenu agissant comme en-tête:
  `<h1>`, `<h2>`, `<h3>` etc.
- **Contenu phrasé (Phrasing content)** - le texte du document, tout ce qui
  peut être contenu dans un paragraphe, notamment: `<a>`, `<span>`. Attention,
  `<a>` appartient à
  cette catégorie s’il contient seulement du contenu phrasé - sinon il devient
  Contenu de flux.
- **Contenu intégré** - `<audio>`, `<canvas>`, `<embed>`, `<iframe>`, `<img>`,
  `<math>`, `<object>`, `<svg>`, `<video>`...
- **Contenu interactif** - `<button>`, `<details>`, `<embed>`, `<iframe>`,
  `<keygen>`, `<label>`, `<select>`, et `<textarea>`.

Là où cela devient important: certains éléments ne peuvent contenir que du
“phrasing content”. C’est le cas pour les balises `<p>` ou `<h1>`.
