---
title: Liste des balises
chapitre: HTML
permalink: /cours/liste-balises.html
---

Liste des tous les balises HTML disponibles (HTML 5.1):

Eléments de structure d'un document
-----------------------------------

`<body>`
: Définit le corps du document

`<div>`
: Définit une section dans un document

`<h1> - <h6>`
: Définit un titre, soustitre ou inter-titre (*headings*)

`<hr>`
: Définit un changement thématique dans le contenu. Généralement rendu par une ligne de séparation horizontale

`<span>`
: Définit une section dans un document


Nouveaux éléments de structure introduits avec HTML5:

`<article>`
: Définit un article (un contenu indépendant)

`<aside>`
: Définit un contenu annexe

`<header>`
: Définit l'en-tête d'un document ou d'une section

`<footer>`
: Définit le pied d'un document ou d'une section

`<main>`
: Désigne le contenu principal d'un document

`<nav>`
: Définit un menu de navigation

`<section>`
: Définit une section dans un document


Balises de texte
----------------

`<a>`
: Un hyperlien, avec l'attribut `href` indiquant la cible.

`<abbr>`
: Une abréviation ou un acronmye.

`<address>`
: Defines contact information for the author/owner of a document

`<b>`
: Du texte en gras (bold).

`<blockquote>`
: Defines a section that is quoted from another source [HTML5doc](http://html5doctor.com/cite-and-blockquote-reloaded/)

`<br>`
: Un retour de ligne simple (line break).

`<cite>`
: Defines the title of a work. [HTML5doc](http://html5doctor.com/cite-and-blockquote-reloaded/)

`<code>`
: Defines a piece of computer code

`<del>`
: Defines text that has been deleted from a document

`<em>`
: Defines emphasized text

`<i>`
: Defines a part of text in an alternate voice or mood

`<ins>`
: Defines a text that has been inserted into a document

`<mark>`
: Définit du texte mis en évidence, p.ex. un terme surligné dans les résultats d'une recherche. Balise introduite en HTML5.

`<p>`
: Defines a paragraph

`<pre>`
: Defines preformatted text

`<q>`
: Defines a short quotation [HTML5doc](http://html5doctor.com/cite-and-blockquote-reloaded/)

`<s>`
: Defines text that is no longer correct

`<samp>`
: Defines sample output from a computer program

`<small>`
: Defines smaller text

`<sub>`
: Defines subscripted text

`<sup>`
: Defines superscripted text

`<strong>`
: Defines important text

`<time>`
: Définit un élément de date ou d'heure. Peut contenir un attribut `datetime` avec la date en encodage ISO. Balise introduite avec HTML5.

`<u>`
: Defines text that should be stylistically different from normal text

`<wbr>`
: Defines a possible line-break


Listes, Définitions, etc
------------------------

Balises pour les listes:

`<ol>`
: Defines an ordered list

`<ul>`
: Defines an unordered list

`<li>`
: Defines a list item

`<details>`
: Defines additional details that the user can view or hide

`<summary>`
: Defines a visible heading for a `<details>` element


Balises pour les définitions:

`<dd>`
: Defines a description/value of a term in a description list

`<dl>`
: Defines a description list

`<dt>`
: Defines a term/name in a description list

`<dfn>`
: Represents the defining instance of a term


Balises de médias
-----------------

`<audio>`
: Déinfit un contenu sonore

`<canvas>`
: Used to draw graphics, on the fly, via scripting (usually JavaScript)

`<figure>`
: Permet de grouper une image avec la légende qui l'accompagne

`<figcaption>`
: Permet de définir une légende, à l'intérieur d'un élément `<figure>`

`<img>`
: Définit une image

`<map>`
: Defines a client-side image-map

`<picture>`
: Un contenur d'image pouvant inclure différentes variantes – [W3C](http://w3c.github.io/html/semantics-embedded-content.html#the-picture-element) / [caniuse](http://caniuse.com/#search=picture) / [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/picture)

`<source>`
: Defines multiple media resources for media elements (`<video>` and `<audio>`)

`<svg>`
: Définit une image dans le format vectoriel SVG

`<track>`
: Définit une piste de texte (sous-titre) pour un élément média (`<video>` ou `<audio>`)

`<video>`
: Définit un contenu vidéo


Formulaires, interactivité
--------------------------

`<button>`
: Defines a clickable button

`<fieldset>`
: Groups related elements in a form

`<form>`
: Defines an HTML form for user input

`<input>`
: Defines an input control

`<kbd>`
: Defines keyboard input

`<keygen>`
: Defines a key-pair generator field (for forms)

`<label>`
: Defines a label for an `<input>` element

`<legend>`
: Defines a caption for a `<fieldset>` element

`<meter>`
: Defines a scalar measurement within a known range (a gauge)

`<optgroup>`
: Defines a group of related options in a drop-down list

`<option>`
: Defines an option in a drop-down list

`<output>`
: Defines the result of a calculation

`<param>`
: Defines a parameter for an object

`<progress>`
: Indique l'état d'avancement d'un travail (barre de progression). [support](http://caniuse.com/#feat=progress) dès IE10, Safari 6.

`<select>`
: Defines a drop-down list

`<textarea>`
: Defines a multiline input control (text area)

`<var>`
: Defines a variable


Tableaux
--------

`<table>`
: Définit un tableau. [W3C](https://www.w3.org/community/webed/wiki/HTML/Elements/table),

`<tr>`
: Définit un rang horizontal

`<td>`
: Définit une cellule

`<th>`
: Defines a header cell in a table

`<caption>`
: Représente le titre d'un tableau. [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/caption)

`<colgroup>`
: Specifies a group of one or more columns in a table for formatting

`<col>`
: Specifies column properties for each column within a `<colgroup>` element

`<thead>`
: Regroupe l'en-tête d'un tableau

`<tbody>`
: Regroupe le corps d'un tableau

`<tfoot>`
: Regroupe le pied d'un tableau. [W3C](https://www.w3.org/community/webed/wiki/HTML/Elements/tfoot).


Balises récentes et expérimentales
----------------------------------

`<datalist>`
: Specifies a list of pre-defined options for input controls

`<dialog>`
: Defines a dialog box or window. Pas supporté par IE, Firefox, Safari.

`<menu>`
: Defines a list/menu of commands

`<menuitem>`
: Defines a command/menu item that the user can invoke from a popup menu

`<picture>`
: Permet de définir des images responsives.


Balises générales
-----------------

`<!--...-->`
: Définit un commentaire (code qui ne sera pas affiché)

`<!DOCTYPE>`
: Définit le type de document

`<meta>`
: Définit des métadonnes au sujet d'un document HTML

`<title>`
: Définit le titre du document

`<base>`
: Définit une base pour toutes les URL relatives du document

`<head>`
: Une section contenant des informations au sujet du document

`<html>`
: Définit la racine d'un document HTML

`<iframe>`
: Définit une *inline frame* : une fenêtre pouvant charger des contenus depuis une autre URL

`<link>`
: Définit une relation entre un document et une ressource externe (le plus souvent, des feuilles de styles)

`<noscript>`
: Définit un contenu alternatif pour les usagers ne pouvant pas exécuter des scripts

`<script>`
: Définit un script qui sera exéctué par le navigateur

`<style>`
: Définit des styles pour le document



Autres balises
--------------

`<area>`
: Defines an area inside an image-map

`<embed>`
: Defines a container for an external (non-HTML) application

`<bdi>`
: Isolates a part of text that might be formatted in a different direction from other text outside it

`<bdo>`
: Overrides the current text direction

`<object>`
: Defines an embedded object

`<ruby>`
: Defines a ruby annotation (for East Asian typography)

`<rp>`
: Defines what to show in browsers that do not support ruby annotations

`<rt>`
: Defines an explanation/pronunciation of characters (for East Asian typography)


Balises obsolètes
-----------------

Balises qui ne sont plus supportées en HTML5:

`<acronym>`
: Use `<abbr>` instead. Defines an acronym.

`<applet>`
: Use `<embed>` or `<object>` instead. Defines an embedded applet (application Java).

`<basefont>`
: Use CSS instead. Specifies a default color, size, and font for all text in a document.

`<big>`
: Use CSS instead. Defines big text.

`<center>`
: Use CSS instead. Defines centered text.

`<dir>`
: Use `<ul>` instead. Defines a directory list.

`<font>`
: Use CSS instead. Defines font, color, and size for text.

`<frame>`
: Defines a window (a frame) in a frameset.

`<frameset>`
: Defines a set of frames.

`<noframes>`
: Defines an alternate content for users that do not support frames.

`<strike>`
: Use `<del>` or `<s>` instead. Defines strikethrough text.

`<tt>`
: Use CSS instead. Defines teletype text.

