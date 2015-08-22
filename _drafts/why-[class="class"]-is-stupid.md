Layout engines such as Webkit, Gecko, Blink, and Trident parse class- and ID-attributes fastest because they get special treatment. Additionally, selectors are parsed from right to left.

IDs are unique: only one element on a page can have that one ID. If you specify a selector such as `#my-element`, BAM, the engine finds it immediately, because IDs are special. It keeps them in a special list, close to its heart.

If we add a second selector, such as `div #my-element`, the engines still find it immediately by its ID, but need to check if the element is nested within a `div`. This does not have to be an immediate parent, so we need at least a second check, even though the ID is already unique. This is retarded. We do not ever do this.

Classes are slightly less special, but still very much so. Since we parse from right to left, we only need to look for elements that have a `class`-attribute with that value. That is a pretty fast check, as we can skip those that do not have a `class`-attribute in the first place.

Now, the attribute-selector (square brackets) take a lot more time. We don't have unique or almost-unique attributes, but need to check *every single tag* in the markup, whether giving it that class makes sense or not.

With `[class="g"]`, we need to check every tag on the page for two things:

- Does it have a `class`-attribute?
- Is `g` somewhere within the value of said attribute?

While an element can only have one ID, it can have multiple classes. Consider the following:

<div class="stuff"></div>

<div class="g"></div>

<div></div>

<div class="stuff g"></div>

All four of them need to be checked. Only two of them match.

With the selector `.g`, the engine can skip the element that does not have a `class`-attribute. Since classes are special, those elements are kept in a separate list anyways, speeding up the identification-process.

Again, IDs and classes are special. We ALWAYS use `#ID` and `.class` to specify them in our stylesheets because they match fastest out of all the selectors we can have. Anything that contains `[class="x"]` or `[ID="x"]` needs to be die in a fire.

I go into more detail on my blog:

http://islovely.co/blog/understanding-css-hierarchy-matching/

and

http://islovely.co/blog/writing-high-performance-css/