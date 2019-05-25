---
title: Writing high-performance CSS
category: CSS
excerpt: Aside from the established best practices for reducing load times, a few things that can be done to stylesheets to make browsers render pages faster.
heroAlt: Goal markers on a running track.
heroCaption: We can reduce the time it takes browsers to interpret stylesheets by following a few best practices.
---
**Disclaimer:** Browsers are incredibly fast at parsing CSS, which makes gains through optimization marginal at best. There are a lot of other areas to tackle first to improve load times, like lowering the number of requests as well as file sizes of assets such as stylesheets, images and JavaScript.

Because they are not going to have a massive impact on performance, stylesheet-optimizations should always be **motivated by readability and maintainability first**. There are a few simple rules on how to write CSS that benefit these areas as well as performance without requiring major changes to your current workflow.

Any benefit you will see after following these rules is likely primarily due to ending up with smaller files. Consider the following a collection of “best practices” when it comes to writing not only efficient but also clean CSS.

## Efficient selectors

The rule of thumb is to always **use the simplest selector that matches**, which can be achieved by applying these techniques:

### Understand hierarchy-matching

If you are not sure how CSS gets applied to markup, you should first read my post on [understanding CSS hierarchy-matching](#!/posts/understanding-css-hierarchy-matching). It aims at giving a top-level overview essential for understanding the remaining recommendations.

Once you feel comfortable with this subject, you should see why the star selector (`*`) should never be used: it forces the browser to evaluate every single element on the page without limitation.

### Drop nonessential selectors

Selectors are evaluated from right to left, so make sure that the rightmost selector in your chain is as specific as possible. This often completely removes the need for some or all of the other selectors in the chain, which should be dropped whenever they are not absolutely required.

Elements in a selector should be omitted if they try to mimic HTML too closely without increasing clarity. For example, `table tr td` can be shortened to `td`, because every table data-tag is going to appear in this manner. The same applies to all other types: use only what you need to unambiguously identify the element you are looking for.

### Favor child selectors over descendant selectors

Descendant selectors (spaces) usually perform worst because they require the entire hierarchy to be searched for all occurrences of the rightmost selector. For example, `p a` forces a browser to search all links on a page before checking which of them is nested in a paragraph _somewhere_ in its hierarchy. The more of these you add, the more loops will have to be executed to figure out if a selector does or does not match the element(s) found initially.

Child selectors (`>`) perform slightly better than descendant selectors because they only have to check one additional layer of parental tags for all occurrences of the element on their right side, but should still only be used if they cannot be avoided.

### Prefer tag-less class- and ID-selectors

Class- and ID-selectors match fastest and should be used whenever possible.

Never tag-qualify when using an ID since it already is the most explicit selector and only tag-qualify when using a class when unavoidable. `tag#id` should always be `#id`, `tag.class` should be `.class` if possible, meaning all cases where the given class is only ever found with the same tag.

### Use one ID per chain at most

Since an ID is unique on any given page, requiring it to appear in another unique element results in a wasted cycle of the rendering engine.

You can nest one ID in a page-level class (usually set on the `body`-tag) if it behaves differently on different pages, but selectors should never contain multiple IDs. In most cases, you want to drop as many selectors as you can left of the rightmost ID: `.post #content header #author a` should be `.post #author a` or `#author a`, depending on whether or not you need the page-level class.

### Go with short instead of clever

The longer a selector is, the longer it will take the browser to match it to an element in the DOM. Selectors with fewer levels are not only easier to read but are also going to perform better. Always go for removing a level when deciding between using multiple child selectors or removing a level.

### With great power&hellip;

Since classes perform second-best, adding a class of its own name to each tag would have a significant increase in performance in all browsers, i.e. writing `<h1 class="h1">` so it can be selected with `.h1`. However, this is a maintenance-nightmare. Do not do this unless rendering is a major bottleneck, which is _very_ unlikely.

If a selector consisting of multiple tags contains a class somewhere, a new class could be added to the last element and used as the only selector. For example, `.main header h1` could be condensed to a single class, with the heading gaining this class in the markup (`<h1 class="main-header-heading">`). This is going to have a negative effect on the markup in most cases and should only be used if safely applicable. Clean markup always trumps short selectors.

### Examples

In accordance with the above rules, these selectors:

{% highlight css %}
header nav ul li a#login {}
table > thead > tr > th {}
ul.navigation > li a {}
{% endhighlight %}

can safely be rewritten as:

{% highlight css %}
#login {}
thead th {}
.navigation a {}
{% endhighlight %}

## Efficient rules

Browser hacks relating to selectors (like `* html`) should be avoided because they tend to require redefinition of both the problem properties and all other properties, leading to duplicate code.

If hacks cannot be avoided, property hacks like the star for IE7 and earlier (i.e. `*margin: 0;`) and the underscore for IE6 and earlier (i.e. `_margin: 0;`) should be used. These hacks should be used if IE-filters like `AlphaImageLoader` are absolutely required and avoided in all other situations.

To avoid IE from slowing down a whole lot, pseudo-elements like `:hover` should not be applied to non-link elements.

## Performance impact of CSS preprocessors

Preprocessors **do not impact the performance** of CSS when used correctly.

Writing bad stylesheets for preprocessing will result in bad stylesheets just the same as writing bad plain text stylesheets will. The primary concern lies in nesting selectors, which does increase the ability to easily find selectors because they can be organized to more closely mimic markup, but should never be nested deeper than absolutely necessary to be unambiguous.

Consider the following CSS as written in [Sass](http://sass-lang.com/ 'Sass - Syntactically Swesome Stylesheets'):

{% highlight scss %}
dl {
  overflow: hidden;

  > dd {
    clear: left;
  }

  > dd,
  > dt {
    float: left;
    width: 50%;
  }
}
{% endhighlight %}

While this makes it obvious that definition terms and definition descriptions are always nested in definition lists, this is the only way they _can_ appear, so the nesting should be removed and the rules rewritten as:

{% highlight scss %}
dd {
  clear: left;
}

dd,
dt {
  float: left;
  width: 50%;
}

dl {
  overflow: hidden;
}
{% endhighlight %}

Preprocessors do not result in a decrease in performance when respecting the aforementioned rules, assuming they are deployed as static assets and not processed client-side.

Styles should not require JavaScript to run on the client side, so all stylesheets running through preprocessors should be compiled and minified before deployment. Both Sass and [Less](http://lesscss.org/ 'LESS « The Dynamic Stylesheet language') offer this functionality out of the box. To compress stylesheets in Sass, compile your files with the `--style compressed` flag set.

## Stylesheet delivery

In addition to minification, stylesheets should be gzipped before delivery for a further decrease in filesize. Browsers have been able to deal with gzipped CSS-files for a long time. This is a server-side configuration (mod_gzip in Apache 1.3, mod_deflate in Apache 2.x).

## Further reading

The information in this post has mostly been rounded up from these sources, which may contain additional information for those that want to learn more about the topic:

* [Optimize browser rendering (Google Developers)](https://developers.google.com/speed/docs/best-practices/rendering 'Optimize browser rendering')
* [CSS: Using every declaration just once (Google Developers)](https://developers.google.com/speed/articles/optimizing-css 'CSS: Using every declaration just once')
* [Writing efficient CSS (Mozilla Developer Network)](http://developer.mozilla.org/en/Writing_Efficient_CSS 'Writing efficient CSS')
* [High Performance CSS code design (Eddie Welker)](http://eddiewelker.com/2011/04/06/high-performance-css-code-design/ 'High Performance CSS code design')
* [Efficiently Rendering CSS (CSS-Tricks)](http://css-tricks.com/efficiently-rendering-css/ 'Efficiently Rendering CSS')
