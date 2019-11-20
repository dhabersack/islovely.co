---
title: Writing utility-first CSS with Sass
category: [CSS, Sass]
date: 2019-11-19 9:07
excerpt: We can use maps and loops in Sass to auto-generate many classes used in utility-first CSS.
hero_alt: Three potted plants vertically aligned in a row. They look almost identical and only differ in their color.
hero_caption: These look almost identical. It’ll make sense in a bit.
---
Utility-first CSS uses many small utility classes that each have a very specific job. You can tell what they do by their descriptive names. `.color-red` colors text red, `.font-size-l` gives it a large font-size, and `.margin-s` gives it a small margin. [Tailwind CSS](https://tailwindcss.com) is a utility-first framework that is growing in popularity. If you want to build your own Tailwind, you’ll need to write a lot of small rules. We can use Sass to reduce the manual work required for this by a lot.

Most of the rules we need in utility-first CSS do very little. One rule might control only the color of the text, while another controls only its weight. Depending on how many colors and weights we want to use, we need a lot of those small rules. If our design uses five different font sizes, we need five different rules:

{% highlight sass %}
.font-size-xs {
  font-size: 1.2rem;
}

.font-size-s {
  font-size: 1.6rem;
}

.font-size-m {
  font-size: 2.0rem;
}

.font-size-l {
  font-size: 3.2rem;
}

.font-size-xl {
  font-size: 4.8rem;
}
{% endhighlight %}

These rules all look very similar. The size in the selector (`xs`, `s`, etc.) and the value of the `font-size` change, while everything else remains the same. These rules all follow the same pattern:

{% highlight sass %}
.font-size-[SIZE] {
  font-size: [VALUE];
}
{% endhighlight %}

We can use these similarities to our advantage and have Sass generate the rules for us in a loop. To prepare this, we first extract the size-value-pairs to a [Map](https://sass-lang.com/documentation/values/maps). We can then loop over the pairs using an `@each`-loop:

{% highlight sass %}
$font-sizes: (
  "xs": 1.2rem,
  "s":  1.6rem,
  "m":  2.0rem,
  "l":  3.2rem,
  "xl": 4.8rem
);

@each $size, $value in $font-sizes {
  // do something with $size and $value
}
{% endhighlight %}

Writing it as `#{$size}`, we can add the size to the selector through [interpolation](https://sass-lang.com/documentation/interpolation). We can use the `$value` directly in the body of the rule:

{% highlight sass %}
$font-sizes: (
  "xs": 1.2rem,
  "s":  1.6rem,
  "m":  2.0rem,
  "l":  3.2rem,
  "xl": 4.8rem
);

@each $size, $value in $font-sizes {
  .font-size-#{$size} {
    font-size: $value;
  }
}
{% endhighlight %}

Sass takes these instructions and generates the exact same CSS we wrote by hand before. To add a rule for `.font-size-xxl`, we add a new entry to our map and Sass does the rest:

{% highlight sass %}
$font-sizes: (
  "xs":  1.2rem,
  "s":   1.6rem,
  "m":   2.0rem,
  "l":   3.2rem,
  "xl":  4.8rem,
  "xxl": 6.0rem // <-- new entry
);
{% endhighlight %}

In utility-first CSS, we set an element’s `background-color` through classes like `background-color-red`. Written by hand, a few of these rules would look like this:

{% highlight sass %}
.background-color-red {
  background-color: #f45a5a;
}

.background-color-green {
  background-color: #3fb26d;
}

.background-color-blue {
  background-color: #398fdd;
}
{% endhighlight %}

Writing many of those out by hand would be tedious. We can apply the same pattern we used for the font-sizes:

{% highlight sass %}
$colors: (
  "red":  #f45a5a,
  "green: #3fb26d,
  "blue:  #398fdd
);

@each $color, $value in $colors {
  .background-color-#{$color} {
    background-color: $value;
  }
}
{% endhighlight %}

It is common to use more than one shade of the same color. Instead of using a single red, we might want to use a light, medium, and dark shade of red. After adding these qualifiers to all rules, they would look something like this:

{% highlight sass %}
.background-color-red-light {
  background-color: #fea9a9;
}

.background-color-red-medium {
  background-color: #f45a5a;
}

.background-color-red-dark {
  background-color: #be2a2a;
}

.background-color-green-light {
  background-color: #8fe2ab;
}

.background-color-green-medium {
  background-color: #3fb26d;
}

.background-color-green-dark {
  background-color: #2a7a50;
}

.background-color-blue-light {
  background-color: #85c6f2;
}

.background-color-blue-medium {
  background-color: #398fdd;
}

.background-color-blue-dark {
  background-color: #2661a7;
}
{% endhighlight %}

We could achieve this by using longer keys in our `$colors`-map and leaving the `@each`-loop unchanged:

{% highlight sass %}
$colors: (
  "red-light":    #fea9a9,
  "red-medium":   #f45a5a,
  "red-dark":     #be2a2a,
  "green-light":  #8fe2ab,
  "green-medium": #3fb26d,
  "green-dark":   #2a7a50,
  "blue-light":   #85c6f2,
  "blue-medium":  #398fdd,
  "blue-dark":    #2661a7
);

@each $color, $value in $colors {
  .background-color-#{$color} {
    background-color: $value;
  }
}
{% endhighlight %}

This would work, but there is still some duplication in there. As we have written it now, we still have to repeat the name of the color in each of its variations. Instead of writing “red” once, we have to repeat it three times. This problem multiplies with the numbers of colors and shades we want to use in our design.

We can clean this up by nesting lists. Instead of mapping names to hex-values, we map them to _other_ maps that contain the shades. To access them in our loop when building the rules, we add a second `@each` in the body of our original `@each`:

{% highlight sass %}
$colors: (
  "red": (
    "light":  #fea9a9,
    "medium": #f45a5a,
    "dark":   #be2a2a
  ),
  "green": (
    "light":  #8fe2ab,
    "medium": #3fb26d,
    "dark":   #2a7a50
  ),
  "blue": (
    "light":  #85c6f2,
    "medium": #398fdd,
    "dark":   #2661a7
  )
);

@each $color, $values in $colors {
  @each $shade, $value in $values {
    .background-color-#{$color}-#{$shade} {
      background-color: $value;
    }
  }
}
{% endhighlight %}

We can transfer this same approach to `color`, `margin`, `padding`, and other properties. Sass can auto-generate many of the more repetitive classes needed in utility-first CSS. Using this approach, we are already close to building our own utility-first framework.
