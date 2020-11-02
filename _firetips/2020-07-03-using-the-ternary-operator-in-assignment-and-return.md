---
title: "Using the ternary operator in assignment and return"
tags: ["JavaScript"]
---
The ternary operator can be used when assigning variables or even as part of return statements. It can help us make some arrow functions even shorter.

```js
const isEven = n => n % 2 === 0

// assigning the result of a ternary operator to a variable
const numberType = isEven(35) ? 'even' : 'odd'

// returning the result of a ternary operator in a function
const getNumberType = number => {
  return isEven(number) ? 'even' : 'odd'
}

// returning the result of a ternary operator using an implicit return
const getNumberType = number => isEven(number) ? 'even' : 'odd'
```
