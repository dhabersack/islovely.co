---
title: Drop the “should”
category: Language hacks
excerpt: The word “should” is often completely unnecessary. Avoiding it makes your language more assertive.
---
My work is often conceptual in nature: specifying requirements, writing documentation, and occasionally writing unit- and acceptance-tests. While centered around technical aspects, all of these are primarily ways to communicate with other people.

Over the last few months, I have noticed an anti-pattern in the way I write: I use the word “should” a lot more than I need to. As it turns out, “should” is entirely unnecessary in most cases, and sometimes even detrimental to the message I want to convey.

No matter how long I have been writing in a professional context, I still always have this nagging though of “but what if they don’t like it” at the back of my mind. I don’t want to be perceived as wrong, so I inadvertently water down what I really want to say by using words such as “should”.

I appreciate that it has infiltrated a lot of professional communication for a long time and is commonly understood to describe that something that is required rather than optional. I still want to question its necessity and validity; most things become clearer by avoiding it.

Take the title of this post, which I intentionally limited to a single instance of “should”. Imagine if I had named this “You should drop the ‘should’”: while delightfully ironic, this minor change alone already makes it sound a lot less confident, like “You should maybe stop using ‘should’ perhaps, I don’t know, please don’t judge me”.

“Should” is hopeful, describing an ideal scenario. Of course you *should* stop using it. That would be great! But “should” is also vague and noncommittal; it’s the “maybe someday, but probably never” of communication.

I often find it in software tests:

- after logging in, I *should* see my username
- if the deadline was missed, the payment *should* be marked as overdue
- after selecting a filter, the list of products *should* be narrowed down to matching entries

When developing “test-first”, using “should” feels natural, because the functionality we are describing does not exist yet. At the same time, it sounds as if we are not sure what we expect to happen because of that same uncertainty, and as if we are only guessing. Because that is exactly what we are doing at this point: we are preparing to create something by first making something else up.

Every single “should” can be dropped from the examples above without doing any harm to the high-level nature of the descriptions:

- after logging in, I *see* my username
- if the deadline was missed, the payment *is* marked as overdue
- after selecting a filter, the list of products *is* narrowed down to matching entries

Not only are these descriptions slightly shorter, they are also more assertive. We know *exactly* what we expect to happen, and are able to put that into concrete language.

After noticing this pattern in tests, it started cropping up in countless other places: when writing styleguides detailing how an element is supposed to look and behave, drafting an email to a client describing what the next steps are, or trying to help a colleague solve a problem they had not encountered before.

It also became more obvious in my personal life: “I should take out the trash”, “I should turn off the TV”, “I should paint the living room”. All true, but none action-oriented.

I started noticing it so much that I have started a personal vendetta against it. When I want to say something I believe in, I can stake my flag in the ground and say it with confidence. “Should” does not help me communicate better, it helps me hide behind “I don’t know”: “maybe it should behave like this”, “we probably need to do this”, “I believe you can try that”.

It’s a small change, but I already started noticing improvements in the way I feel about what I communicate. Next time you write something you believe in that another human will read, own it, drop the “should”, and see how good it feels.

(This article was also published on [Medium](https://medium.com/@soverydom/drop-the-should-9e6c9c0219cb).)
