---
title: "Array methods shorthand"
tags: ["JavaScript", "readability"]
---
JavaScript’s array methods pass their values through to the functions given to them. If you would only forward those to another function, you can skip the arrow function and name that function directly.

```js
const numbers = [4, 8, 15, 16, 23, 42]
const isEven = n => n % 2 === 0

numbers.filter(number => isEven(number))  // ⇒ [4, 8, 16, 42]
numbers.filter(isEven)                    // ⇒ [4, 8, 16, 42]
```
