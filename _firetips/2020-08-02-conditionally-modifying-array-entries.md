---
title: "Conditionally modifying array entries"
tags: ["JavaScript", "ES6", "arrays", "map", "ternary operator"]
---
If we want to change only the values in an array that match a condition, we can combine `.map()` with a ternary operator. By putting these in a function, we can quickly apply this pattern to many different scenarios.

```js
// takes an array, a function that checks each item, and another function
// that it applies to every item that the check returns `true` for
const mapMatches = (array, checkFunction, changeFunction) =>
  array.map(item => checkFunction(item) ? changeFunction(item) : item)

// change every name that contains an “e” into uppercase
mapMatches(
  ['Leo', 'Paul', 'Joe', 'Fred', 'Sam'],
  name => name.includes('e'),
  name => name.toUpperCase()
)
// ⇒ ['LEO', 'Paul', 'JOE', 'FRED', 'Sam'],

// divide every even number by two
mapMatches(
  [4, 8, 15, 16, 23, 42],
  number => number % 2 === 0,
  number => number / 2
)
// ⇒ [2, 4, 15, 8, 23, 21]
```
