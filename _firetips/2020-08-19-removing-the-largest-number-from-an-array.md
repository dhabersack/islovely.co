---
title: "Removing the largest number from an array"
tags: ["JavaScript", "ES6", "arrays", "functions", "arrow functions", "spread operator"]
---
We can remove all instances of the largest number in an array by combining `Math.max()` and `Array.prototype.filter()`.

```js
// takes an array of numbers and removes all the maximum values
const removeMax = numbers => {
  // get this before we `filter` so we only need to calculate it once
  const max = Math.max(...numbers)

  // return a version of `numbers` with all instances of `max` removed
  return numbers.filter(number => number !== max)
}

// if the maximum value appears multiple times, all of them are removed
removeMax([12, 27, 8, 9, 41, 33, 41, 29])  // ⇒ [12, 27, 8, 9, 33, 29]

// if all numbers are the maximum, the function returns an empty array
removeMax([5, 5, 5, 5, 5, 5, 5])           // ⇒ []

// this works with negative numbers as well
removeMax([-5, -2, -8, -1, -10])           // ⇒ [-5, -2, -8, -10]
```
