---
title: "Redundant comparisons to true or false"
tags: ["readability"]
---
If an expression already returns a Boolean value, comparing that result to `true` or `false` is redundant. Leave it out to make your code shorter and more readable.

```js
// before: comparing the Boolean result to `true` or `false` is redundant
if (number < 10 === true) { /* code */ }

// after: using the comparison’s result directly is shorter and more readable
if (number < 10) { /* code */ }


// before: the ternary operator is redundant in this assignment as well
const isHello = string === 'Hello' ? true : false

// after: the comparison is already `true` or `false`, which we can use directly
const isHello = string === 'Hello'


// before: this if-else-block only returns the result of a conditional chain
const isTheWeekend = day => {
  if (day === 'Saturday' || day === 'Sunday') {
    return true
  } else {
    return false
  }
}

// after: our function can return the value of the conditional chain directly
const isTheWeekend = day => day === 'Saturday' || day === 'Sunday'
```
