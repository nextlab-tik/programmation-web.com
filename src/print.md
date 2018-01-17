---
title: Programmation Web
permalink: /cours/print.html
print: true
embed: true
toc: true
depth: 1
---

<div class="toc">
  <h1>Table des matières</h1>

  {% include toc.md %}
</div>

{% assign parts =  site.cours | group_by:'chapitre' %}
{% for part in parts %}

  {% if part.name == nil %}
      {% continue %}
  {% endif %}

<div class="page-break"></div>
{% if part.name == "" %}
<h1 class="no-chapitre"></h1>
{% else %}
<h1 class="chapitre">{{part.name}}</h1>
{% endif %}

{% for cours in part.items %}

{{ cours.title }}
=================

{{ cours.content }}

{% endfor %}

{% endfor %}
