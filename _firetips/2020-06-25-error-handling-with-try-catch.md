---
title: "Error handling with try-catch"
tags: ["language-independent", "try-catch", "error handling"]
---
With `try` and `catch`, we can react to errors in functions that could fail without our code crashing. If there is no error and the function succeeds, the `catch`-block is skipped.

```js
// `try` to do something that could fail
try {
  // this may or may not be possible
  makeItBeFriday()

  // if we get here, the function worked
  console.log('It is Friday now!')
} catch (error) {
  // if something in `try` fails and throws an error, we end up here
  console.log('Sorry, it is not Friday now.')
}
```
