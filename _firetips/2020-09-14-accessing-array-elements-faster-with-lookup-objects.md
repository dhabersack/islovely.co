---
title: "Accessing array elements faster with lookup objects"
tags: ["JavaScript", "performance"]
---
If you identify objects in an array by a unique property, turn the array into a lookup object. The unique property becomes a key, giving you access to the objects without having to search for them in the array first.

```js
// this array holds objects that all have name- and type-properties
const array = [
  { name: 'Bulbasaur',  type: 'Grass/Poison' },
  { name: 'Charmander', type: 'Fire'         },
  { name: 'Squirtle',   type: 'Water'        },
  { name: 'Pikachu',    type: 'Electric'     }
]

// to get the type for a name, we need to .find() the element first
array.find(pokemon => pokemon.name === 'Charmander').type
// ⇒ 'Fire'


// this lookup object uses the unique names as keys
const object = {
  'Bulbasaur':  { name: 'Bulbasaur',  type: 'Grass/Poison' },
  'Charmander': { name: 'Charmander', type: 'Fire'         },
  'Squirtle':   { name: 'Squirtle',   type: 'Water'        },
  'Pikachu':    { name: 'Pikachu',    type: 'Electric'     }
}

// lookups work with bracket notation, which is faster than .find()
object['Charmander'].type
// ⇒ 'Fire'
```
