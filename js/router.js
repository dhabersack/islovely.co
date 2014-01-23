App.Router.map(function() {
  this.resource('pages');
  this.resource('page', { path: '/pages/:page_slug' });

  this.resource('posts');
  this.resource('post', { path: '/posts/:post_slug' });
});

App.Router.reopen({
  location: 'hashbang',

  didTransition: function(infos) {
    this._super(infos);

    Ember.run.scheduleOnce('afterRender', this, 'scrollToTop');
    Ember.run.scheduleOnce('afterRender', this, 'sendAnalytics');
  },


  scrollToTop: function() {
    window.scrollTo(0, 0);
  },

  sendAnalytics: function() {
    if (!window.ga) {
      return;
    }

    ga('send', 'pageview', this.get('url'));
  }
});

App.Route = Ember.Route.extend({
  renderTemplate: function(controller, model) {
    this.render();

    var title = 'islovely';
    if (this.title) {
      title = this.title(model) + ' | islovely';
    }
    document.title = title;

    if (this.description) {
      $('meta[name=description]').attr('content', this.description(model));
    }
  }
});

App.IndexRoute = App.Route.extend({
  description: function(model) {
    return model.get('description');
  },

  model: function() {
    return this.store.find('page', 'index');
  },

  title: function(model) {
    return model.get('title');
  }
});

App.PageRoute = App.Route.extend({
  description: function(model) {
    return model.get('description');
  },

  model: function(params) {
    return this.store.find('page', params.page_slug);
  },

  serialize: function(model) {
    return { page_slug: model.get('slug') };
  },

  title: function(model) {
    return model.get('title');
  }
});

App.PagesRoute = App.Route.extend({
  description: function() {
    return 'Information about me and the services I offer.';
  },

  model: function() {
    return this.store.find('page');
  },

  title: function() {
    return 'Pages';
  }
});

App.PostRoute = App.Route.extend({
  description: function(model) {
    return model.get('description');
  },

  model: function(params) {
    return this.store.find('post', params.post_slug);
  },

  serialize: function(model) {
    return { post_slug: model.get('slug') };
  },

  title: function(model) {
    return model.get('title');
  }
});

App.PostsRoute = App.Route.extend({
  description: function() {
    return 'Articles on development, consulting, and teaching.';
  },

  model: function() {
    return this.store.find('post');
  },

  title: function() {
    return 'Posts';
  }
});
