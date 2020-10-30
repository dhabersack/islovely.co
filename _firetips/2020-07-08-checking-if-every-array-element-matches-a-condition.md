---
title: "Checking if every array element matches a condition"
tags: ["JavaScript"]
---
To check if every element matches a condition, arrays in JavaScript have the appropriately named `Array.prototype.every()`.

```js
const isEverybodyOver18 = ages => ages.every(age => age > 18)

isEverybodyOver18([27, 35, 52, 91]) // ⇒ true
isEverybodyOver18([16, 23, 42, 19]) // ⇒ false
```
