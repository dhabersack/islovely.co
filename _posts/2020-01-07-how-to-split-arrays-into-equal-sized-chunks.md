---
title: How to split arrays into equal-sized chunks
categories: ["JavaScript"]
excerpt: JavaScript does not provide a function to split arrays into several smaller arrays. Let’s build one ourselves.
heroAlt: A lot of rubber ducks, neatly organized on shelves.
heroCaption: Look at all these neatly grouped rubber ducks.
---
JavaScript provides a way to split strings into arrays with [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split). If we want to split arrays into smaller arrays, we have to do so by hand, as there is no native function for that. To break a long list of elements into smaller groups, we can use a combination of [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

Let’s say we have a lot of ducks. In the beginning, we have all our ducks in a ~~row~~ single array:

```js
[🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆]
```

We want to neatly organize our ducks. Because they don’t all fit on a single shelf, we want to put them on several smaller shelves. We know that each shelf holds four ducks, so we want to group them like this:

```js
[
  [🦆, 🦆, 🦆, 🦆],
  [🦆, 🦆, 🦆, 🦆],
  [🦆, 🦆, 🦆, 🦆]
]
```

Instead of containing ducks directly, this array contains three smaller arrays. Each of _these_ arrays then contains a set of four ducks. We can write a function to build this structure for us:

```js
const chunkArray = (array, chunkSize) => {
  const numberOfChunks = Math.ceil(array.length / chunkSize)

  return [...Array(numberOfChunks)]
    .map((value, index) => {
      return array.slice(index * chunkSize, (index + 1) * chunkSize)
    })
}
```

This function takes an array and chunk size and returns it grouped into chunks of that size. If we cannot split the values evenly, the last chunk will contain fewer elements:

```js
chunkArray([🐭, 🐭, 🐭, 🐭], 2)
// => [
//      [🐭, 🐭],
//      [🐭, 🐭]
//    ]

chunkArray([🐱, 🐱, 🐱, 🐱, 🐱, 🐱], 3)
// => [
//      [🐱, 🐱, 🐱],
//      [🐱, 🐱, 🐱]
//    ]

chunkArray([🐶, 🐶, 🐶, 🐶, 🐶, 🐶, 🐶], 4)
// => [
//      [🐶, 🐶, 🐶, 🐶],
//      [🐶, 🐶, 🐶]
//    ]
```

Let’s look at how this works line by line:

```js
const chunkArray = (array, chunkSize) => {
```

The function `chunkArray` takes an array and the desired size of each chunk in its parameters.

```js
const numberOfChunks = Math.ceil(array.length / chunkSize)
```

We need to know how many groups, or chunks, we need if we want to split the array into sets of the desired size. We get that value by dividing the number of elements in the array by the number of elements we want to have in each chunk. Four or eight ducks fit into four-element chunks nicely. To split six ducks into groups of four, we would need 1.5 chunks, because 6 divided by 4 is 1.5.

Each chunk is an array. Because there are no half arrays, we round the result to the next-largest integer with [`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil). For our six ducks, we need to use _two_ chunks to split them in groups of four. The second chunk will be half empty, which is okay.

On to the next line.

```js
return [...Array(numberOfChunks)]
```

Now that we know how many chunks we need, we create an outer array with this many empty spaces. [`Array(length)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) returns an array that has its `length` set to the value we pass to it. That array is _empty_. It does not even contain `undefined` values:

```js
Array(3)
// => []

Array(3).length
// => 3
```

We want to iterate over these spaces with `map()` in the next step. Because we cannot iterate over an empty array, we need to put values into those empty spaces. We initialize a new array from the one we already created using the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). This way, the new array has the same length as the previous one, with each value set to `undefined`:

```js
[...Array(3)]
// => [undefined, undefined, undefined]
```

We can now iterate over this array with `.map()`:

```js
.map((value, index) => {
```

The `value` will be `undefined` in each iteration. We don’t care much about the value, but we will use the `index`. If we split the array into three groups, the index goes from `0` to `2`. We will use that to grab shorter sections out of the array next.

```js
return array.slice(index * chunkSize, (index + 1) * chunkSize))
```

[`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) returns a shallow copy of the array we call it on. Both parameters are index values that refer to positions in the array. When extracting a partial copy, `slice()` starts at the first value and stops before the second value. If the second value is greater than the length of the array, it stops at the end of the array:

```js
[🐭, 🐹, 🐰, 🦊, 🐨].slice(0, 2)
// => [🐭, 🐹]

[🐭, 🐹, 🐰, 🦊, 🐨].slice(2, 4)
// => [🐰, 🦊]

[🐭, 🐹, 🐰, 🦊, 🐨].slice(4, 6)
// => [🐨]
```

We use each chunk’s `index` to calculate the parameters for `slice()`. By multiplying it by the size of each chunk, we copy groups of that many values from the array. If our `chunkSize` is `4`, these are the slices we would extract:

```js
// index = 0
array.slice(0, 4)

// index = 1
array.slice(4, 8)

// index = 2
array.slice(8, 12)
```

`map()` returns a new array. Instead of several `undefined` values, our function returns slices of the original array. Each of these slices is one chunk that contains four items. The outcome looks exactly like what we wanted:

```js
chunkArray([🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆, 🦆], 4)
// => [
//      [🦆, 🦆, 🦆, 🦆],
//      [🦆, 🦆, 🦆, 🦆],
//      [🦆, 🦆, 🦆, 🦆]
//    ]
```

## What would I use this for?

Why would we want to chunk arrays into smaller groups in the first place? There are more realistic use cases than organizing ducks on shelves. Instead of emoji, our array could contain more complex items.

The array could hold posts we want to show on a news feed. To inject an ad slot after every tenth post, we _could_ use a counter that keeps track of the posts while we show them. Every time that counter is divisible by ten, we could inject an ad before continuing with the next post. Keeping track of that counter is messy and likely to lead to errors.

If we split the posts into chunks of ten instead, we don’t need this counter anymore. We can take the long list of posts, split it into smaller groups, and place an ad between each of the groups.

The array could also hold product reviews instead of ducks or posts on a news feed. To not overwhelm users with all reviews at once, we can show them in batches. We could show five reviews at first, and then reveal the next five with every use of a “show more”-action.

Whenever we want to inject something in an array at regular intervals, we can chunk the array first.
