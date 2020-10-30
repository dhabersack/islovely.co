---
title: "Picking object properties"
tags: ["JavaScript", "objects", "reduce"]
---
With `Array.prototype.reduce()`, we can extract only the properties of an object we want to pass along.

```js
// we don’t want to pass all of this information along all the time
const user = {
  email: 'ckent@dailyplanet.com',
  password: 'i-am-superman',
  username: 'clarkkent'
}

// this function receives an object and a list of properties to extract
const pick = (object, props) => props.reduce((picked, prop) => ({
  ...picked,
  [prop]: object[prop]
}), {})

// we can use `pick` to get only the information we need
const condensedUser = pick(user, ['username', 'email'])
// ⇒ {
//     username: 'clarkkent',
//     email: 'ckent@dailyplanet.com'
//   }
```
