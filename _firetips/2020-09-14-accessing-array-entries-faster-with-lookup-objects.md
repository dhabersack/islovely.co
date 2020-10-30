---
title: "Accessing array entries faster with lookup objects"
tags: ['JavaScript', 'arrays', 'objects', 'lookup objects', 'performance']
---
If you identify objects in an array by a unique attribute, turn the array into a lookup object. The unique attribute becomes a key, giving you access to the object without having to search for it in the array first.

```js
// this array holds objects that all have name- and type-properties
const array = [
  { name: 'Bulbasaur',  type: 'Grass/Poison' },
  { name: 'Charmander', type: 'Fire'         },
  { name: 'Squirtle',   type: 'Water'        },
  { name: 'Pikachu',    type: 'Electric'     }
]

// to get the type for a name, we need to .find() the entry first
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
