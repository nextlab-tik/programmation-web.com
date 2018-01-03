---
title: Formulaire
chapitre: HTML5
permalink: /cours/formulaires.html
---

Le HTML fournir un ensembles des balises pour construire des formulaires qui
sont les éléments de base pour développer des pages interactives dont
l'utilisateur peut saisir des données, cliquer des boutons et sélectionner un
ensemble des choix. On va démontrer ses utilisations de base dans ce chapitre.
Le mise en forme des formulaires avec CSS et le traitements dynamiques des ces
formulaires avec JavaScript seront présentés dans des autres chapitres.

Les éléments de formulaire
--------------------------

Les formulaires doivent être délimités par la balise `<form>`. Prenant par
exemple un formulaire permettant de saisir un texte.

```html
<form>
  <input type="text" />
</form>
```

On a utilisé la balise `<input>` avec l'attribue `type` équal à "text". La
balise de saisie `<input>` support des autres types:

- **password**: Saisir un mot de passe sans afficher ses lettres.
```html
<input type="password" />
```
- **number**: Saisir un nombre. On peut spécifier le nombre minimal possible et
le nombre maximal possible à saisir.
