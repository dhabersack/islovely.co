---
title: "Exclusive OR in JavaScript"
tags: ["JavaScript"]
---
Finding values that exist in only one of two arrays is called “XOR”, or “exclusive OR”. It gets us all values that appear in either the first OR the second array, but not both.

```js
// takes two arrays and returns all items that appear in only one of them
const xor = (first, second) => [
  ...first.filter(item => !second.includes(item)),
  ...second.filter(item => !first.includes(item))
]

// `xor` returns all items that appear in only one of the two arrays
xor([1, 2, 3, 4, 5], [2, 3, 4, 5, 6])   // ⇒ [1, 6]

// a value can appear multiple times, but only in one array
xor(['🤖', '🤖', '👻', '👻'], ['🤖'])  // ⇒ ['👻', '👻']
```
