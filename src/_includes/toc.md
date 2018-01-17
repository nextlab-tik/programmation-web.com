{% assign parts =  site.cours | group_by:'chapitre' %}
{% for part in parts %}

  {% if part.name == "" %}
      {% continue %}
  {% endif %}

  <h2>{{part.name}}</h2>

{% if include.doc_url %}
  {% for cours in part.items %}
  {{ cours.output | toc_only: cours.url }}
  {% endfor %}
{% else %}
  {% for cours in part.items %}
  {{ cours.output | toc_only }}
  {% endfor %}
{% endif %}

{% endfor %}
