---
title: "Flat arrays to object arrays"
tags: ["JavaScript", "arrays", "objects", "map"]
---
If an array contains flat values, we can quickly turn those into objects by mapping over them. The name we give them in .map() becomes the name of the property when we do it like this.

```js
// turn these strings into objects, where they become `name`-properties
['John', 'Paul', 'George', 'Ringo'].map(name => ({ name }))
// ⇒ [
//     { name: 'John'   },
//     { name: 'Paul'   },
//     { name: 'George' },
//     { name: 'Ringo'  }
//   ]
```
