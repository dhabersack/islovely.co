---
title: "Short-circuiting Boolean operators"
tags: ["JavaScript", "Booleans"]
---
In JavaScript, `&&` and `||` “short circuit”. If the result is obvious from the left value, it doesn’t evaluate the right side because that value wouldn’t make a difference.

```js
// This function takes a long time. We don’t want to call it unnecessarily.
const someReallyComplicatedFunction = () => {
  // something that returns a Boolean value
}

// The result of `true && SOMETHING` depends on the value of SOMETHING.
// JavaScript has to call the function here.
true && someReallyComplicatedFunction()   // 👍 function is run

// The result of `false && SOMETHING` can never be `true`. JavaScript skips
// the right side, because that value doesn’t matter.
false && someReallyComplicatedFunction()  // ✋ function is skipped

// `||` stops as soon as one value is `true`. If the first value is already
// true, it skips the right side.
true || someReallyComplicatedFunction()   // ✋ function is skipped

// If the value left of `||` is `false`, we need to check the right value.
// JavaScript has to call the function here.
false || someReallyComplicatedFunction()  // 👍 function is run
```
