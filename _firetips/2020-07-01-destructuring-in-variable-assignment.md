---
title: "Destructuring in variable assignment"
tags: ["JavaScript", "readability"]
---
If the name of your variable is the exact same as the property you would extract from an object, you can use destructuring instead. That way, you don’t have to type the same word twice.

```js
const person = {
  name: 'Bob',
  age: 35
}

// without destructuring
const age = person.age

// with destructuring
const { age } = person
```
