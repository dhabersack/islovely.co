---
title: Your API might be sexist
category: Gender equality
excerpt: Gender is not “true” or “false”.
---
I recently came across an API that exposed a reasonable but unfortunate design decision, the specifics of which are irrelevant safe for the fact that the data in question concerned humans in one form or another. It is described well in the following simplification:

{% highlight json %}
{
  employees: [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      male: true
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      male: false
    },
    {
      name: 'Joshua Doe',
      email: 'joshua.doe@example.com',
      male: true
    }
  ]
}
{% endhighlight %}

The blunder here is that the above uses `male: true` and `male: false` to distinguish between genders. While it looks innocent enough, upon further consideration it can be considered politically incorrect and borderline sexist. This detail might seem like a non-issue, but it exposes a problematic subtlety that we should be aware of.

I am certain whoever created this API did not have bad intentions. This might be an oversight that few would have caught. If nothing else, I want to point out how small decisions such as this can have a number of unintended side effects.

## Being male is not the default

Even if this *was* acceptable, why use `male: true` and not `female: true`? This makes men the implied default, with women being “not men”. Imagine code using this information like this:

{% highlight js %}
if (male) {
  // do one thing
} else {
  // do another thing
}
{% endhighlight %}

The omitted condition of the `else`-branch does not read as “if female”, but rather “if not male”, which is a subtle but undeniable difference.

Using `female: true` instead of `male: true` would not improve this. When pursuing gender equality, one gender cannot be treated as being “more true” than the other, regardless of which one is being favored.

## Gender is not “either-or”

One could argue that using Booleans to describe gender was acceptable under the assumption that both have two possible values, providing a one-to-one mapping. Booleans take up less space in our database than other types, so we save a few bytes at the same time. Enhance this with an observation of a mostly-male dataset, and it is understandable how this misjudgement might have come to be.

Gender is not binary, it is a spectrum. Its traditional “one or the other”-character is no longer accurate as our perception of ourselves changes, and software needs to adjust accordingly.

## Humans should have noticed

Maybe this was an oversight. As software projects go, there are often far bigger concerns than individual attributes on a particular entity. No matter the circumstances, we cannot let the quality of our codebases suffer.

This is why we do code reviews: to put another set of eyes on a piece of code that can notice flaws that are not obvious to the person that has been too close to it for too long to catch it.

The fact that this went live shows that multiple people in the organization either did not notice the issue, or did not care enough to do anything about it. Both are problematic for the image you and your company convey to the outside.

## It is a sign of a male-centric environment

People inside and outside of your company might come in contact with the subliminal message of male superiority this API and any code that uses it send. If such occurrences add up, you could end up with a culture that, intentionally or not, is less accepting of women.

If you are looking to hire employees of all genders, evidently favoring one gender might convince some to not apply to your company, regardless of their own gender. This does not mean “women will not want to work for you”, as men are just as aware of this tone and might consider it hostile and decide to look elsewhere.

Teams that are predominantly male, with men outnumbering women by a factor of ten or more, do not make for a healthy or fun work environment. Settings in which women are merely considered “not men” are not welcoming to anyone.

## How to do it right

One way we could improve this API would be to have both `isMale` and `isFemale`-attributes at the same time to put them on equal footing. This would enable people to identify as neither, one, or both of these, which still does not cover the entire spectrum of gender we would like to include.

We could also drop the Boolean attributes and instead use `gender` as a field with any number of values, whether predefined or free-form, to allow for a much larger variety and personal expression. However, this will make it much more difficult, potentially even impossible, to reliably distinguish between genders in your code.

From there, it is only a small leap to my preferred option, which is to drop gender-attributes entirely and **go gender-neutral**.

Do you *need* to know the gender of a person, or do you *want* to know it? If you only use this information to switch between “Dear Mr. Doe” and “Dear Mrs. Doe” in the emails you send out, is that really a business-critical feature that you absolutely must have? Chances are it is not necessary for your product to show the exact pronoun in the first place, and you are creating this problem artificially.

Not only does dropping gender-related information avoid the issue at hand, removing gender as a differentiating factor is also the easiest to implement. There will be fewer conditionals in your code, and therefore fewer opportunities to make mistakes.

## Conclusion

While none of this might seem like a big deal, sexism is a major societal issue in our industry. Seemingly insignificant things like this accumulate and contribute to the larger problem.

If you care about other people, consider the impact your decisions can have on them, and avoid ones that are more trouble than they are worth.

(This article was also published on [Medium](http://medium.com/@soverydom/your-api-might-be-sexist-5890dedf0f2e#.c4pdx9e2f).)
