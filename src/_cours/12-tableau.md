---
title: Tableaux
chapitre: HTML5
permalink: /cours/tableaux.html
---

Un tache commun dans le développement web est de structuré et présenter des
données en forme d'un tableau. HTML contient un ensemble des balises pour
construire des tableaux simples et des tableaux complexes et les mettre en
formes avec le CSS. Dans cet chapitre, on va introduire ces balises HTML, et le
CSS de mise en forme des tableaux sera introduire dans un autre chapitre.

Les bases du Tableau
--------------------

Pour structurer un tableau, on utilise la balise `<table>` qui est utilisé
comme un container de tous les données du tableau et qui encadre les lignes et
les colonnes. Pour présenter une ligne on utilise la balise `<tr>` qui elle
même contient les balises `<td>` représentants les colonnes du tableau. Par
exemple, le code suivant présente un tableau des personnes contenant deux
lignes chacune présente un personne (son prénom dans la première colonne et son
nom dans la deuxième colonne):

```html
{% include_absolute _cours/demos/tableau-simple.html %}
```

Le tableau résultant est:

<p>
  <iframe height='70' scrolling='no' src='demos/tableau-simple.html' frameborder='no' style='width: 100%;'></iframe>
</p>

On va maintenant ajouter l'en-tête du tableau en utilisant la balise `<th>`
dans une ligne:

```html
{% include_absolute _cours/demos/tableau-head.html %}
```

Le tableau résultant est:

<p>
  <iframe height='90' scrolling='no' src='demos/tableau-head.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Structure Tableau Avancée
-------------------------

Le tableau support la groupement des lignes en trois sections: l'en-tête en
utilisant la balise `<thead>`, le corps en utilisant la balise `<tbody>` et le
base en utilisant la balise `<tfooer>` ce qui permet la séparation sémantique
des lignes du tableau. Prenant l'exemple précèdent avec le groupement des
lignes:

```html
{% include_absolute _cours/demos/tableau-thead-tfooter.html %}
```

Le tableau résultant est:

<p>
  <iframe height='110' scrolling='no' src='demos/tableau-thead-tfooter.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Pour ajouter un caption à un tableau, on utilise la balise `<caption>` après
l'ouverture de la balise `<table>` ou avant sa fermeture:

```html
{% include_absolute _cours/demos/tableau-caption.html %}
```

Le tableau résultant est:

<p>
  <iframe height='120' scrolling='no' src='demos/tableau-caption.html' frameborder='no' style='width: 100%;'></iframe>
</p>

