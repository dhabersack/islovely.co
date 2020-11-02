---
title: "Freezing objects for immutability"
tags: ["JavaScript"]
---
In JavaScript, `const` doesn’t mean a value is constant and can never be changed. To make an object immutable, we have to freeze it. 🥶

```js
// the word `const` makes it sound like this object can never be modified
const dog = { name: 'Coop' }
// dog → { name: 'Coop' }

// we can still change properties of an object defined with `const`
dog.name = 'Cooper'
// dog → { name: 'Cooper' }

// we can also add new properties to it
dog.age = 3
// dog → { name: 'Cooper', age: 3 }

// the only thing we cannot do is assign an entirely different object
dog = { name: 'Emil' }  // TypeError (cannot assign to readonly property)

// to prevent ALL changes to an object, we have to freeze it
const cat = Object.freeze({ name: 'Milly' })
// cat → { name: 'Milly' }

// frozen objects can’t be changed (these steps throw errors in strict mode)
cat.name = 'Lilly'
cat.age = 9
// cat → { name: 'Milly' }
```
