---
title: "Plucking properties from object arrays"
tags: ["JavaScript", "readability"]
---
One of the more common uses for `Array.prototype.map()` is extracting properties from objects. Instead of using individual arrow functions, we can create a reusable function that does the plucking for us.

```js
const countries = [
  { name: 'France', capital: 'Paris'  },
  { name: 'Spain',  capital: 'Madrid' },
  { name: 'Italy',  capital: 'Rome'   }
]

// we can extract the attributes with individual arrow functions
countries.map(country => country.name)     // ⇒ ['France', 'Spain', 'Italy']
countries.map(country => country.capital)  // ⇒ ['Paris', 'Madrid', 'Rome']

// this function allows us to write that arrow function shorter
const pluck = property => item => item[property]

countries.map(pluck('name'))     // ⇒ ['France', 'Spain', 'Italy']
countries.map(pluck('capital'))  // ⇒ ['Paris', 'Madrid', 'Rome']
```
