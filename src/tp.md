---
title: Travaux Pratiques
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

{% for tp in site.tp %}

{% if tp.path contains "correction.md" %}
    {% continue %}
{% endif %}

### [{{ tp.title }}]({{ tp.url | relative_url | prepend:prefix }})

{{ tp.description }}

<p>
  <a href="{{ tp.url | relative_url | prepend:prefix }}" style="color: #00A6E4; margin-right: 30px;">Commancez »</a>
  <a href="{{ tp.url | replace: 'index.html', 'correction.html' | relative_url | prepend:prefix }}" style="color: #00A6E4;">Correction »</a>
</p>

{% endfor %}
