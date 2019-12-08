---
title: Newsletter archive
---
{% assign newsletters = site.newsletters | reverse %}

I send out a newsletter once a week. These are the past entries.

{% for newsletter in newsletters %}
  <h2>
    <a href="{{ newsletter.url | prepend: site.baseurl }}">
      {{ newsletter.title }}
    </a>
  </h2>
{% endfor %}
