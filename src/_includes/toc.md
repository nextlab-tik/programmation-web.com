{% if page.depth == 0 %}
  {% assign prefix = '.' %}
{% else %}
  {% if page.depth == 1 %}
    {% assign prefix = '..' %}
  {% else %}
    {% if page.depth == 2 %}
      {% assign prefix = '../..' %}
    {% endif %}
  {% endif %}
{% endif %}

{% assign parts =  site.cours | group_by:'chapitre' %}
{% for part in parts %}

  {% if part.name == nil %}
      {% continue %}
  {% endif %}

  {% if part.name == "" %}
  <h2 class="no-chapitre">#</h2>
  {% else %}
  <h2>{{part.name}}</h2>
  {% endif %}

{% if include.doc_url %}
  {% for cours in part.items %}
  {% assign doc_url = cours.url | prepend:prefix %}
  {{ cours.output | toc_only: doc_url }}
  {% endfor %}
{% else %}
  {% for cours in part.items %}
  {{ cours.output | toc_only }}
  {% endfor %}
{% endif %}

{% endfor %}
