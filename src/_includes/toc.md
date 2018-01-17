{% assign parts =  site.cours | group_by:'chapitre' %}
{% for part in parts %}

  {% if part.name == "" %}
      {% continue %}
  {% endif %}

  <h2>{{part.name}}</h2>

  <ol>
    {% for cours in part.items %}
    <li>
      <a href="{{ cours.url }}">{{ cours.title }}</a>
      {{ cours.output | toc_only: cours.url }}
    </li>
    {% endfor %}
  </ol>

{% endfor %}
