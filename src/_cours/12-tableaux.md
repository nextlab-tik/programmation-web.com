---
title: Tableaux
chapitre: HTML
permalink: /cours/tableaux.html
---

Une tâche commune dans le développement Web est de structurer et de présenter
des données sous forme de tableau. HTML contient un ensemble de balises pour
construire des tableaux simples et des tableaux complexes et les mettre en
formes avec le CSS. Dans ce chapitre, nous allons introduire ces balises HTML.
Leur présentation par CSS, sera introduite dans le chapitre CSS.

Les bases du Tableau
--------------------

Pour structurer un tableau, on utilise la balise `<table>` qui est utilisé
comme un conteneur (_container_) de toutes les données du tableau et qui
encadre les lignes et les colonnes. Pour présenter une ligne on utilise la
balise `<tr>` (**t**able **r**ow) qui elle même contient les balises `<td>`
(**t**abular **d**ata) représentants les colonnes du tableau. Par exemple, le
code suivant présente un tableau de personnes contenant deux lignes chacune
présente une personne (son prénom dans la première colonne et son nom dans la
deuxième colonne) :

```html
{% include_relative demos/tableau-simple.html %}
```

Le tableau résultant est:

<p>
  <iframe height='70' scrolling='no' src='demos/tableau-simple.html'></iframe>
</p>

On va maintenant ajouter le titre des différentes colonnes du tableau en
utilisant la balise `<th>` (**t**able **h**eader) dans une ligne qui simplifie
l'exploitation du tableau visuellement.

```html
{% include_relative demos/tableau-head.html %}
```

Le tableau résultant est:

<p>
  <iframe height='90' scrolling='no' src='demos/tableau-head.html'></iframe>
</p>

Pour le reste de ce chapitre, on va utiliser l'attribut `border` de la balise
`<table>` qui ajoute une bordure entre les éléments du tableau pour les
identifier plus facilement.  Même que cet attribut est obsolète[^obsolete]
depuis HTML5 en faveur des propriétés de CSS, on va l'utiliser comme solution
temporaire jusqu'à ce qu'on arrive au chapitre de CSS3. Donc, en remplaçant la
première ligne du code précédent `<table>` par `<table border="1">`, le
résultat sera:

<p>
  <iframe height='90' scrolling='no' src='demos/tableau-head-with-border.html'></iframe>
</p>

Structure Tableau Avancée
-------------------------

Le HTML nous permet de fusionner horizontalement les colonnes et verticalement
les lignes d'un tableau grâce aux attributs `colspan` et `rowspan`
respectivement des balises `<td>` et `<th>` qui prennent comme valeur le nombre
des cellules à fusionner. Prenons comme exemple un tableau d'un mini emploie du
temps avec les séances de cours sont de durée de 2 heures tantdis que les
séances de TP sont de durée d'une heure. Sans les attributs de fusions, le
tableau sera le suivant:

```html
{% include_relative demos/table-without-colspan.html %}
```

<p>
  <iframe height='110' scrolling='no' src='demos/table-without-colspan.html'></iframe>
</p>

La solution est de fusionner les deux colonnes des séances de cours en
utilisant l'attribut `colspan`.


```html
{% include_relative demos/table-colspan.html %}
```

<p>
  <iframe height='110' scrolling='no' src='demos/table-colspan.html'></iframe>
</p>


Le tableau supporte le groupement des lignes en trois sections: l'en-tête en
utilisant la balise `<thead>`, le corps en utilisant la balise `<tbody>` et le
pied en utilisant la balise `<tfooer>` ce qui permet la séparation sémantique
des lignes du tableau et facilite ses mises en forme. Si ces balises n'étaient
pas utilisées, toutes les lignes du tableau sont délimitées implicitement par
la balise `<tbody>`. Prenons l'exemple précédent avec le groupement des lignes
:

```html
{% include_relative demos/tableau-thead-tfooter.html %}
```

Le tableau résultant est:

<p>
  <iframe height='120' scrolling='no' src='demos/tableau-thead-tfooter.html'></iframe>
</p>

Pour ajouter un titre (une légende) à un tableau, on utilise la balise
`<caption>` après l'ouverture de la balise `<table>` ou avant sa fermeture:

```html
{% include_relative demos/tableau-caption.html %}
```

Le tableau résultant est:

<p>
  <iframe height='120' scrolling='no' src='demos/tableau-caption.html'></iframe>
</p>

Remarques
---------

Anciennement, la balise `<table>` était utilisée pour mettre en forme la page
Web à cause des limites de CSS et son mal support par les navigateurs. Mais,
depuis le HTML5, il est recommandé de ne plus utiliser les tableaux pour la
mise en forme de pages Web mais plutôt, il vaut mieux utiliser le CSS3 parce
que la balise `<table>` n'est pas sensible aux différents types d'écrans (c'est
à dire n'est pas _responsive design_) et demande une structure HTML plus
complexe.

La plupart des attributs des balises de tableaux (`<table>`, `<th>`, `<tr>`,
`<td>`, ...) sont devenus obsolètes[^obsolete] depuis HTML5 en faveur des
propriétés de CSS ou en faveur des autres balises en HTML.


[^obsolete]:
    Cette fonctionnalité n'est plus officiellement supportée par le standard.
    Et les vendeurs des navigateurs vont supprimer son support dans le futur
    sans aucune notification préalable.
