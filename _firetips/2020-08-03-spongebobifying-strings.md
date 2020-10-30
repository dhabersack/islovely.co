---
title: "Spongebobifying strings"
tags: ["JavaScript", "ES6", "strings", "reduce"]
---
Want to use JavaScript to make Spongebob memes? This function transforms a StRiNg LiKe ThIs. It turns the first letter into uppercase, and then alternates between lowercase and uppercase for all following letters.

```js
const spongebobify = string => {
  return string.split('').reduce(({ result, isUppercase }, char) => {
    // check if the character is a letter from a to z (upper- or lowercase)
    if (/[a-zA-Z]/.test(char)) {
      // change the casing of the letter
      const letter = isUppercase ? char.toUpperCase() : char.toLowerCase()

      // append updated letter and flip `isUppercase` for next iteration
      return {
        result: `${result}${letter}`,
        isUppercase: !isUppercase
      }
    }
    
    // append unchanged non-letter (like numbers), keep `isUppercase` as is
    return {
      result: `${result}${char}`,
      isUppercase
    }
  }, {
    // these are the default values we go into the reduce-function with
    result: '',
    isUppercase: true
  }).result
}

// this has very little practical use
spongebobify('string like this')     // ⇒ StRiNg LiKe ThIs
spongebobify('This is a seaplane.')  // ⇒ ThIs Is A sEaPlAnE.
```
