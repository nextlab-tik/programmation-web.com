---
title: Formulaire
chapitre: HTML
permalink: /cours/formulaires.html
---

Le HTML fournit un ensemble de balises pour construire des formulaires qui sont
les éléments de base pour développer des pages interactives où l'utilisateur
peut saisir des données, cliquer des boutons et sélectionner un ensemble de
choix. Ces données peuvent être envoyées au serveur Web ou interceptées et
utilisées par la page Web en utilisant le langage de programmation Web
JavaScript. La mise en forme des formulaires avec CSS et le traitements
dynamiques des ces formulaires avec JavaScript seront présentés dans des
sections ultérieures.

Création d'un formulaire
------------------------

Les formulaires doivent être délimités par la balise `<form>` et `</form>`.
Comme celui-ci :

```html
<form action="https://example.com/page-traitement" method="post">
</form>
```

C'est un élément conteneur définissant un formulaire. Pour spécifier la manière
dont il se comporte, on ajoute les attributs `action` et `method` :

- **`action`** : définit l'URL de la page où doivent être envoyées les données
  collectées par le formulaire.
- **`method`** : définit la méthode HTTP utilisée pour envoyer les données
  ("get" ou "post").

On ajoute ensuite les balises du formulaire. HTML5 a enrichi la liste de ces
balises pour supporter différents types de données à saisir et a amélioré
l'intégration avec le système.

Éléments d'un formulaire
-----------------------

Le HTML5 contient un nombre riche d'éléments de formulaire supportant des
multiples types de données à saisir et améliorant l'intégration avec le
système.

### Champ de texte simple

C'est l'élément le plus basique de saisie. Il permet la saisie d'une seule
ligne de texte.

```html
{% include_relative demos/form-text.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-text.html'></iframe>
</p>

### Mot de passe

Il permet la saisie d'une seule ligne de données sensible à la casse (mot de
passe). Le texte saisi n'est pas affiché mais des astérisques ou des points
seront affichés.

```html
{% include_relative demos/form-password.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-password.html'></iframe>
</p>

### Nombre

Il permet la saisie d'un nombre. On peut spécifier le nombre minimal possible
par l'attribut `min` et le maximal par `max` et le pas entre les nombres
possibles `step`

```html
{% include_relative demos/form-nombre.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-nombre.html'></iframe>
</p>

### Zone de texte

Il permet de saisir un texte de plusieurs lignes. On peut changer sa hauteur et
sa largeur en nombre des caractères.

```html
{% include_relative demos/form-textarea.html %}
```
<p>
  <iframe height='70' scrolling='no' src='demos/form-textarea.html'></iframe>
</p>

### Étiquette / label

La balise `<label>` permet de décrire le champ à saisir. On utilise l'attribut
`for` pour spécifier l'identificateur de l'élément correspondant.

```html
{% include_relative demos/form-label.html %}
```
<p>
  <iframe height='50' scrolling='no' src='demos/form-label.html'></iframe>
</p>

### Case à cocher

Elle permet de sélectionner de multiple choix dans une liste proposée (soit
zéro ou un ou multiple choix). Les choix doivent appartenir au même groupe en
leur donnant le même nom (même valeur de l'attribut `name`) mais chaque choix
doit avoir une valeur différente de l'attribut `value`.

```html
{% include_relative demos/form-checkbox.html %}
```
<p>
  <iframe height='120' scrolling='no' src='demos/form-checkbox.html'></iframe>
</p>

### Groupe radio

Il permet de sélectionner un seul choix dans une liste proposée. Les choix qui
sont les boutons radios doivent appartenir au même groupe en leur donnant le
même nom (même valeur de l'attribut `name`) mais chaque choix (chaque bouton
radio de même groupe) doit avoir une valeur différente de l'attribut `value`.

```html
{% include_relative demos/form-radio.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-radio.html'></iframe>
</p>

### Bouton d'envoi

Il permet l'envoi des données saisies à l'URL spécifié dans l'attribut `action`
du formulaire en utilisant la méthode HTTP spécifiée dans l'attribut `method`
du formulaire. La création du bouton d'envoi peut être à travers un élément
`<input>` de type `submit` ou d'un élément `<button>` qui est par défaut de
type `submit`.

```html
{% include_relative demos/form-submit.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-submit.html'></iframe>
</p>

### Bouton de réinitialisation

Il permet la réinitialisation des champs du formulaire. La création du bouton
de réinitialisation peut être à travers un élément `<input>` de type `reset` ou
d'un élément `<button>` de type `reset`.

```html
{% include_relative demos/form-reset.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-reset.html'></iframe>
</p>

### Liste à choix multiple

Il permet de sélectionner un seul (ou plusieurs) choix dans une liste d’options
déroulante. Les choix sont des balises `<option>` avec différentes valeurs de
l'attribut `value`. Elles sont toutes regroupées dans une balise `<select>`.
L'attribut `multiple` permet la sélection de multiples choix dans une liste non
déroulante.

```html
{% include_relative demos/form-select.html %}
```
<p>
  <iframe height='140' scrolling='no' src='demos/form-select.html'></iframe>
</p>

### Fichier

Il permet de sélectionner un fichier depuis l'appareil de l'utilisateur pour le
télécharger (_uploader_) vers le serveur. L'attribut `enctype` du formulaire
doit être égal à "multipart/form-data" pour que le formulaire peut uploader le
fichier.  L'attribut `multiple` permet la sélection de fichier multiples.
L'attribut `accept` peut être utilisé pour définir les types de fichier que le
contrôle permet de sélectionner sous la forme d'une liste d'extensions de
fichier ou de types MIME séparés par des virgules.

```html
{% include_relative demos/form-file.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-file.html'></iframe>
</p>

### Dates / Temps

Cette classe de type permet de saisir une date, un horaire ou les deux en
utilisant respectivement les types `date`, `time`, `datetime-local` sans fuseau
horaire. En plus, il permet de saisir une semaine d'une année et un mois d'une
année en utilisant le type `week` et `month` respectivement. Le navigateur
utilisera une interface pour améliorer l'expérience utilisateur. On peut
spécifier la valeur minimale et la valeur maximale et le pas pour ces champs en
utilisant respectivement les attributs `min`, `max` et `step`.

```html
{% include_relative demos/form-date-time.html %}
```
<p>
  <iframe height='200' scrolling='no' src='demos/form-date-time.html'></iframe>
</p>

<aside>
<b>Noté bien:</b>
Le support des champs de type <code>datetime-local</code>, <code>week</code>
et <code>month</code> ne sont pas encore supporté par la version bureautique
du Firefox et Safari.
</aside>


### Couleur

Il permet la sélection d'une couleur en utilisant un sélecteur des couleurs.

```html
{% include_relative demos/form-color.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-color.html'></iframe>
</p>

### Zone de recherche

Permet de saisir une seul ligne du texte. La différence entre ce type et le
type `texte` est qu'il peut avoir une mise en forme différente qui dépend du
navigateur utilisé.

```html
{% include_relative demos/form-search.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-search.html'></iframe>
</p>

### Champ email

Il permet la saisie d'une ou de plusieurs adresses électroniques (email) qui
sera/seront validée(s) par le navigateur. Le clavier tactile du smartphone sera
optimisé pour la saisie des email. L'attribut `multiple` permet le saisir de
multiple emails séparés par des virgules.

```html
{% include_relative demos/form-email.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-email.html'></iframe>
</p>

### Champ URL

Il permet la saisie d'un URL absolu qui sera validé par le navigateur. Le
clavier tactile du smartphone sera optimisé pour la saisie des URL.

```html
{% include_relative demos/form-url.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-url.html'></iframe>
</p>

### Champ Téléphone

Il permet la saisie d'un numéro de téléphone. Il ne sera pas validé par le
navigateur par ce que leurs formats varient beaucoup entre les pays. Le clavier
tactile du smartphone sera optimisé pour leur saisie.

```html
{% include_relative demos/form-tel.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-tel.html'></iframe>
</p>

Les attributs du formulaire
----------------------------

### name

Définir le nom de l'élément du formulaire qui sera utilisé lors de l'envoi des
données saisies au serveur qui peut les manipuler correctement. Cet attribut
est obligatoire à tous les champs de saisie dont les valeurs seront envoyées au
serveur.

### type

Cet attribut spécifie le type du champ de saisie pour les éléments `<input>` et
le type du bouton pour l'élément `<button>`.

### value

Spécifie la valeur par défaut du champ et sera modifiée en cas de saisie.

### autocomplete

Indiquer que le champ peut avoir sa valeur par défaut complétée automatiquement
par le navigateur en utilisant les valeurs anciennement saisies. L'attribut
`autocomplete` supporte un ensemble de valeurs permettant de spécifier le type
de données à compléter, par exemple, la valeur "country-name" indique que le
navigateur peut compléter le champ par le nom du pays de l'utilisateur. La
liste complète des valeurs possible est accessible dans [Mozilla Developer
Network](https://developer.mozilla.org/en-US/docs/Temp_input#attr-autocomplete).

### autofocus

Un attribut booléen pour mettre l'élément en focus lorsque la page est chargée.
Un seul élément peut avoir le focus.

### placeholder

Spécifier le texte à afficher dans le champ en gris à moitié transparent quand
le champ est vide pour donner plus d'allusion à l'utilisateur.

```html
{% include_relative demos/form-placeholder.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-placeholder.html'></iframe>
</p>

### max, min, step

Spécifier la valeur maximale, la valeur minimale et le pas entre les valeurs
possible pour les champs numériques ou des dates et des temps.

```html
{% include_relative demos/form-min-max-step.html %}
```
<p>
  <iframe height='140' scrolling='no' src='demos/form-min-max-step.html'></iframe>
</p>

### maxlength, minlength

Spécifier la longueur maximale et la longueur minimale du texte saisi pour les
champs textuels.

```html
{% include_relative demos/form-minlength-maxlength.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-minlength-maxlength.html'></iframe>
</p>

### checked, selected

Deux attributs booléens: pour spécifier les choix sélectionnés par défaut dans
une liste de cases à cocher ou dans une liste de choix sélectionné, dans une liste de boutons
radios en utilisant l'attribut `checked` et pour spécifier le(s) choix
sélectionné(s) par défaut dans une liste d'options en utilisant l'attribut
`selected`.

```html
{% include_relative demos/form-checked.html %}
```
<p>
  <iframe height='160' scrolling='no' src='demos/form-checked.html'></iframe>
</p>

```html
{% include_relative demos/form-selected.html %}
```
<p>
  <iframe height='140' scrolling='no' src='demos/form-selected.html'></iframe>
</p>

### required

Indique que la saisie des données (avec validation si supportée) dans le champ
est obligatoire avant l'envoi des données. Dans le cas des boutons radios ou
d'une liste de choix, l'attribut booléen indique que, un des choix doit être
coché/sélectionné. Dans le cas de cases à cocher, il indique que ce choix doit
être coché. Dans un élément de type fichier, il indique qu'un fichier doit être
sélectionné.

```html
{% include_relative demos/form-required.html %}
```
<p>
  <iframe height='280' scrolling='no' src='demos/form-required.html'></iframe>
</p>

### pattern

Spécifier l'expression régulière des valeurs valides à saisir dans les champs
textuels. Dans le cas d'un champ d'email ou d'URL, l'attribut est appliqué
seulement si l'email ou l'URL est déjà de format valide.

Dans le premier exemple, on va limiter le texte saisi seulement à des chiffres
hexadécimaux. On va utiliser une expression régulière qui accepte seulement des
chiffres décimaux ('0'...'9') et les lettres 'A' à 'F' en minuscule et en
majuscule.

```html
{% include_relative demos/form-text-hexadecimal.html %}
```
<p>
  <iframe height='140' scrolling='no' src='demos/form-text-hexadecimal.html'></iframe>
</p>

Dans le deuxième exemple, on veut limiter les emails saisis aux emails du
Google Mail (gmail) seulement. On a besoin donc d'une expression régulière qui
soit valide si le nom du domaine de l'email est "gmail.com", nous n'avons pas
besoin de valider le format d'email (le contenu saisi avant '@') car le format
est validé avant la validation avec le pattern.

```html
{% include_relative demos/form-email-pattern.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-email-pattern.html'></iframe>
</p>


### disabled, readonly

Attributs booléens dont `disabled` spécifie que l'élément ne doit pas réagir à
toutes les intéractions d'utilisateur (clic, sélection, ...) et ne doit pas
être envoyé au serveur. Tantdis que `readonly` spécifie que la valeur de
l'élément ne doit pas être modifiée par l'utilisateur mais son contenu doit
être envoyé au serveur.

```html
{% include_relative demos/form-disabled-vs-readonly.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-disabled-vs-readonly.html'></iframe>
</p>

Application
-----------

### Premier formulaire

On va créer un formulaire simple de contact qui permet de saisir le nom et le
prénom, l'email, le téléphone et le message. Il ne contient que quatre champs
de texte, chacun ayant un libellé. Le premier est un champ texte pour la saisie
du nom et prénom, le deuxième est un champ texte qui n'accepte qu'une adresse
email valide, le troisième est un champ texte pour la saisie d'un numéro de
téléphone et finalement un champ de type texte de plusieurs lignes pour la
saisie du message de contact.

```html
{% include_relative demos/form-contact.html %}
```
<p>
  <iframe height='300' scrolling='no' src='demos/form-contact.html'></iframe>
</p>

L'utilisation de la balise `<p>` ici est juste pour structurer notre code et
séparer visuellement les différents champs sans besoin de CSS. Chaque champ est
accompagné d'une étiquette (veuillez noter la balise `<label>`). Pour faire la
relation logique entre le champ et son étiquette, on utilise l'attribut `for`
de l'étiquette pour référencer l'identificateur du champ (l'attribut `id`). Un
des avantages de lier l'étiquette à son élément correspondant est de permettre
à l'utilisateur de cliquer sur l'étiquette pour activer le champ correspondant.

Les trois premiers champs sont des éléments `<input>` dont on a utilisé
l'attribut `type` pour spécifier le type de données à saisir. Le HTML5 supporte
de différents types :

- le type `text` permet de saisir une seule ligne de texte (nom et prénom
  dans notre cas) sans contrôle ni validation,
- le type `email` permet de saisir une adresse email qui doit forcément être
  une adresse électronique valide,
- le type `tel` permet la saisie d'un numéro de téléphone malgré il n'y a pas
  contrôle de numéros de téléphone car ils ne sont pas "standard international",
  L'utilisation du champ de type `tel` améliore l'intégration avec les
  téléphones en affichant un clavier virtuel adapté à la saisie des numéros de
  téléphone (aussi pour le cas de champ de type `email`).
- Le quatrième élément est un champ de texte de plusieurs lignes, on peut
  dimensionner ce champ en nombre de caractères visibles par ligne en utilisant
  l'attribut `cols` et le nombre de lignes visibles en utilisant l'attribut
  `rows`.

Les boutons sont des éléments `<input>`. Le premier bouton avec le type
`submit` pour spécifier que ce bouton doit envoyer les données saisies à notre
serveur. Le deuxième bouton est un autre élément de type `reset` pour spécifier
que ce bouton doit réinitialiser les champs de notre formulaire.  Pour changer
le contenu de ces boutons, on utilise l'attribut `value`.

### Deuxième formulaire

Donc, on va créer un nouveau formulaire utile et fonctionnel qui permettra de
chercher un terme dans le moteur de recherche Google. Le moteur de recherche
Google attend de passer le terme à rechercher avec le nom `q` (query) à
<https://www.google.com/search> en utilisant la méthode "get".

```html
{% include_relative demos/form-google-search.html %}
```
<p>
  <iframe height='60' scrolling='no' src='demos/form-google-search.html'></iframe>
</p>

Pour le champ texte de saisie du terme, on a utilisé un élément `<input>` de
type `search`. C'est un élément équivalent au champ de type `text` mais qui
peut avoir une différente mise en forme qui dépend du navigateur utilisé. On a nommé
ce champ `q` en utilisant l'attribut `name` puisque le moteur de recherche Google
attend le terme à chercher passé avec le nom `q`. Deux nouveaux attributs
utilisés dans cet élément sont `placeholder` qui permet de définir le texte
à afficher en gris à moitié transparent dans le champ s'il est vide et qui
peut être utilisé au lieu ou avec l'étiquette. L'autre attribut est `required`
qui indique que ce champ est obligatoire à saisir avant l'envoi des données au
serveur.

On a aussi utilisé l'élément `<button>` au lieu du `<input type="submit" />`.
Ils ont presque le même rôle. En effet, l'élément `<button>` est plus
flexible et supporte la mise en forme de son contenu tandis que
`<input type="submit" />` ne peut accepter qu'un texte simple dans l'attribut
`value` sans des balises de mise en forme.

Remarque
--------

Pendant la conception de votre formulaire, il est important de garder la
quantité de données à saisir par l'utilisateur le minimum possible,
parce que par expérience, plus que vous demandez
de données, plus vous risquez que l'utilisateur s'en aille. De plus, de point
de vue de la sécurité et de la confidentialité, plus que vous stockez des
données à propos de vos utilisateurs dans vos serveurs plus que vous augmentez
le dommage en cas d'une faille de sécurité et fuite des données personnelles de
vos utilisateurs.
