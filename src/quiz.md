---
title: Evaluations
---

{% for quiz in site.quiz %}

### [{{ quiz.title }}]({{ quiz.url | relative_url }})

{{ quiz.description }}

<p><a href="{{ quiz.url | relative_url }}" style="color: #00A6E4;">Commancez »</a></p>

{% endfor %}
