---
title: "Making parameters required in JavaScript"
tags: ["JavaScript"]
---
Functions in JavaScript don’t have “required” parameters. We can emulate them by setting a function that throws an error as a parameter’s default value. This assigned function call only happens if we omit the parameter, making it required.

```js
// calling this function always throws an error
const throwIfMissing = parameter => {
  throw new Error(`Parameter '${parameter}' needs to be defined.`)
}

// if we don’t pass a `thing`, that function will be called as the default
const askAboutFavorite = (thing = throwIfMissing('thing')) => {
  console.log(`What is your favorite ${thing}?`)
}

// not passing anything, or passing `undefined`, causes the error to happen
askAboutFavorite()           // Error: "Parameter 'thing' needs to be defined."
askAboutFavorite(undefined)  // Error: "Parameter 'thing' needs to be defined."

// passing any defined value is fine
askAboutFavorite(null)       // "What is your favorite null?"
askAboutFavorite('color')    // "What is your favorite color?"
```
