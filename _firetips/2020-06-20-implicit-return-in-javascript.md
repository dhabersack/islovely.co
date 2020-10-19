---
title: "Implicit return in JavaScript"
tags: ["JavaScript", "ES6", "arrow functions", "implicit return"]
---
If a JavaScript arrow function immediately returns a value, writing `return` is optional (if we also remove the curly brackets). The return is then implied, making it an “implicit return”.

```js
// we could write the `return` explicitly
const getPumpedAbout = thing => {
  return `Pumped about ${thing}!`
}

// if we write it like this, the `return` is implied
const getPumpedAbout = thing => `Pumped about ${thing}!`

// there is no difference in how we would call these functions
getPumpedAbout('implicit returns') // ⇒ 'Pumped about implicit returns!'
```
