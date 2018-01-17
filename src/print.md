---
title: Programmation Web
permalink: /cours/print.html
print: true
embed: true
toc: true
---

<div class="toc">
  <h1>Table des matières</h1>

  {% include toc.md %}
</div>

{% assign parts =  site.cours | group_by:'chapitre' %}
{% for part in parts %}

  {% if part.name == "" %}
      {% continue %}
  {% endif %}

<div class="page-break"></div>
<h1 class="chapitre">{{part.name}}</h1>

{% for cours in part.items %}

{{ cours.title }}
=================

{{ cours.content }}

{% endfor %}

{% endfor %}
