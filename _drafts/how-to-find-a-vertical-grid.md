## How to find a vertical grid

Thanks to CSS frameworks like [960.gs] and [Blueprint], people are aware of the fact they should use some kind of horizontal grid. Finding a vertical grid tends to be more difficult.

Vertical grids are primarily centered around typography, in particular around the CSS-attributes `font-size` and `line-height`. [The Elements of Typographic Style Applied to the Web] offers an excellent in-depth write-up on the benefits of using vertical grids.

I generally write elastic width layouts (more about those by [456 Berea St][456 Berea St on elastic layouts] and [Jon Tan][Jon Tan on elastic layouts]), which are entirely based on the `em`-value mentioned in the article mentioned above. `em`-values come with one restriction that makes vertical grids difficult to maintain: values can only have three decimal places, all further digits are ignored. To avoid rounding errors across different browsers, I am going to stick to values conforming to that condition.

This restricts us to using just a few `font-sizes`. Depending on your preferences or requirements, you will have to use a different vertical grid. With a few simple steps you can find the ideal vertical grid for your needs.

### Step one: Requirements

There are a few things we want from our vertical grid:

  1. The base `font-size` should be no smaller than 9px to be legible.
  3. The base `line-height` can be expressed with an `em`-value with no more than three decimal places.
  4. The base `line-height` should be bigger than the base `font-size`, but smaller than the base `font-size` times two.
  5. Multiple `font-size`s smaller than the `line-height` should be available for use through `em`-values.
  6. There are values smaller than the base `line-height` we can calculate to use for `border`s, `padding`s and `margin`s without breaking the vertical grid (i.e. `line-height` / 2).
  7. Optional: We can calculate back to 10px using a valid `em`-value (rarely required to conform to the horizontal grid).

For example, a base `font-size` of 12px and a base `line-height` of 18px would fulfill those requirements:

  1. 12px >= 9px
  2. 12px <= 20px
  3. 12px * __1.5em__ = 18px
  4. 18px > 12px and 18px < 24px
  5. __12px__ * 1.5em and __15px__ * 1.2em both equal 18px
  6. 12px * 0.75em = 18px / 2
  7. not possible

### Step two: Setup

### Step three: Implementation

We cannot simply copy the values as returned by our script. If we were to set a value of `1.2em` somewhere in our script, the resulting `font-size` would not equal `12px`, but most likely `19.2px`.

The reason for this is that all browsers supply the `body` element with a default `font-size`. This is *usually* `16px`, although it could in theory be reset by a user through his browser's configuration (for Chrome on OS X, see Chrome > Preferences… > Under the Hood > Change font settings). This, however, does not concern us after we write an elastic design: it is going to scale no matter what base `font-size` is set by our visitors browsers. That, in fact, is the whole point of this exercise.

Since most visitors probably haven't reset their browser's default `font-size`s, it is save to assume it is set to `16px` (although it does not make the slightest difference). Hence we set the base `font-size` of our `body`-tag to 62.5% (16px * 62.5% = 10px) to get a base `font-size` of `10px` to simplify calculating dimensions in the rest of our stylesheet:

    body {
      font-size: 62.5%;
    }

From this point on, a value of `1em` equals `10px` __until we set a new `font-size`__.

But why do we use `62.5%` and not `10px`, if that is what we really want at this point?

The reasoning behind this is simple:

We do not *really* want to get to `10px`. We just want to get to something that makes our `em`-calculations easier to understand. When using an elastic layout, it does not make a difference if it is based on `10px` or `100px`: it is going to look the same either way (just slightly larger in the second case).

Also, we want our dimensions to be relative to the default value set in the visitors browser. Imagine a visually impaired visitor who changed his browser's default font size to `36px`. He probably had a pretty good reason for doing that and expects web sites to comply with his settings. By setting our `font-size` in percent we start from that value.

If we were to start from a fixed `10px`, this visitor's altered settings would have no effect: our site would not scale to his expectations, but instead be far too small for his needs.

### Tips for using `em`-values

After writing elastic layouts for a while, I have come up with a couple of *best practices* when it comes to using `em`-values:

  * __DO NOT__ set a new `font-size` on outer containers like `header` or `div`. Instead, only use them on the lowest possible level, like `p` or `li`.
  * __DO__ include `li > ol > li, li > ul > li { font-size: 1em }` in your stylesheet if you use nested lists in your markup. If you need to set different `font-size`s for different levels of your nested list, write the rules using the child selector (`>`).
  * __DO__ include comments containing the dimensions in pixels in your stylesheet whenever you use `em`-values that are not based on a `font-size` of `10px`:

        p {
          font-size: 1.2em; /* 12px */
          line-height: 1.5em; /* 18px */
        }

    Note that these values are *only* correct if your visitor has not changed his default font settings.

### Final notes

I wrote a Ruby Gem, [CSSensible], that does this exact job for you. All you have to do is feed it a few `font-size`s you would like to use along with a few optional parameters and it finds all vertical grids fulfilling your needs.

You can install this gem with

    $ gem install cssensible

All code is available on [GitHub][CSSensible on GitHub].


[456 Berea St on elastic layouts]: http://www.456bereastreet.com/archive/200504/fixed_or_fluid_width_elastic/
[960.gs]: http://960.gs/
[Blueprint]: http://blueprintcss.org/
[CSSensible on GitHub]: http://github.com/dhabersack/cssensible/
[Jon Tan on elastic layouts]: http://jontangerine.com/log/2007/09/the-incredible-em-and-elastic-layouts-with-css
[The Elements of Typographic Style Applied to the Web]: http://webtypography.net/

*[HTML]: Hyper Text Markup Language
*[HTML5]: Hyper Text Markup Language Version 5
*[CSS]: Cascading Style Sheets
*[CSS3]: Cascading Style Sheets Version 3