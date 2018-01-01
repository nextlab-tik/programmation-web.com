---
title: Web 101
---

Le web est la premiére platforme dans le monde. Il est caratérisé par son
accessiblité et sa simplisité. Il parmet le développement rapide des sites et
des applications.

Dans ce série de cours, on va introduire le web, HTML5 et CSS3 à but de
developper des sites simples et modernes. On va vous proposes un ensemble des
exercies et mini-projets pour testez votre connaissance.


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
   1. [Les balises](_cours/10-html5.md#les-balises)
   2. [Les versions du langage HTML](_cours/10-html5.md#les-versions-du-langage-html)
   3. [HTML5](_cours/10-html5.md#html5)
   4. [Balises structurantes](_cours/10-html5.md#balises-structurantes)
   5. [Pourquoi on ne peut pas mettre de DIV dans un P](_cours/10-html5.md#pourquoi-on-ne-peut-pas-mettre-de-div-dans-un-p)

2. [Liste des balises](_cours/16-liste-balises.md)
   1. [Eléments de structure d’un document](_cours/16-liste-balises.md#eléments-de-structure-dun-document)
   2. [Balises de texte](_cours/16-liste-balises.md#balises-de-texte)

CSS3
----

Référencement
-------------

Web Avancé
----------


<link rel="next" href="{{ site.baseurl }}{{ site.cours | map: "url" | first }}" />
