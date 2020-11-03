---
title: "End of an era"
excerpt: ""
---
Working with times and dates in JavaScript is no fun. The language has a few quirks, like numbering months starting at 0 instead of 1. According to JavaScript, January is month 0 and December is month 11. Timezones based on location and formatting based on language are similarly annoying.

Instead of doing all that date math or formatting ourselves, we can use libraries that do those very well. For the last few years, [Moment.js](https://momentjs.com) was a popular choice for this functionality. It can parse, validate, manipulate, and display dates and times in any way you want. It’s been reliable, but also pretty heavy. You’d always have to include the full library in your JavaScript, even if you only used a tiny part of it. When we checked what went into our bundle, Moment was one of the main contributors, with no way to reduce the size.

Earlier this week, the team behind Moment declared the project legacy. It will remain available, but they won’t make any significant changes to it. You are free to keep using it forever, but don’t expect any improvements.

In [their announcement](https://momentjs.com/docs/#/-project-status/), they already point to alternatives. In many scenarios, date libraries are not even necessary anymore. The [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) makes much of the formatting available in JavaScript natively.

We recently moved to [date-fns](https://date-fns.org), which offers the same functionality we used from Moment. It is modular, which allows us to use only the features we need without including everything else as well. The move from Moment to date-fns was very easy.

Moment was an excellent choice for years, and the team behind it deserves a lot of praise. Now that there are more modern alternatives, deprecating it is a difficult but good move from them. If you have not made the switch away from Moment yet, now might be a good time.

– Dom
