---
title: Formulaire
chapitre: HTML5
permalink: /cours/formulaires.html
---

Le HTML fournir un ensembles des balises pour construire des formulaires qui
sont les éléments de base pour développer des pages interactives dont
l'utilisateur peut saisir des données, cliquer des boutons et sélectionner un
ensemble des choix. Ces données peuvent être envoyées au serveur web ou
intercepter et utiliser par la page web en utilisant JavaScript. On va
démontrer ses utilisations de base dans ce chapitre. Le mise en forme des
formulaires avec CSS et le traitements dynamiques des ces formulaires avec
JavaScript seront présentés dans des autres chapitres.

Création d'un formulaire
------------------------

Les formulaires doivent être délimités par la balise `<form>`. Comme celui-ci:

```html
<form action="https://example.com/page-traitement" method="post">
</form>
```

C'est un élément conteneur définissant un formulaire. Pour spécifier la manière
dont il se comporte, on ajoute les attributs `action` et `method`:

- **`action`**: définit l'URL de la page ou doivent être envoyées les données
  collectées par le formulaire.
- **`method`**: définit ma méthode HTTP utilisée pour envoyer les données
  ("get" ou "post").

On ajoute ensuite les balises du formulaire. HTML5 a enrichi la liste des ces
balises pour supporter multiple type de données à saisir et améliorer
l'intégration avec le système.

On va créer un formulaire simple de contact qui permet le saisir du nom et
prénom, l'email, le téléphone et le message. Il ne contient que quatre champs
de texte, chacun ayant un libellé. Le premier est un champ texte pour le saisir
du nom et prénom, le deuxième est un champ texte qui n'accepte qu'une adresse
email valide, le troisième est un champ texte pour le saisi du numéro de
téléphone et finalement un champ de texte de plusieurs lignes pour le saisir du
message de contact.

```html
{% include_absolute _cours/demos/form-contact.html %}
```
<p>
  <iframe height='300' scrolling='no' src='demos/form-contact.html' frameborder='no' style='width: 100%;'></iframe>
</p>

L'utilisation de la balise `<p>` ici est juste pour structurer notre code et
séparer visuellement les différents champs sans besoin de CSS. Chaque champ est
accompagné d'une étiquette (veuillez noter la balise `<label>`). Pour faire la
relation logique entre le champ et sa étiquette, on utilise l'attribut `for` de
l'étiquette pour référencer l'identificateur du champ (l'attribut `id`). Un des
avantage de lier l'étiquette à son élément correspondant est de permettre à
l'utilisateur de cliquer sur l'étiquette pour activer le champ correspondant.

Les trois premiers champs sont des éléments `<input>` dont on a utilisé
l'attribut `type` pour spécifier le type de données à saisir. Le HTML5 supporte
des multiples types dont le type `text` permet le saisir d'une seule ligne de
texte (nom et prénom dans notre cas) sans contrôle ni validation, le type
`email` permet de saisir une adresse email qui doit forcement être une adresse
email valide, le type `tel` permet le saisi d'un numéro de téléphone même que
le numéro saisi n'est pas validé par ce que la format du numéro des téléphones
varie beaucoup entre les pays, l'utilisation du champ de type `tel` améliore
l'intégration avec les téléphone en affichant un clavier virtuel adapté au
saisi des numéros de téléphone (aussi pour le cas de champ de type `email`).

Le quatrième élément est un champ de texte de plusieurs lignes, on peut
dimensionner ce champ en nombre de caractères visibles par ligne en utilisant
l'attribut `cols` et le nombre de lignes visibles en utilisant l'attribut
`rows`.

Les boutons sont déclarer en utilisant l'élément `<input>` avec le type
`submit` pour spécifier que ce bouton doit envoyer les données saisis à notre
serveur et un autre élément de type `reset` pour spécifier que ce bouton doit
réinitialiser les champs de notre formulaire. Pour changer le contenu de ces
boutons, on utilise l'attribut `value`.

Notre formulaire manque les attributs `action` et `method` pour spécifier
l'URL de la page qui va traiter ces informations et la méthode HTTP qu'on va
utiliser pour les envoyer respectivement. Mais c'est pas tout. Nous sommes
aussi besoin de donner un nom à nos champs en utilisant l'attribut `name` qui
contrairement à l'identificateur du champ, le nom du champ sera envoyé au
serveur avec les données saisis pour qu'il peut les manipulées correctement.

Donc, on va créer un nouveau formulaire utile et fonctionnel qui permettre de
chercher un terme dans le moteur de recherche Google. Le moteur de recherche
Google attendre de passer le terme à rechercher avec le nom `q` (query) à
<https://www.google.com/search> en utilisant la méthode "get".

```html
{% include_absolute _cours/demos/form-google-search.html %}
```
<p>
  <iframe height='60' scrolling='no' src='demos/form-google-search.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Pour le champ texte de saisir du terme, on a utilisé un élément `<input>` de
type `search`. C'est un élément équivalent au champ de type `text` mais qui
peut avoir un différent mise en forme dépend du navigateur utilisé. On a nommer
ce champ `q` en utilisant l'attribut `name` comme le moteur de recherche Google
attendre le terme à chercher passé avec le nom `q`. Deux nouvelles attributs
utilisées dans cet élément sont `placeholder` qui permettre de définir le texte
à afficher en gris dans le champ si il est vide et qui peut être utiliser au
lieu ou avec l'étiquette. L'autre attribut est `required` qui indique que ce
champ est obligatoire à saisir avant l'envoie des données au serveur.

On a aussi utilisé l'élément `<button>` au lien du `<input type="submit" />`.
Ces sont le même. L'élément `<button>` est plus flexible et support la mise en
forme de sont contenu tant que `<input type="submit" />` ne peut accepter que
un texte simple dans l'attribut `value` sans des balises de mise en forme.

Élément d'un formulaire
-----------------------

Le HTML5 contient un nombre riche des éléments du formulaire supportant des
multiples de types de données à saisir et améliorant l'intégration avec le
système.

### Champ de texte simple

C'est l'élément le plus basique de saisi. Il permet le saisi d'une seule
ligne de texte.

```html
{% include_absolute _cours/demos/form-text.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-text.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Mot de passe

Il permet le saisi d'une seule lignes des données sensibles (mot de passe). Le
text saisi n'est pas affiché mais des astérisques ou des points.

```html
{% include_absolute _cours/demos/form-password.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-password.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Nombre

Il permet le saisi d'un nombre. On peut spécifier le nombre minimal possible
par l'attribut `min` et le maximal `max` et le pas entre les nombre possible
`step`

```html
{% include_absolute _cours/demos/form-nombre.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-nombre.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Zone de texte

Il permet de saisir un texte de plusieurs lignes. On peut changer ça hauteur
et sa largeur en nombre des caractères.

```html
{% include_absolute _cours/demos/form-textarea.html %}
```
<p>
  <iframe height='70' scrolling='no' src='demos/form-textarea.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Étiquette

Il permet de donner un description au champ. On utilise l'attribut `for` pour
spécifier l'identificateur de l'élément dans il est correspondent.

```html
{% include_absolute _cours/demos/form-label.html %}
```
<p>
  <iframe height='50' scrolling='no' src='demos/form-label.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Case à cocher

Il permet de sélectionner des multiples de choix dans une liste proposée (soit
zéro ou un ou multiple choix). Les choix (les bouton radios) doivent appartenir
au même groupe en les donner le même nom (même valeur de l'attribut `name`)
mais chaque choix (chaque bouton radio de même groupe) doit avoir une valeur
différente de l'attribut `value`.

```html
{% include_absolute _cours/demos/form-checkbox.html %}
```
<p>
  <iframe height='120' scrolling='no' src='demos/form-checkbox.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Groupe radio

Il permet de sélectionner un seul choix dans une liste proposée. Les choix (les
bouton radios) doivent appartenir au même groupe en les donner le même nom
(même valeur de l'attribut `name`) mais chaque choix (chaque bouton radio de
même groupe) doit avoir une valeur différente de l'attribut `value`.

```html
{% include_absolute _cours/demos/form-radio.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-radio.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Bouton d'envoi

Il permet l'envoie des données saisis à l'URL spécifié dans l'attribut `action`
de la formulaire en utilisant la méthode HTTP spécifiée dans l'attribut
`method` de la formulaire. La création du bouton d'envoi peut être à travers un
élément `<input>` de type `submit` ou d'un élément `<button>` qui est par
défaut de type `submit`.

```html
{% include_absolute _cours/demos/form-submit.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-submit.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Bouton de réinitialisation

Il permet la réinitialisation des champs de la formulaire.  La création du
bouton de réinitialisation peut être à travers un élément `<input>` de type
`reset` ou d'un élément `<button>` de type `reset`.

```html
{% include_absolute _cours/demos/form-reset.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-reset.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Liste d'options

Il permet de sélectionner un seul (ou plusieurs) choix dans une liste d’options
déroulante.  Les choix sont de balise `<option>` avec des différentes valeurs
de l'attribut `value`. Ils sont tous regroupés dans une balise `<select>`.
L'attribut `multiple` permet la sélection de multiples des choix dans une liste
non déroulante.

```html
{% include_absolute _cours/demos/form-select.html %}
```
<p>
  <iframe height='140' scrolling='no' src='demos/form-select.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Fichier

Il permet de sélectionner un fichier depuis l'appareil d'utilisateur pour
l'uploader au serveur. L'attribut `enctype` de la formulaire doit être égal à
"multipart/form-data" pour que la formulaire peut uploader le fichier.
L'attribut `multiple` permet la sélection des multiples des fichiers.
L'attribut `accept` peut être utilisé pour définir les types de fichier que le
contrôle permet de sélectionner sous la forme d'une liste d'extensions de
fichier ou de types MIME séparés par des virgules.

```html
{% include_absolute _cours/demos/form-file.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-file.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Dates et Temps

Il permet le saisir une dates, un horaires ou les deux en utilisant le type
`date`, `time`, `datetime-local` respectivement sans fuseau horaire. Aussi, il
permet le saisir des une semaine d'une année et un mois d'une année en
utilisant le type `week` et `month` respectivement.  Le navigateur utilisera
une interface pour améliorer l'expérience utilisateur.  On peut spécifier la
valeur minimal et la valeur maximal et le pas pour ces champs en utilisant les
attributs `min`, `max` et `step` respectivement.

```html
{% include_absolute _cours/demos/form-date-time.html %}
```
<p>
  <iframe height='200' scrolling='no' src='demos/form-date-time.html' frameborder='no' style='width: 100%;'></iframe>
</p>

<aside>
<b>Noté bien:</b>
Le support des champs de type <code>datetime-local</code>, <code>week</code>
et <code>month</code> ne sont pas encore supporter par la version bureautique
du Firefox et Safari.
</aside>


### Couleur

Il permet le sélection d'un couleur en utilisant un sélecteur des couleurs.

```html
{% include_absolute _cours/demos/form-color.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-color.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Zone de recherche

Permet de saisir une seul ligne du texte. La différence entre ce type et le
type `texte` est qu'il peut avoir un différent mise en forme dépend du
navigateur utilisé.

```html
{% include_absolute _cours/demos/form-search.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-search.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Champ email

Il permet le saisir d'une seule ou plusieurs adresses électroniques (email) qui
sera/seront valider par le navigateur.  Le clavier tactile du smartphone sera
optimisé pour le saisi des email. L'attribut `multiple` permet le saisir
de multiple des emails séparés par virgule.

```html
{% include_absolute _cours/demos/form-email.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-email.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Champ URL

Il permet le saisir d'un URL absolue (lien web) qui sera valider par le
navigateur.  Le clavier tactile du smartphone sera optimisé pour le saisi des
URL.

```html
{% include_absolute _cours/demos/form-url.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-url.html' frameborder='no' style='width: 100%;'></iframe>
</p>

### Champ Téléphone

Il permet le saisir d'un numéro de téléphone.  Il ne sera pas valider par le
navigateur par ce que la format du numéro des téléphones varie beaucoup entre
les pays. Le clavier tactile du smartphone sera optimisé pour le saisi des
numéro de téléphone.

```html
{% include_absolute _cours/demos/form-tel.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-tel.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Les attributs du formulaire
----------------------------

### name

Définir le nom de l'élément du formulaire qui sera utilisé lors de l'envoi des
données saisis au serveur qu'il peut les manipulées correctement. Cet attribut
est obligatoire au tous champs de saisi dont les données seront envoyées au
serveur.

### type

Spécifier le type du champ de saisir pour les éléments `<input>` et le type du
bouton pour l'élément `<button>`.

### value

Spécifier la valeur par défaut du champ.

### autocomplete

Indiquer que le champ peut avoir sa valeur par défaut complétée automatiquement
par le navigateur en utilisant les valeur anciennement saisies. L'attribut
`autocomplete` support un ensemble des valeurs permettant de spécifier le type
de données à compléter, par exemple, la valeur "country-name" indique que la
navigateur peut compléter le champ par le nom du pays de l'utilisateur.
La liste complète des valeurs possible est accessible dans [Mozilla Developer
Network](https://developer.mozilla.org/en-US/docs/Temp_input#attr-autocomplete).

### autofocus

Un attribut booléen pour mettre l'élément en focus lorsque la page est chargée.
Un seul élément peut avoir le focus.

### placeholder

Spécifier le texte à afficher dans le champ en gris quand le champ est vide
pour données plus des hints à l'utilisateur.

### max, min, step

Spécifier la valeur maximal, la valeur minimal et le pas entre les valeurs
possible pour les champs numériques ou des dates et des temps.

### maxlength, minlength

Spécifier la longueur maximal et la longueur minimal du texte saisi pour les
champs textuels.

### checked, selected

Deux attributs booléens pour spécifier les choix sélectionnés par défaut dans
une liste liste des cases à cocher ou le choix sélectionné par défaut une liste
des boutons radios en utilisant l'attribut `checked` et pour spécifier le(s)
choix sélectionné(s) par défaut dans une liste d'options en utilisant
l'attribut `selected`.

### required

Indiquer que le saisi des données (avec validation si supporté) dans le champ
est obligatoire avant l'envoi des données. Dans le cas des boutons radios ou
des cases à couché ou des options, l'attribut booléen indique que ce choix doit
être coché/sélectionné. Dans un élément de type fichier, il indique que un
fichier doit être sélectionné.

### pattern

Spécifier l'expression régulée des valeurs valides à saisir dans les champs
textuelles. Dans le cas d'un champ d'email ou d'URL, l'attribut est appliqué
seulement si l'email ou l'URL est déjà de format valide.

Par exemple ou veut limité les emails saisis aux emails du Google Mail (gmail)
seulement. On a besoin donc d'une expression régulée qui valide si le nom du
domaine de l'email est "gmail.com", nous ne sommes pas besoin de valider la
format d'email (le contenu saisi avant '@') car la format est valider avant la
validation avec le pattern.

```html
{% include_absolute _cours/demos/form-email-pattern.html %}
```
<p>
  <iframe height='40' scrolling='no' src='demos/form-email-pattern.html' frameborder='no' style='width: 100%;'></iframe>
</p>


### disabled, readonly

Attributs booléens dont `disabled` spécifie que l'élément ne doit pas réagir à
tous les intéractions d'utilisateur (clic, sélection, ...) et ne doit pas être
envoyé au serveur tant que `readonly` spécifie que la valeur de l'élément ne
doit pas être modifiée par l'utilisateur mais sont contenu doit être envoyer au
serveur.

```html
{% include_absolute _cours/demos/form-disabled-vs-readonly.html %}
```
<p>
  <iframe height='80' scrolling='no' src='demos/form-disabled-vs-readonly.html' frameborder='no' style='width: 100%;'></iframe>
</p>

Remarque
--------

Pendant la conception de votre formulaire, il est important de garder la
quantité des données à saisir par l'utilisateur le minimal le plus possible.
Par ce qu'au point de vue de l'expérience utilisateur, plus que vous demandez
des données, plus vous risquez que l'utilisateur s'en aille. De plus, au point
de vue de la sécurité et de la confidentialité, plus que vous stocker des
données à propos de vos utilisateurs dans vos serveurs plus que vous augmentez
le dommage en cas d'une faille de sécurité et fuite des données personnels de
vos utilisateurs.
