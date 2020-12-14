---
title: "The easiest way to build a Dark Mode"
excerpt: "Media queries are essential for doing Responsive Design. They can test for many features beyond browser width. We can use one of them to build a dark mode."
issue: 66
author: dom-habersack
---
Most operating systems natively support dark mode now. I have become so used to it that anything without a dark theme becomes painful in the evening.

As I gave my website a minor visual refresh this week, I often coded into the evening. When everything else switched to dark mode, my website stayed in its light theme. A dark mode would be nice, but that sounded like a lot of work.

Little did I know that browsers and CSS have caught up. Adding a dark mode to websites is not hard anymore. The easiest way to build one is with our good old friend, the media query.

Detecting browser widths with media queries is essential for building responsive designs. They can also check for other media features, like a display’s pixel density or a device’s orientation.

The feature `prefers-color-scheme` detects if the system is set to a light or dark color scheme. In the same way we’d do [progressive enhancement](/newsletter/archive/progressive-enhancement-with-at-supports), we can add styles for a dark mode with this.

The un-queried version is our light theme. In a media query that checks for a dark mode preference, we override some styles as necessary.

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

We mostly need to change colors to turn a light theme into a dark theme. Many other styles can stay as they are, which makes it pretty easy to add a dark mode to an existing website. By using the media query, we can switch back and forth by changing which mode our operating system is set to.

I’m about an hour into experimenting with this on my own website, and it looks like I’m almost done. I would release it, but I’m too busy switching back and forth between light and dark mode. It’s too fun to see everything update instantly.

There is another, more complicated way to do the theme switch that does not rely on the media query. We could add a toggle that allows people to pick the theme. I’m not sure it’s worth the extra effort if the media query works so well.

What do you think? Is the media query “good enough” or do you prefer the sites you visit to have a theme toggle somewhere?

– Dom