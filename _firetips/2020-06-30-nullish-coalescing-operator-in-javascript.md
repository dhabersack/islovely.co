---
title: "Nullish-coalescing operator in JavaScript"
tags: ["JavaScript", "Booleans", "default values", "nullish coalescing", "truthy", "falsy", "truthiness"]
---
In JavaScript, we can use `||` to set default values for variables. Besides `null` and `undefined`, this also overrides other falsy values like `0`, `false`, and empty strings. The nullish coalescing operator `??` only overrides `null` and `undefined`.

```js
       27 || "default"    // ⇒ 27           good
     true || "default"    // ⇒ true         good
"truthy!" || "default"    // ⇒ "truthy!"    good
     null || "default"    // ⇒ "default"    good
undefined || "default"    // ⇒ "default"    good
        0 || "default"    // ⇒ "default"    👎 bad (overrides real value)
    false || "default"    // ⇒ "default"    👎 bad (overrides real value)
       "" || "default"    // ⇒ "default"    👎 bad (overrides real value)

       27 ?? "default"    // ⇒ 27           good
     true ?? "default"    // ⇒ true         good
"truthy!" ?? "default"    // ⇒ "truthy!"    good
     null ?? "default"    // ⇒ "default"    good
undefined ?? "default"    // ⇒ "default"    good
        0 ?? "default"    // ⇒ 0            👍 good (keeps real value)
    false ?? "default"    // ⇒ false        👍 good (keeps real value)
       "" ?? "default"    // ⇒ ""           👍 good (keeps real value)
```
