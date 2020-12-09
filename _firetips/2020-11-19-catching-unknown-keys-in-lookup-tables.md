---
title: "Catching unknown keys in lookup tables"
tags: ["JavaScript"]
---
The lookup table pattern can replace some long if-else branches and switch statements. We can catch unknown keys we don’t have values for with `hasOwnProperty`.


```css
button {
  background: blue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
}

/* override some button styles for dark mode */
@media (prefers-color-scheme: dark) {
  button {
    background: red;
    color: white;
  }
}


input[type="text"] {
  background: white;
  color: black;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
}

/* override some text input styles for dark mode */
@media (prefers-color-scheme: dark) {
  input[type="text"] {
    background: black;
    color: white;
  }
}
```

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