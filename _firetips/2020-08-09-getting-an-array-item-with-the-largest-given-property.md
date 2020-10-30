---
title: "Getting the array item with the largest given property"
tags: ["JavaScript"]
---
We can get the largest number from an array of numbers with `Math.max()`, but that does not work with objects. If we have an array of objects, we can get the item with the largest value of a given property like this:

```js
// takes an array and the name of a property to compare by
const maxBy = (array, prop) => {
  return array.reduce((max, item) => item[prop] > max[prop] ? item : max)
}

// find the object with the largest `age`
maxBy([
  { name: 'Leela',  age: 31   },
  { name: 'Fry',    age: 1031 },
  { name: 'Hubert', age: 165  },
  { name: 'Bender', age: 10   }
], 'age')
// ⇒ { name: 'Fry', age: 1031 }
```
