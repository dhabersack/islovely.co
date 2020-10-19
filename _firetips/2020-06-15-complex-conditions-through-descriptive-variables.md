---
title: "Complex conditions through descriptive variables"
tags: ["clean code", "readability"]
---
A few well-named variables go a long way towards making code more self-explanatory. Readability is worth a few extra lines; your future self will thank you!

```js
// 👎 it’s hard to see what this combination of conditions does
if (!(currentDay === 'Saturday' || currentDay === 'Sunday') &&
    currentHour >= 9 && currentHour <= 18) {
  return 'The store is open!'
}


// 👍 by assigning the conditions to variables, we can use their names to
// explain the logic behind our code in plain language
const isSaturday = currentDay === 'Saturday'
const isSunday = currentDay === 'Sunday'

const isWeekend = isSaturday || isSunday

const isDuringBusinessHours = currentHour >= 9 && currentHour <= 18

if (!isWeekend && isDuringBusinessHours) {
  return 'The store is open!'
}
```
