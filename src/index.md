---
title: Web 101
---

Le web est la premiére platforme dans le monde. Il est caratérisé par son
accessiblité et sa simplisité. Il parmet le développement rapide des sites et
des applications.

Dans ce série de cours, on va introduire le web, HTML5 et CSS3 à but de
developper des sites simples et modernes. On va vous proposes un ensemble des
exercies et mini-projets pour testez votre connaissance.


{% comment %}
{% assign parts =  site.cours | group_by:'chapitre' %}
{% for part in parts %}

  {% if part.name == "" %}
      {% continue %}
  {% endif %}

{{part.name}}
-------------

{% for cours in part.items %}
1. [{{ cours.title }}]({{ cours.url }})
{% endfor %}

{% endfor %}
{% endcomment %}

Web
---

1. [Introduction Web](_cours/00-web.md)
   1. [Internet](_cours/00-web.md)
   2. [Web](_cours/00-web.md)
   3. [HTTP(S)](_cours/00-web.md)
   4. [Architecture Serveur/Client](_cours/00-web.md)


HTML5
-----

1. [HTML](_cours/10-html5.md)
   1. [Les versions du langage HTML](_cours/10-html5.md#les-versions-du-langage-html)
   2. [Les éléments HTML](_cours/10-html5.md#les-éléments-html)
      1. [Anatomie d’un élément HTML](_cours/10-html5.md#anatomie-dun-élément-html)
      2. [Imbriquer des éléments](_cours/10-html5.md#imbriquer-des-éléments)
   3. [Le document HTML](_cours/10-html5.md#le-document-html)
   4. [Les balises principales](_cours/10-html5.md#les-balises-principales)
      1. [Baliser le texte](_cours/10-html5.md#baliser-le-texte)
         1. [Les titres](_cours/10-html5.md#les-titres)
         2. [Les paragraphes](_cours/10-html5.md#les-paragraphes)
         3. [Les listes](_cours/10-html5.md#les-listes)
         4. [Liste des descriptions](_cours/10-html5.md#liste-des-descriptions)
      2. [Les images](_cours/10-html5.md#les-images)
      3. [Les liens](_cours/10-html5.md#les-liens)
   5. [Balises structurantes](_cours/10-html5.md#balises-structurantes)
2. [Tableaux](_cours/12-tableau.md)
   1. [Les bases du Tableau](_cours/12-tableau.md#les-bases-du-tableau)
   2. [Structure Tableau Avancée](_cours/12-tableau.md#structure-tableau-avancée)
   3. [Remarques](_cours/12-tableau.md#remarques)
3. [Formulaire](_cours/13-formulaire.md)
   1. [Création d’un formulaire](_cours/13-formulaire.md#création-dun-formulaire)
   2. [Élément d’un formulaire](_cours/13-formulaire.md#élément-dun-formulaire)
      1. [Champ de texte simple](_cours/13-formulaire.md#champ-de-texte-simple)
      2. [Mot de passe](_cours/13-formulaire.md#mot-de-passe)
      3. [Nombre](_cours/13-formulaire.md#nombre)
      4. [Zone de texte](_cours/13-formulaire.md#zone-de-texte)
      5. [Étiquette](_cours/13-formulaire.md#étiquette)
      6. [Case à cocher](_cours/13-formulaire.md#case-à-cocher)
      7. [Groupe radio](_cours/13-formulaire.md#groupe-radio)
      8. [Bouton d’envoi](_cours/13-formulaire.md#bouton-denvoi)
      9. [Bouton de réinitialisation](_cours/13-formulaire.md#bouton-de-réinitialisation)
      10. [Liste d’options](_cours/13-formulaire.md#liste-doptions)
      11. [Fichier](_cours/13-formulaire.md#fichier)
      12. [Dates et Temps](_cours/13-formulaire.md#dates-et-temps)
      13. [Couleur](_cours/13-formulaire.md#couleur)
      14. [Zone de recherche](_cours/13-formulaire.md#zone-de-recherche)
      15. [Champ email](_cours/13-formulaire.md#champ-email)
      16. [Champ URL](_cours/13-formulaire.md#champ-url)
      17. [Champ Téléphone](_cours/13-formulaire.md#champ-téléphone)
   3. [Les attributs du formulaire](_cours/13-formulaire.md#les-attributs-du-formulaire)
      1. [name](_cours/13-formulaire.md#name)
      2. [type](_cours/13-formulaire.md#type)
      3. [value](_cours/13-formulaire.md#value)
      4. [autocomplete](_cours/13-formulaire.md#autocomplete)
      5. [autofocus](_cours/13-formulaire.md#autofocus)
      6. [placeholder](_cours/13-formulaire.md#placeholder)
      7. [max, min, step](_cours/13-formulaire.md#max-min-step)
      8. [maxlength, minlength](_cours/13-formulaire.md#maxlength-minlength)
      9. [checked, selected](_cours/13-formulaire.md#checked-selected)
      10. [required](_cours/13-formulaire.md#required)
      11. [pattern](_cours/13-formulaire.md#pattern)
      12. [disabled, readonly](_cours/13-formulaire.md#disabled-readonly)
   4. [Remarque](_cours/13-formulaire.md#remarque)
4. [Multimedia](_cours/14-multimedia.md)
   1. [Les Vidéos](_cours/14-multimedia.md#les-vidéos)
   2. [Les audio](_cours/14-multimedia.md#les-audio)
   3. [Les images vectorielles](_cours/14-multimedia.md#les-images-vectorielles)
   4. [Remarque](_cours/14-multimedia.md#remarque)
5. [Liste des balises](_cours/16-liste-balises.md)
   1. [Eléments de structure d’un document](_cours/16-liste-balises.md#eléments-de-structure-dun-document)
   2. [Balises de texte](_cours/16-liste-balises.md#balises-de-texte)
   3. [Listes, Définitions, etc](_cours/16-liste-balises.md#listes-définitions-etc)
   4. [Balises de médias](_cours/16-liste-balises.md#balises-de-médias)
   5. [Formulaires, interactivité](_cours/16-liste-balises.md#formulaires-interactivité)
   6. [Tableaux](_cours/16-liste-balises.md#tableaux)
   7. [Balises récentes et expérimentales](_cours/16-liste-balises.md#balises-récentes-et-expérimentales)
   8. [Balises générales](_cours/16-liste-balises.md#balises-générales)
   9. [Autres balises](_cours/16-liste-balises.md#autres-balises)
   10. [Balises obsolètes](_cours/16-liste-balises.md#balises-obsolètes)


CSS3
---

1. [Introduction CSS](_cours/20-css3.md)
   1. [Les versions du langage CSS](_cours/20-css3.md#les-versions-du-langage-css)
   2. [Principes de base](_cours/20-css3.md#principes-de-base)
   3. [Les sélecteurs CSS](_cours/20-css3.md#les-sélecteurs-css)
      1. [Sélecteurs du CSS niveau 1](_cours/20-css3.md#sélecteurs-du-css-niveau-1)
      2. [Sélecteurs du CSS niveau 2](_cours/20-css3.md#sélecteurs-du-css-niveau-2)
      3. [Sélecteurs du CSS niveau 3](_cours/20-css3.md#sélecteurs-du-css-niveau-3)
2. [Style de text](/cours/style-text.html)
3. [Style des boxes](/cours/style-boxes.html)
4. [Layout](/cours/layout.html)
5. [Animations](/cours/animations.html)


<link rel="next" href="{{ site.baseurl }}{{ site.cours | map: "url" | first }}" />
