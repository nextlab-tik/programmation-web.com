---
title: Mise en forme des formulaires
chapitre: CSS
permalink: /cours/css-formulaires.html
---

La formulaire est un élément important de l'interaction avec l'utilisateur. Une
mise en forme claire et attractive est très nécessaire pour assurer une
meilleure expérience utilisateur. Dans ce guide, on va étudier un scénario
d'une formulaire simple et les possibilité de l'améliorer.

Au cours de ce guide, on supposera que la formulaire suivante est pour le saisi
de l'identité de l'utilisateur et quelques informations d'un produit.

```html
{% include_absolute _cours/demos/formulaire-style.html %}
```

<p>
  <iframe height='360' scrolling='no' src='demos/formulaire-style.html'></iframe>
</p>

Mise en forme de fieldset
-------------------------

On commencera par la mise en forme de `<fieldset>` et la légende.

```css
{% include_absolute _cours/demos/css/formulaire-style-fieldset.css %}
```
<p>
  <iframe height='360' scrolling='no' src='demos/formulaire-style-fieldset.html'></iframe>
</p>

Mise en page du formulaire
--------------------------

Ensuite, on va mettre en page notre formulaire:
- Harmoniser les lignes grâce à la propriété `width` et `display`.
- Aérer nos formulaires en utilisant les propriétés `padding` et `margin`.
- Mettre en forme les étiquettes en utilisant `text-align` et `font-weight`.
- Mettre en forme la liste des boutons radios en utilisant `list-style`.
- Mettre 5 lignes visible dans le champ de texte multi-ligne `<textarea>` en
  utilisant `height` avec l'unité `rem` et déactiver la possibilité de changer
  le dimension du champ par souris en utilisant la propriété `resize`.
- Fixer la problème d'alignement vertical de la liste des choix et de champ de
  texte multi-ligne en utilisant la propriété `vertical-align`.

```css
{% include_absolute _cours/demos/css/formulaire-style-layout.css %}
```
<p>
  <iframe height='400' scrolling='no' src='demos/formulaire-style-layout.html'></iframe>
</p>

Bouton d'envoi
--------------

Comme bonus, on va changer le mise en forme du bouton d'envoi.

Le bouton sera aligner à droite en utilisant la propriété `float`.
L'apparence de bouton sera changer en utilisant les propriétés du fond, de la
bordure et du texte.

On va utilisé le pseudo classe `:hover` pour changer le couleur du fond
progressivement en utilisant la propriété `transition`.

Pour ajouter une ombre autour le bouton, on a utilise la propriété `box-shadow`
qui accepte une liste des définitions d'ombres séparées par des virgules
chacune contient
les
coordonnées de décalage de l'ombre en axe x et axe y, le rayon de flou
(optionnel), le rayon d'étalement (optionnel) et finalement le couleur
(optionnel).

```css
{% include_absolute _cours/demos/css/formulaire-style-submit.css %}
```
<p>
  <iframe height='420' scrolling='no' src='demos/formulaire-style-submit.html'></iframe>
</p>

Validation de contenu
---------------------

CSS3 fourni des ensembles des pseudo classes relié au état de validation des
éléments de la formulaire.

- `:required` : Permet de sélectionner les éléments qui sont mis obligatoires.
- `:valid` : Permet de sélectionner les éléments qui sont valides.
- `:invalid` : Permet de sélectionner les éléments qui ne sont pas valides.

```css
{% include_absolute _cours/demos/css/formulaire-style-validation.css %}
```
<p>
  <iframe height='420' scrolling='no' src='demos/formulaire-style-validation.html'></iframe>
</p>
