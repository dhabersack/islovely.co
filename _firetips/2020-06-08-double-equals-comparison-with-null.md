---
title: "Double-equals comparison with null"
tags: ["JavaScript"]
---
Compare a variable to `null` using two equal signs to check if it is `null` or `undefined` at the same time.

```js
if (value === null || value === undefined) {
  // `value` is `null` or `undefined`
}

if (value == null) {
  // `value` is `null` or `undefined`
}
```
