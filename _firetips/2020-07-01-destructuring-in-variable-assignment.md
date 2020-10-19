---
title: "Destructuring in variable assignment"
tags: ["JavaScript", "ES6", "destructuring", "clean code", "readability", "DRY"]
---
If the name of your variable is the exact same as the thing you would extract, you can use destructuring instead. That way, you don’t have to type the same word twice.

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
