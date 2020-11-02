---
title: "Relative timestamps with Intl"
tags: ["JavaScript"]
---
JavaScript has a built-in formatter for relative timestamps. It returns strings like “yesterday” or “2 months from now” in the language you specify.

This does not currently work in IE and Safari.

```js
// a positive value describes a time in the future
new Intl.RelativeTimeFormat('en').format(2, 'day')
// ⇒ 'in 2 days'

// a negative value describes a time in the past
new Intl.RelativeTimeFormat('en').format(-1, 'day')
// ⇒ '1 day ago'

// `numeric: 'auto'` results in strings like “yesterday” and “tomorrow”
new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-1, 'day')
// ⇒ 'yesterday'

// the formatter can base its output on different languages
new Intl.RelativeTimeFormat('de').format(3, 'month')
// ⇒ 'in 3 Monaten'
```
