---
title: "Accessing object properties with bracket notation"
tags: ["JavaScript", "objects", "dot notation", "bracket notation"]
---
In JavaScript, we can use bracket notation to access an object’s property whose name is stored in a variable.

```js
const storage = {
  candy: 5,
  chocolate: 6
}

// We can access properties directly by name using dot-notation. We can also
// access them by writing their name as a string in square brackets:
storage.candy    // ⇒ 5
storage['candy'] // ⇒ 5

// If we don’t know the name of the property because it only exists in a
// variable, we _have_ to use bracket notation:
const lookUp = 'chocolate'
storage.lookUp  // ⇒ undefined (looks for missing property 'lookUp')
storage[lookUp] // ⇒ 6
```

