---
title: "Padding strings in JavaScript"
tags: ["JavaScript", "ES6", "strings"]
---
When we want a short string to be a certain number of characters long, we can “pad” it with other characters on either side. Spaces are common for this, but we can pad with any character.

```js
// we can pad a string from the front with .padStart()
    '1'.padStart(5, ' ')     // ⇒ '    1'
   '12'.padStart(5, ' ')     // ⇒ '   12'
  '123'.padStart(5, ' ')     // ⇒ '  123'
 '1234'.padStart(5, ' ')     // ⇒ ' 1234'
'12345'.padStart(5, ' ')     // ⇒ '12345'

// we can pad from the end with .padEnd()
    '1'.padEnd(5, ' ')       // ⇒ '1    '
   '12'.padEnd(5, ' ')       // ⇒ '12   '
  '123'.padEnd(5, ' ')       // ⇒ '123  '
 '1234'.padEnd(5, ' ')       // ⇒ '1234 '
'12345'.padEnd(5, ' ')       // ⇒ '12345'

// strings that are longer than the minimum don’t get padded
'123456'.padStart(5, ' ')    // ⇒ '123456'

// we can use other characters to pad the string with
'6310'.padStart(16, '*')     // ⇒ '************6310'

// the string to pad with is truncated when the expected length is reached
'hello'.padEnd(9, ' world')  // ⇒ 'hello wor'
```
