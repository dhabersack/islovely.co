---
title: "Using non-alphanumeric characters in CSS"
tags: ["utility-first CSS"]
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
