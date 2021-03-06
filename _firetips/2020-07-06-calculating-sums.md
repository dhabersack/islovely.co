---
title: "Calculating sums"
tags: ["JavaScript"]
---
When “reducing” an array, JavaScript walks through all of its values and combines (reduces) them to a single value. We can use this to calculate the sum of all values in an array in a single line.

```js
const numbers = [4, 8, 15, 16, 23, 42]


// we could `for`-loop over the array and calculate the sum as we go
let sumLooped = 0

for (let i = 0; i < numbers.length; i += 1) {
  sumLooped += numbers[i]
}


// `reduce` calculates the same sum, but in a single line
const sumReduced = numbers.reduce((sum, value) => sum + value, 0)


console.log({ sumLooped, sumReduced })
// ⇒ "{ sumLooped: 108, sumReduced: 108 }"
```
