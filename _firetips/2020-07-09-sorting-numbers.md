---
title: "Sorting numbers"
tags: ["JavaScript"]
---
JavaScript treats all elements in arrays as strings when sorting and orders them alphabetically. When sorting the numbers 1 through 10, 10 appears between 1 and 2. We can fix that with a custom compare function.

```js
// default: sorts alphabetically, so 10 comes before 2
[7, 2, 9, 1, 5, 10, 6, 4, 3, 8].sort()
// ⇒ [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
//       ↑ Hey 10, what are you doing there buddy?

// better: sort numerically with a custom sort function
[7, 2, 9, 1, 5, 10, 6, 4, 3, 8].sort((a, b) => a - b)
// ⇒ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
