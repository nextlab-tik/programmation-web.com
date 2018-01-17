---
title: Evaluations
---

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

{% for quiz in site.quiz %}

### [{{ quiz.title }}]({{ quiz.url | relative_url | prepend:prefix }})

{{ quiz.description }}

<p><a href="{{ quiz.url | relative_url | prepend:prefix }}" style="color: #00A6E4;">Commancez »</a></p>

{% endfor %}
