---
title: "Writing code for others to read"
excerpt: "Clever code isn’t always the most readable. Especially when working in teams, readability has to come first."
issue: 34
isFeatured: true
---
Like people-languages, programming languages have a vocabulary and grammar. In both types of languages, we can phrase what we want to say in several ways and still get the same point across. Books written with unfamiliar words are difficult to follow, if thou catch mine drift. This is what reading other people’s code feels like.

When working in teams, the most effective code we can write is one that others can read without a lot of effort. Writing more readable code starts with picking better names for variables and functions.

Domain language inevitably ends up in our work. We use abbreviations like CTA and ETA and expect everybody else to also understand them. Some people have never referred to a button as a “call to action” before. Others have to spend a lot of time with `calculateETA()` to learn that it returns an “estimated time of arrival”.

Through naming things by our domain knowledge, we put up a barrier of “you must be this tall to read this” in our code. We are making our colleagues’ lives difficult for no reason by trying to be terse and clever. There are no prizes for “shortest code ever”. If a name becomes more readable by adding a few letters, that’s an easy decision to make.

A good rule of thumb for naming variables and functions is:

> If someone could ask “what does this mean”, it’s not a good name.

The name `calculateEstimatedTimeOfArrival()` seems very long, but it leaves no room for misinterpretation. Readers will definitely have an easier time figuring out what it does.

You are not writing code for yourself or the computer. You are writing code for others to read, and they might not know all those abbreviations yet. Do them a favor and use better names.

– Dom
