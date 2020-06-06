---
title: "Poor man’s debugging, but cooler"
excerpt: "We can access the variables logged to the browser’s Dev Tools to do more with them."
emoji: ":dark_sunglasses:"
---
As far as debugging methods go, good old `console.log` does not get enough love. While full debugger-sessions are nice, sometimes a boring log message is all you need. Browsers have a neat feature that makes those messages much more helpful when we’re trying to fix bugs.

Console logs are convenient, because they don’t interrupt the execution of code. Messages appear as they happen, and we can manually inspect any logged variables.

```js
console.log({
  name: 'Arcadia',
  villagers: [
    'Rory',
    'Plucky',
    'Norma',
    'Hugh',
    'Zell',
    'Puddles',
    'Octavian',
    'Yuka',
    'Sprocket',
    'Alfonso'
  ]
})
```

That works well enough, but we cannot **do** anything with that data besides look at it. We can supercharge that workflow with a feature available in many dev tools.

Most browsers allow us to **take any log output and assign it to a variable**. In Safari, right-clicking any log output reveals an action called “Log Value”. This action assigns the selected value to variables called `$1`, `$2`, `$3` and so on. Chrome calls that same action “Store as global variable”, and the variables  `temp1`, `temp2`, etc.

Once assigned to a variable, we can play around with that data right in the console. Instead of manually inspecting my island, we can sort its villagers and see the result:

```js
// replace `$1` with `temp1` if you’re using Chrome
const sortedVillagers = $1.villagers.sort()

console.log(sortedVillagers)
// => ["Alfonso", "Hugh", "Norma", "Octavian", "Plucky",
//     "Puddles", "Rory", "Sprocket", "Yuka", "Zell"]
```

This is particularly helpful when inspecting larger, more complex objects. You could log an entire catalog of product objects and quickly test your filter logic in the browser.

This little trick has made my life a lot easier recently. There are so many cool features hidden in the browsers’ development tools. I’m looking to expand my repertoire, so please share your favorites!

– Dom