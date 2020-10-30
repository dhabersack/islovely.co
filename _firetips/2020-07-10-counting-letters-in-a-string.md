---
title: "Counting letters in a string"
tags: ["JavaScript"]
---
Want to know how often each letter appears in a string? Turn it into a dictionary. Each letter is a key, each value is the number of times that letter appears in the string.

```js
const string = 'Supercalifragilisticexpialidocious'

// split the string into an array of individual letters
const result = string.split('')
  // turn all letters into lowercase
  .map(letter => letter.toLowerCase())
  // walk through all letters and build a dictionary as you go
  .reduce((dictionary, letter) => ({
    // take the result after the previous step into the new result
    ...dictionary,
    // increment the existing counter (or 0 for new entries) for this letter
    [letter]: (dictionary[letter] ?? 0) + 1
  }), {})

console.log(result)
// ⇒ {
//     a: 3,  c: 3,  d: 1,  e: 2,  f: 1,  g: 1,  i: 7,  l: 3,
//     o: 2.  p: 2,  r: 2,  s: 3,  t: 1,  u: 2,  x: 1
//   }
```