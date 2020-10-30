---
title: "Getting the last element from an array"
tags: ["JavaScript", "ES6", "arrays"]
---
Getting the last element in an array by doing math with its length can lead to off-by-one errors. Doing this with `Array.prototype.pop()` would remove the value from the array. We can write a function that leaves the value in the array and does the math with length for us.

```js
const last = array => array[array.length - 1]

last(['Bibidi', 'Babidi', 'Boo'])  // ⇒ 'Boo'
last([59, 75, 78, 752, 789, 881])  // ⇒ 881
```
