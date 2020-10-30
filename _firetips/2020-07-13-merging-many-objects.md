---
title: "Merging many objects"
tags: ["JavaScript", "objects"]
---
`Object.assign()` combined with the rest and spread operators can shallow-merge an arbitrary number of objects.

```js
// because of the two `...`, the function accepts any number of objects
const merge = (...objects) => Object.assign({}, ...objects)

// we can merge two objects into a single one
merge({ id: 5 }, { title: 'This is nice', description: 'Very nice' })
// ⇒ {
//     id: 5,
//     title: 'This is nice',
//     description: 'Very nice'
//   }

// we can pass as many objects to the function as we want; in case of
// duplicate keys, the last value always wins
merge({ name: 'Joe' }, { age: 27, email: 'joe@swanson.com' }, { age: 43 })
// ⇒ {
//     name: 'Joe',
//     email: 'joe@swanson.com',
//     age: 43
//   }
```
