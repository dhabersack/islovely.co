---
title: "State-selectors in utility-first CSS"
tags: ["utility-first CSS"]
---
Want to create state-prefixed CSS classes that only apply on hover, focus, or other states? Repeat that same pseudo-selector at the end of your selector.

```html
<style>
  .focus\:yellow:focus {
    background: yellow;
  }

  .hover\:orange:hover {
    background: orange;
  }
</style>

<button class="focus:yellow hover:orange">
  Yellow on focus, orange on hover
</button>
```
