---
title: "Merging arrays"
tags: ["JavaScript", "arrays", "concat"]
---
To merge arrays in JavaScript, we can either concatenate them or use the spread operator. If we nest them in an array, they stay separate inside of that wrapping array instead.

```js
const a = ['up', 'down']
const b = ['left', 'right']
const c = ['B', 'A']

// 👎 this nests the arrays in another array instead of merging them
[a, b, c]           // ⇒ [['up', 'down'], ['left', 'right'], ['B', 'A']]

// 👍 we can concatenate many arrays at once with `.concat()`
a.concat(b, c)      // ⇒ ['up', 'down', 'left', 'right', 'B', 'A']

// 👍 the spread operator also joins the arrays into one large array
[...a, ...b, ...c]  // ⇒ ['up', 'down', 'left', 'right', 'B', 'A']
```
