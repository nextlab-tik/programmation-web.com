---
title: Programmation Web
---

Le web est la plus grande bibliothèque du monde située sur un réseau mondial.
Cette bibliothèque est composée de documents de différents types: images,
textes, vidéos, etc.  Il se base principalement sur le langage HTML mais il est
mis en forme plus agréable à l'aide du langage de style CSS. Le web est
dynamisé par le langage JavaScript.

Dans ce cours, on va introduire le web, le langage de balisage HTML5 et le
langage de style CSS3. Ce cours est destiné à tous ceux qui veulent développer
des sites simples et modernes. Chaque chapitre contient une série d'exercices.


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

1. [Introduction au Web](_cours/00-web.md)
   1. [Les composents du Web](_cours/00-web.md#les-composents-du-web)
   2. [Le fonctionnement du Web](_cours/00-web.md#le-fonctionnement-du-web)

HTML
----

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
      4. [Les balises textes en ligne](_cours/10-html5.md#les-balises-textes-en-ligne)
         1. [Mise en forme de texte](_cours/10-html5.md#mise-en-forme-de-texte)
         2. [Importance Logique](_cours/10-html5.md#importance-logique)
         3. [Abréviation et Citation](_cours/10-html5.md#abréviation-et-citation)
         4. [Insertion du code](_cours/10-html5.md#insertion-du-code)
      5. [Les balises universels](_cours/10-html5.md#les-balises-universels)
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
4. [Multimédia et Intégration](_cours/14-multimedia.md)
   1. [Les Vidéos](_cours/14-multimedia.md#les-vidéos)
   2. [Les audio](_cours/14-multimedia.md#les-audio)
   3. [Les images vectorielles](_cours/14-multimedia.md#les-images-vectorielles)
   4. [Intégration de contenu externe](_cours/14-multimedia.md#intégration-de-contenu-externe)
      1. [Intégration des pages Web](_cours/14-multimedia.md#intégration-des-pages-web)
      2. [Intégrer des autres ressources](_cours/14-multimedia.md#intégrer-des-autres-ressources)
   5. [Remarque](_cours/14-multimedia.md#remarque)
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

CSS
---

1. [Introduction CSS](_cours/20-css3.md)
   1. [Les versions du langage CSS](_cours/20-css3.md#les-versions-du-langage-css)
   2. [Principes de base](_cours/20-css3.md#principes-de-base)
   3. [Les sélecteurs CSS](_cours/20-css3.md#les-sélecteurs-css)
      1. [Sélecteurs de base](_cours/20-css3.md#sélecteurs-de-base)
   4. [Les unités CSS](_cours/20-css3.md#les-unités-css)
      1. [Unités relatives:](_cours/20-css3.md#unités-relatives)
      2. [Les pixels](_cours/20-css3.md#les-pixels)
   5. [Les couleurs CSS](_cours/20-css3.md#les-couleurs-css)
      1. [Par leur nom:](_cours/20-css3.md#par-leur-nom)
      2. [Code héxadécimal](_cours/20-css3.md#code-héxadécimal)
      3. [Rouge, Vert, Bleu](_cours/20-css3.md#rouge-vert-bleu)
      4. [RGBA](_cours/20-css3.md#rgba)
      5. [Teinte, saturation, luminosité (HSL)](_cours/20-css3.md#teinte-saturation-luminosité-hsl)
      6. [HSLA](_cours/20-css3.md#hsla)
      7. [Définir la couleur du texte](_cours/20-css3.md#définir-la-couleur-du-texte)
      8. [Définir la couleur de fond](_cours/20-css3.md#définir-la-couleur-de-fond)
2. [Style de text](_cours/21-style-text.md)
   1. [Taille de texte](_cours/21-style-text.md#taille-de-texte)
   2. [Polices](_cours/21-style-text.md#polices)
   3. [Epaisseur du texte](_cours/21-style-text.md#epaisseur-du-texte)
   4. [Style du font](_cours/21-style-text.md#style-du-font)
   5. [Alignement du texte](_cours/21-style-text.md#alignement-du-texte)
   6. [Majuscule](_cours/21-style-text.md#majuscule)
   7. [Décoration](_cours/21-style-text.md#décoration)
   8. [Indentation](_cours/21-style-text.md#indentation)
   9. [Espacement](_cours/21-style-text.md#espacement)
3. [Style des boxes](_cours/22-style-boxes.md)
   1. [Le modèle de boîte](_cours/22-style-boxes.md#le-modèle-de-boîte)
   2. [Les types de boîte](_cours/22-style-boxes.md#les-types-de-boîte)
   3. [Bordure](_cours/22-style-boxes.md#bordure)
   4. [Couleur et image de fond](_cours/22-style-boxes.md#couleur-et-image-de-fond)
4. [Layout](_cours/23-layout.md)
5. [Mise en forme des tableaux](_cours/24-css-tableau.md)
   1. [Bordure du tableau](_cours/24-css-tableau.md#bordure-du-tableau)
   2. [Couleur des cellules](_cours/24-css-tableau.md#couleur-des-cellules)
   3. [Mise en Forme de d’en-tête et le pied](_cours/24-css-tableau.md#mise-en-forme-de-den-tête-et-le-pied)
   4. [Les captions](_cours/24-css-tableau.md#les-captions)
6. [Mise en forme des formulaires](_cours/25-css-formulaire.md)
   1. [Mise en forme de fieldset](_cours/25-css-formulaire.md#mise-en-forme-de-fieldset)
   2. [Mise en page du formulaire](_cours/25-css-formulaire.md#mise-en-page-du-formulaire)
   3. [Bouton d’envoi](_cours/25-css-formulaire.md#bouton-denvoi)
   4. [Validation de contenu](_cours/25-css-formulaire.md#validation-de-contenu)
7. [Animations](_cours/26-animations.md)


<link rel="next" href="{{ site.baseurl }}{{ site.cours | map: "url" | first }}" />
