---
title: "Destructuring the console object"
tags: ["JavaScript"]
---
`console` is an object like any other. That means we can destructure from it like we do with other objects as well.

```js
// Tired of writing “console.” all the time?
console.log('This sure is tiresome.')
console.warn('That’s a lotta keystrokes.')

// Destructure the functions from the console object.
const { log, warn } = console
log('Look ma, no console!')
warn('I’m going to let you do whatever.')
```
