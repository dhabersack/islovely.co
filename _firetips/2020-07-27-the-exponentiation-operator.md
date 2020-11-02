---
title: "The exponentiation operator"
tags: ["JavaScript"]
---
`Math.pow()` raises a base to an exponent. The recently introduced “exponentiation operator” `**` does the same but shorter.

```js
// we can use `Math.pow(x, y)` to calculate x^y
Math.pow(2, 2)     // ⇒  2 ^ 2   =  4
Math.pow(4, 3)     // ⇒  3 ^ 3   = 64
Math.pow(25, 0.5)  // ⇒ 25 ^ 0.5 =  5

// `x ** y` does the same, but shorter
2 ** 2             // ⇒  2 ^ 2   =  4
4 ** 3             // ⇒  4 ^ 3   = 64
25 ** 0.5          // ⇒ 25 ^ 0.5 =  5
```
