---
title: "Mapping over objects"
tags: ["JavaScript", "ES6", "arrays", "objects", "map"]
---
We can map over an array, but we cannot natively map over an object. This helper function allows us to apply the same function to all properties in an object.

```js
// we’ll use this to try and double a bunch of values in this example
const double = number => number * 2

// we put three numbers into an array, and also into an object as properties
const numbers = [1, 2, 3]
const coordinates = { x: 1, y: 2, z: 3 }

// 👍 we can `map` over an array to double all items
numbers.map(double)
// ⇒ [2, 4, 6]

// 👎 we cannot `map` an object, because objects don’t have a map-function
coordinates.map(double)  // 🛑 TypeError


// this takes an object and a function to apply to _every_ property in it
const mapObject = (object, theFunction) => {
  // get all of the object’s keys and use `theFunction` on their values
  return Object.keys(object).reduce((result, key) => ({
    ...result,
    [key]: theFunction(object[key])
  }), {})
}

// 👍 `mapObject` can map all properties for us
mapObject(coordinates, double)
// ⇒ { x: 2, y: 4, z: 6 }
```

