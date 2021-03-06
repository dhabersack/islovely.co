---
title: "Splitting strings by lengths"
tags: ["JavaScript", "regular expressions"]
---
JavaScript can split strings at given characters. By matching against a regular expression, we can split strings into substrings of a given length instead.

```js
// split at every `O`; all `O`s are gone in the result
'BRBIDKLOLOMGOK'.split('O')  // ⇒ ['BRBIDKL', 'L', 'MG', 'K']

// split into groups of up to 3 characters (the last group can be shorter)
'BRBIDKLOLOMGOK'.match(/.{1,3}/g)  // ⇒ ['BRB', 'IDK', 'LOL', 'OMG', 'OK']
```
