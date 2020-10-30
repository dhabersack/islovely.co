---
title: "Getting random items from arrays"
tags: ["JavaScript", "arrays", "random"]
---
Getting a random number is fun, but it’s not “getting a random item from an array” fun. I don’t know why you’d want to do this, but you can.

```js
// get a random item from the given array
const sample = array => array[Math.floor(Math.random() * array.length)]

// every time we use `sample`, it returns a random item
sample([17, 6, 22, 13, 9])  // ⇒ 13 (maybe)
sample([17, 6, 22, 13, 9])  // ⇒ 6  (maybe)
sample([17, 6, 22, 13, 9])  // ⇒ 6  (maybe)
sample([17, 6, 22, 13, 9])  // ⇒ 17 (maybe)
```
