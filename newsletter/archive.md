---
title: Newsletter archive
navigation_title: Archive
---
{% assign newsletters = site.newsletters | reverse %}

I send out a newsletter once a week. These are the past entries.

{% for newsletter in newsletters %}
  <div class="margin-bottom-xl">
    <span class="color-gray-700 font-size-xxs line-height-xxs-short sans-serif">
      {{ newsletter.date | date: "%B %-d, %Y" }}
    </span>

    <h2 class="font-size-s line-height-s-medium margin-0">
      <a href="{{ newsletter.url | prepend: site.baseurl }}">
        {{ newsletter.title }}
      </a>
    </h2>
  </div>
{% endfor %}
