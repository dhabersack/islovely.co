---
date: 2014-01-24
excerpt: description
title: Scroll to top after transitions in Ember.js
---
In Ember.js, the window does not automatically scroll back to the top after a transition happens. This means that if you follow a link, the content of your `{{outlet}}` will be replaced, but you may not 

As Peter Wagenet stated in [an issue on the Ember-repository on GitHub](https://github.com/emberjs/ember.js/issues/1276), the window does not automatically scroll back up after a transition happens in Ember.js.

To make this happen, you can use the following code:

```
App.Router.reopen({
  didTransition: function(infos) {
    this._super(infos);

    Ember.run.scheduleOnce('afterRender', this, 'scrollToTop');
  },

  scrollToTop: function() {
    window.scrollTo(0, 0);
  }
});
```