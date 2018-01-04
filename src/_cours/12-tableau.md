---
title: Tableaux
chapitre: HTML5
permalink: /cours/tableaux.html
---

Une tâche commune dans le développement web est de structuré et présenter des
données en forme d'un tableau. HTML contient un ensemble des balises pour
construire des tableaux simples et des tableaux complexes et les mettre en
formes avec le CSS. Dans cet chapitre, on va introduire ces balises HTML, et le
CSS de mise en forme des tableaux sera introduire dans un autre chapitre.

Les bases du Tableau
--------------------

Pour structurer un tableau, on utilise la balise `<table>` qui est utilisé
comme un container de tous les données du tableau et qui encadre les lignes et
les colonnes. Pour présenter une ligne on utilise la balise `<tr>` (**t**able
**r**ow) qui elle même contient les balises `<td>` (**t**abular **d**ata)
représentants les colonnes du tableau. Par exemple, le code suivant présente un
tableau des personnes contenant deux lignes chacune présente un personne (son
prénom dans la première colonne et son nom dans la deuxième colonne):

```html
{% include_absolute _cours/demos/tableau-simple.html %}
```

Le tableau résultant est:

<p>
  <iframe height='70' scrolling='no' src='demos/tableau-simple.html' frameborder='no' style='width: 100%;'></iframe>
</p>

On va maintenant ajouter le titre des différentes colonnes du tableau en
utilisant la balise `<th>` (**t**able **h**eader) dans une ligne qui simplifie
l'exploitation du tableau visuellement.

```html
{% include_absolute _cours/demos/tableau-head.html %}
```

Le tableau résultant est:

<p>
  <iframe height='90' scrolling='no' src='demos/tableau-head.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Pour le reste de ce chapitre, on va utiliser l'attribue `border` de la balise
`<table>` qui ajoute une bordure entre les éléments du tableau pour les
identifier plus facilement.  Même que cette attribue est obsolète[^obsolete]
depuis HTML5 en faveur des propretés de CSS, on va l'utiliser comme solution
temporaire jusqu'à on arrive au chapitre de CSS3. Donc, en remplaçant la
première ligne du code précèdent `<table>` par `<table border="1">`, le
résultat sera:

<p>
  <iframe height='90' scrolling='no' src='demos/tableau-head-with-border.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Structure Tableau Avancée
-------------------------

Le HTML nous permettre de fusionner horizontalement les colonnes et
verticalement les lignes du tableau grâce aux attribues `colspan` et `rowspan`
respectivement de les balises `<td>` et `<th>` qui prennent comme valeur le
nombre des cellules à fusionner. Prenons comme exemple un tableau d'un mini
emploie du temps avec les séances de cours sont de durée de 2 heures tant que
les séances TP sans de durée d'une seule heure. Sans les attribues de fusions,
le tableau sera le suivant:

```html
{% include_absolute _cours/demos/table-without-colspan.html %}
```

<p>
  <iframe height='110' scrolling='no' src='demos/table-without-colspan.html' frameborder='no' style='width: 100%;'></iframe>
</p>

La solution est de fusionner les deux colonnes des séances de cours en
utilisant l'attribue `colspan`.


```html
{% include_absolute _cours/demos/table-colspan.html %}
```

<p>
  <iframe height='110' scrolling='no' src='demos/table-colspan.html' frameborder='no' style='width: 100%;'></iframe>
</p>


Le tableau support la groupement des lignes en trois sections: l'en-tête en
utilisant la balise `<thead>`, le corps en utilisant la balise `<tbody>` et le
base en utilisant la balise `<tfooer>` ce qui permet la séparation sémantique
des lignes du tableau et facilite ses mise en forme. Si ces balises n'étaient
pas utilisées, tous les lignes du tableaux sont délimité implicitement par la
balise `<tbody>`. Prenant l'exemple précèdent avec le groupement des lignes:

```html
{% include_absolute _cours/demos/tableau-thead-tfooter.html %}
```

Le tableau résultant est:

<p>
  <iframe height='120' scrolling='no' src='demos/tableau-thead-tfooter.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Pour ajouter une légende à un tableau, on utilise la balise `<caption>` après
l'ouverture de la balise `<table>` ou avant sa fermeture:

```html
{% include_absolute _cours/demos/tableau-caption.html %}
```

Le tableau résultant est:

<p>
  <iframe height='120' scrolling='no' src='demos/tableau-caption.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Remarques
---------

Anciennement, la balise `<table>` était utilisée pour mettre en forme la page
web à cause des limites de CSS et son mal support par les navigateurs.  Mais,
depuis le HTML5, il est recommandé de ne plus utiliser les tableaux pour la
mise en forme du page web mais au lieu, il faut utiliser le CSS3 par-ce-que la
balise `<table>` n'est pas sensible aux différents écrans (responsive design)
et demande une structure HTML plus complexe.

La plus part des attribues des balises de tableaux (`<table>`, `<th>`, `<tr>`,
`<td>`, ...) étaient obsolètes[^obsolete] depuis HTML5 en faveur des propretés
de CSS ou en faveur des autres balises en HTML.


[^obsolete]:
    Cette fonctionnalité n'est plus officiellement supporter par le standard.
    Et les vendeurs des navigateurs vont supprimer son support dans le future
    sans aucune notification préalable.
