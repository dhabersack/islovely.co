---
date: 2013-03-14
summary: By using proxied variables, CSS-preprocessors allow us to use semantically correct color-names that can easily and comfortably be changed.
title: Color palettes with Sass
---
If you are using [Sass](http://sass-lang.com/), [Less](http://lesscss.org/) or some other CSS-preprocessor, you are probably using variables to easily manage color-values in your stylesheets. In [TODO](/), I showed a naming convention for variables in which their semantic value is used instead of their color-value.

After this convention, we might use `$color-brand` instead of `$blue`, `$color-success` instead of `$green`, and `$color-error` instead of `$red`.

Consider the following error message:

!some-image.jpg!

In this, we use more than one red color. The background color is lighter than the border color, which is lighter than the color of the text.

To achieve this distinction, we could create very specific variables:

```
@error-background-color: @darkred;
@error-border-color: @darkred;
@error-text-color: @darkred;
```

This makes these variables too specific.

To make the process of deciding on a color easier, we can go with different shades of the same base color rather than completely different values of it.

Sass (and other preprocessors) make this really easy through functions such as the `darken` and `lighten`. These usually take a color and a value by which to either darken or lighten that color.

For most cases, five different shades of a color are sufficient. My naming convention is close to the BEM naming convention I often use in the remainder of my projects, in that I define the variations using BEM’s modifier syntax:

- the base color, such as `@color-error`
- lighter version of the base color, such as `@color-error--lighter`
- lightest version of the base color (`@color-error--lightest`)
- darker version of the base color (`@color-error--darker`)
- darkest version of the base color (`@color-error--darkest`)


```
@color-error: @red;
@color-error--
```