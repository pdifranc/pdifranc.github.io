---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Academic publications by Paolo Di Francesco in IEEE, ACM, and other venues."
---

You can also find my articles on <u><a href="https://scholar.google.at/citations?user=ZpEaqsQAAAAJ">my Google Scholar profile</a>.</u>

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
