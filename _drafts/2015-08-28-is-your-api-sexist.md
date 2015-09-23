---
title: Is your API sexist?
description: Gender is not a Boolean.
---
I recently came across an API-endpoint so unbelievable I mistook it for a joke at first. The following illustrates my issue with it while omitting most irrelevant attributes:

```
{
  employees: [
    {
      firstname: 'John Doe',
      email: 'john.doe@example.com',
      male: true,
      ...
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      male: false,
      ...
    },
    {
      name: 'Joshua Doe',
      email: 'joshua.doe@example.com',
      male: true,
      ...
    }
  ]
}
```

This seriously uses `male: true` and `male: false` to distinguish between men and women. Not only is that politically incorrect, but also deeply sexist.

(Also the naming convention is bad: this Boolean attribute should be called `isMale`, but that is entirely not the point of this post.)

## Why this is wrong

The existence of this API is alarming on a number of levels, of which the following points out a few.

### Being male is not the default

Even if representing gender as a Boolean was acceptable, why would it be `male: true` and not `female: true`? Why are men accepted as the default, with women being demoted to “not men”?

This assumption could stem from a uniform data set: if most employees are male, their “blueprint” might also be male by majority vote. This implicitly lowers the standing of the “false” value. Even if women are the minority, their gender does not make them wrong. However, that is exactly what is being communicated here.

Switching this around would not make a difference. When pursuing gender equality, one gender cannot be treated as being “more correct” than the other, regardless of which one is being favored.

### Gender is not either-or

Someone could reason that using Booleans was acceptable in this case by assuming gender to have as many possible values as Booleans, providing a one-to-one mapping. Booleans take up less space in our database than other types, so we save a few bytes at the same time.

This maps each gender to either truth or falsehood. By using `male: true`, you are again implying that “being female is wrong”. That is not a message you ever want to send.

Gender is not binary, it is a spectrum. Its traditional “one or the other”-character is no longer accurate as our perception of ourselves changes, and software needs to adjust accordingly.

### This should not have been allowed to go live

Maybe this was an oversight. Maybe a junior developer was given a small project and given free reigns to implement it as they see fit, with nobody hovering over them and scrutinizing their every decision.

Still, all code should go through code review, where mistakes like this should be caught by senior developers. If anyone in your organization cares about quality, a slip-up like this can never pass a review and be put into a productive environment.

The fact that this went live shows that you as a company either do not care (bad) or agree with what has been put out there (even worse).

### It is a sign of a male-centric environment

Even if this API is only for internal use and no customer is ever going to see it, it should still adhere to the same high level of standards you should have in place for your public-facing API.

Other developers on your team will come in contact with this and the subliminal message of male superiority it sends. If these things add up, you could very well end up with a culture that, intentionally or not, is less accepting of women.

To foster an environment that can host a well-balanced team, gender cannot be treated as anything but equal in your code or database. Your team cannot be allowed to think this way, and all references to this way of thinking should be removed entirely.

## Why this cannot be allowed to exist

I often hear companies proclaim they want to hire more women. Yet all development teams I have worked with were predominantly male, with men usually outnumbering women by a factor of ten or more. This does not make for a healthy or fun work environment.

However, an environment in which anyone is allowed to treat women as lesser beings is not a welcoming one.

## How to do it right

These issues can be avoided. The following presents a few options on how this can be implemented better.

### Option 1: Why not both?

Nothing prevents us from having both `isMale`- and `isFemale`-attributes, which would put them on equal footing. Additionally, a user could identify as neither, one, or both.

### Option 2: Provide users with options

asd

### Option 3: Have it be free-form

asd

### Option 4: Go gender-neutral

How important is it to you to know whether someone is male or female? Sure, you can use proper pronouns for the gender, but

This one is my preferred option. Not only does it avoid the issues above and is the simplest to implement, it no longer treats gender as a differentiating factor. Because it really should not be.

## Conclusion

This might not seem like a big deal to you, but it really is. Sexism is one of the major societal issues our industry is fighting at the moment. Even though this might appear insignificant, small things like this accumulate and contribute to the larger issue.

If you care about other people, you will