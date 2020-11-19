---
title: "Catching unknown keys in lookup tables"
tags: ["JavaScript"]
---
The lookup table pattern can replace some long if-else branches and switch statements. We can catch unknown keys we don’t have values for with `hasOwnProperty`.

```js
const getColorOf = thing => {
  const map = {
    clouds: 'white',
    grass: 'green',
    sky: 'blue',
  }
  
  // throw an error if `thing` isn’t a key in the map
  if (!map.hasOwnProperty(thing)) {
    throw new Error(`Color not defined for: ${thing}`)
  }

  // if we get here, `thing` IS a key in the map
  return map[thing]
}

getColorOf('grass')  // ⇒ 'green'
getColorOf('air')    // ⇒ Color not defined for: air
getColorOf()         // ⇒ Color not defined for: undefined
```