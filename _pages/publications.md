---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Academic publications by Paolo Di Francesco in IEEE, ACM, and other venues."
---

You can also find my articles on <u><a href="https://scholar.google.at/citations?user=ZpEaqsQAAAAJ">my Google Scholar profile</a>.</u>

{% include base_path %}

<div class="filter-bar" id="pub-filters">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="networking">Networking</button>
  <button class="filter-btn" data-filter="spectrum-sharing">Spectrum Sharing</button>
  <button class="filter-btn" data-filter="sdr">SDR</button>
  <button class="filter-btn" data-filter="wireless">Wireless</button>
  <button class="filter-btn" data-filter="game-theory">Game Theory</button>
  <button class="filter-btn" data-filter="data-analysis">Data Analysis</button>
</div>

<div id="filterable-list">
{% for post in site.publications reversed %}
  <div class="filterable-item" data-tags="{{ post.tags | join: ',' }}">
    {% include archive-single.html %}
  </div>
{% endfor %}
</div>
