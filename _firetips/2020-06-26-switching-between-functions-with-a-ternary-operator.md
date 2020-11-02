---
title: "Switching between functions with a ternary operator"
tags: ["JavaScript"]
---
If we use a condition to choose which of two functions to call with the same parameters, we can use a ternary operator to remove some repetition.

```js
// Regardless of which function we pick, we always pass 'martini' to it.
if (isJamesBond) {
  shake('martini')
} else {
  stir('martini')
}

// Because the parameter stays the same, we can select the function with a
// ternary operator instead.
(isJamesBond ? shake : stir)('martini')
```
