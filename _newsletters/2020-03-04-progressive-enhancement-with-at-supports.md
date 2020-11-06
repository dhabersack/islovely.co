---
title: "Progressive enhancement with @supports"
excerpt: "With @supports, we can start using features that will come to CSS soon in supporting browsers today."
edition: 26
---
Designing beautiful websites is getting easier. [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) and [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) enable layouts that were impossible before. [Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms) and [filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) add visual effects that would be difficult to build otherwise. Unfortunately, not all browsers support all those cool new features yet.

Internet Explorer is no longer the anchor holding us back. Today’s browsers all support these sometimes experimental features to a different degree. Some support [grid](https://caniuse.com/#feat=css-grid), some support [backdrop-filter](https://caniuse.com/#feat=css-backdrop-filter), some support [WebP](https://caniuse.com/#feat=webp), some support [sticky headers](https://caniuse.com/#feat=css-sticky). No single browser supports every upcoming feature.

We can approach this situation in several ways, and they all have their drawbacks:

- We can avoid using the new capabilities until all browsers support them. That could take years.
- We can go all-in on our favorite browser and ignore all others. Our layouts will look good in a single browser, but break in many of the others.
- We can use “polyfills” that enable the features in more browsers, usually through a lot of JavaScript. Throwing more code at a problem adds complexity and new points of failure to our products.

Trying to make the exact same design happen in every browser is not worth these tradeoffs. Instead, we can deliver a basic styling that is “good enough” and works everywhere. We can then enhance that version with the new features only for browsers that support them.

With [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports), we can adjust the styling based on which features a browser supports. We could use a plain layout everywhere, and improve it with grid in browsers that understand it.

As soon as a new browser supports a feature, the feature-gated styles will work for it. This is much more future-proof than building IE-only stylesheet like we did a few years ago. @supports is the future.

– Dom