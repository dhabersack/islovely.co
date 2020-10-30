---
title: "Combining arrays pairwise"
tags: ["JavaScript"]
---
Need to combine values from two arrays pairwise? This function takes the two first values, the two second values, and so on and puts them in nested arrays. The operation is called “zip” because it works like a zipper. 👖

```js
// takes two arrays and combines their elements pairwise
const zip = (firstArray, secondArray) => {
  const longerLength = Math.max(firstArray.length, secondArray.length)
  const indices = [...new Array(longerLength).keys()]

  return indices.reduce((list, index) => [
    ...list,
    [firstArray[index], secondArray[index]]
  ], [])
}

zip([4, '8 oz', '2 cups', 'some'], ['eggs', 'milk', 'flour', 'salt'])
// ⇒ [[4, 'eggs'], ['8 oz', 'milk'], ['2 cups', 'flour'], ['some', 'salt']]

// if one array is shorter, that list’s value in a pair is `undefined`
zip([1, 2, 3], ['a', 'b'])       // ⇒ [[1, 'a'], [2, 'b'], [3, undefined]]
zip([1, 2],    ['a', 'b', 'c'])  // ⇒ [[1, 'a'], [2, 'b'], [undefined, 'c']]
```
