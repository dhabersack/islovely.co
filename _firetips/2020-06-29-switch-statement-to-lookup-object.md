---
title: "Switch statement to lookup object"
tags: ["JavaScript", "conditionals", "switch-case", "objects", "lookup objects", "clean code", "readability", "DRY"]
---
Some switch-statements can be replaced with lookup-tables in JavaScript. If a switch immediately returns values, this pattern achieves the same in fewer lines of code.

```js
// 👎 switching through the values to return a number requires a lot of code
const getFeetForAnimal = animal => {
  switch (animal) {
    case 'bird':
      return 2
    case 'dog':
      return 4
    case 'fish':
      return 0
    case 'spider':
      return 8
  }
}

// 👍 a mapping-object and implicit `return` do the same in fewer lines
const getFeetForAnimal = animal => ({
  bird: 2,
  dog: 4,
  fish: 0,
  spider: 8
})[animal]

getFeetForAnimal('dog')     // ⇒ 4
getFeetForAnimal('gorilla') // ⇒ undefined (does not exist in lookup table)
```
