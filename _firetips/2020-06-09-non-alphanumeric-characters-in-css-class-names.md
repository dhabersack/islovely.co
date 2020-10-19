---
title: "Non-alphanumeric characters in CSS class names"
tags: ["CSS", "utility-first CSS", "HTML"]
---
You can use non-standard characters like “:” in CSS class names if you escape them with a backslash.

```html
<style>
  .text\:italic {
    font-style: italic;
  }

  .text\:uppercase {
    text-transform: uppercase;
  }
</style>

<p class="text:italic text:uppercase">
  Italic and uppercase
</p>
```
