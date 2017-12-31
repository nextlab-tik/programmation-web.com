---
title: Travaux Pratiques
---

{% for tp in site.tp %}

{% if tp.path contains "correction.md" %}
    {% continue %}
{% endif %}

### [{{ tp.title }}]({{ tp.url | relative_url }})

{{ tp.description }}

<p>
  <a href="{{ tp.url | relative_url }}" style="color: #00A6E4; margin-right: 30px;">Commancez »</a>
  <a href="{{ tp.url | replace: 'index.html', 'correction.html' | relative_url }}" style="color: #00A6E4;">Correction »</a>
</p>

{% endfor %}
