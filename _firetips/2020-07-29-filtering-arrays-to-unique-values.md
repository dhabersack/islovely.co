---
title: "Filtering arrays to unique values"
tags: ["JavaScript"]
---
Arrays in JavaScript can contain the same value several times. Going through `Set`, we can filter them down to unique values.

```js
const unique = array => [...new Set(array)]

// each value in this array is also how many of it are in there
unique([1, 2, 3, 3, 4, 4, 3, 4, 2, 4])  // ⇒ [1, 2, 3, 4]
```
