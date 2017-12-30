---
title: Travaux Pratiques
---

{% for tp in site.tp %}

### [{{ tp.title }}]({{ tp.url | relative_url }})

{{ tp.description }}

<p><a href="{{ tp.url | relative_url }}" style="color: #00A6E4;">Commancez »</a></p>

{% endfor %}
