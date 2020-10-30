---
title: "Mapping array values with constructors"
tags: ["JavaScript", "arrays"]
---
Some constructors can be called as regular functions in JavaScript. We can use them when mapping over arrays to quickly transform the values in them.

```js
// values passed to a constructor are transformed to that type
[4, 8, 15].map(number => String(number))          // ⇒ ["4", "8", "15"]
["16", "23", "42"].map(string => Number(string))  // ⇒ [16, 23, 42]
[1, 1, 0].map(value => Boolean(value))            // ⇒ [true, true, false]

// we only pass the values through, so we can use this shorthand notation
[4, 8, 15].map(String)          // ⇒ ["4", "8", "15"]
["16", "23", "42"].map(Number)  // ⇒ [16, 23, 42]
[1, 1, 0].map(Boolean)          // ⇒ [true, true, false]
```
