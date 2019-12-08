---
title: ":man_dancing: Stress-test your layouts in disco mode"
excerpt: ""
---
In most teams I work in, people still talk about mobile-, tablet- and desktop-layouts. Those terms worked well when the lines between those classes were well-defined. Smartphones were always exactly 320 pixels wide, tablets started at 768 pixels. It’s been _years_ since that has been the case. We now have large phones, small tablets, and [frankenphones that are kind of both](https://www.samsung.com/global/galaxy/galaxy-fold/).

Accounting for its high pixel density, the iPhone 11 Pro Max shows websites at 414×896 pixels. It will show “tablet layouts” in landscape mode if those layouts start at 768 pixels. **That is fine!**

As screens grow, it’s okay to show more on them. That is the point of larger phones. We need to change how we think about breakpoints. Start by replacing the names “mobile”, “tablet”, and “desktop” with “small”, “medium”, and “large”. Where do these new breakpoints begin and end? I couldn’t tell you, because there is no single set of values that works for every layout.

I’ll write a post on this soon. For now, you can use Brad Frost’s viewport resizer [ish](http://bradfrost.com/demo/ish/). At first glance, it looks like your browser’s development tools: you can see a website at different sizes. The cool part of this is that the dimensions behind its sizes are not fixed. Each time you select “M”, you get a new width. This mirrors how medium-sized devices don’t all share the exact same dimensions.

To really put your layout to the test, put ish in disco mode to see if there are still viewport widths you don’t cover well. I’ll go first: [islovely.co/posts in ish’s disco mode](http://bradfrost.com/demo/ish/?url=https%3A%2F%2Fislovely.co%2Fposts%2F#disco)

– Dom

PS: ish was [released in 2012](https://bradfrost.com/blog/post/ish/), and we’re still talking about “tablet layouts”.
