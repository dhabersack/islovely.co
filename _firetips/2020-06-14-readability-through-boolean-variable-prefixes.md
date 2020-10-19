---
title: "Readability through Boolean variable prefixes"
tags: ["clean code", "readability"]
---
Prefixes like “is”, “has”, or “does” help emphasize that a variable holds a Boolean value.

```js
if (monday) {
  // 👎 `monday` could be the date of next Monday. You wouldn’t expect this
  // to be `true` or `false`.
}

if (isMonday) {
  // 👍 This reads like the question “is Monday?”, which you would answer
  // with “yes” or “no”. The name tells you that this has to be Boolean.
}


if (children) {
  // 👎 `children` could be a list of names or whether a person has children
  // or not. It’s difficult to tell if this is an array or a Boolean.
}

if (hasChildren) {
  // 👍 You can only read this as “has children?”, which is either `true` or
  // `false`. Ideally.
}


if (rocks) {
  // 👎 Could be the name of your favorite rocks, like “The” or “30”.
}

if (doesRock) {
  // 👍 This does rock, `true`. Note how it’s not called `doesRocks`, which
  // would read a little awkward.
}
```
