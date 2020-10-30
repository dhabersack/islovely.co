---
title: "Passing parameters as a single object"
tags: ["JavaScript", "readability"]
---
We can make a function more readable by passing it a single object instead of independent parameters. Every time we call this function, we can see what each parameter means by its key on that object.

```js
// This function takes five parameters. In the body of the function, they
// can be accessed with names that describe what each value represents.
const hostGuest = (age, hoursAwake, isHungry, isTired, name) => {
  if (isTired) {
    // let them rest
  } else if (isHungry) {
    // give them food
  }
}

// When using that function, that descriptiveness is lost. Without looking
// at the function, we have to remember what each value means. Is John 30 or
// 19? Are they hungry or tired?
hostGuest(30, 19, false, true, 'John')


// By wrapping the parameters in curly brackets, the function now accepts a
// single object instead of five independent values. We can still access
// them exactly as we did before.
const hostGuest = ({ age, hoursAwake, isHungry, isTired, name }) => {
  if (isTired) {
    // let them rest
  } else if (isHungry) {
    // give them food
  }
}

// When using _this_ function, we have to pass it an object. The keys of
// that object help us describe what attribute each value represents.
hostGuest({
  age: 30,
  hoursAwake: 19,
  isHungry: false,
  isTired: true,
  name: 'John'
})
```
