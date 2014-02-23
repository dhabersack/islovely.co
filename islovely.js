;(function() {
  'use strict';

window.App = Ember.Application.create();

Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend({
  getURL: function() {
    return Ember.get(this, 'location').hash.substr(2);
  },

  setURL: function(path) {
    Ember.get(this, 'location').hash = '!' + path;
    Ember.set(this, 'lastSetURL', '!' + path);
  },

  onUpdateURL: function(callback) {
    var that = this,
        guid = Ember.guidFor(this);

    Ember.$(window).bind('hashchange.ember-location-' + guid, function() {
      Ember.run(function() {
        var path = location.hash.substr(2);

        if (Ember.get(that, 'lastSetURL') === path) {
          return;
        }

        Ember.set(that, 'lastSetURL', null);

        callback(location.hash.substr(2));
      });
    });
  },

  formatURL: function(url) {
    return '#!' + url;
  }
}));

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

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://api.islovely.co'
});

App.PostsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['id'],

  sortFunction: function(x, y) {
    if (x === y) {
      return 0;
    }

    return (parseInt(x, 10) < parseInt(y, 10)) ? -1 : 1;
  }
});

App.ProjectsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['id'],

  sortFunction: function(x, y) {
    if (x === y) {
      return 0;
    }

    return (parseInt(x, 10) < parseInt(y, 10)) ? -1 : 1;
  }
});

App.Page = DS.Model.extend({
  body:        DS.attr('string'),
  description: DS.attr('string'),
  slug:        DS.attr('string'),
  title:       DS.attr('string')
});

App.Post = DS.Model.extend({
  body:        DS.attr('string'),
  description: DS.attr('string'),
  published:   DS.attr('date'),
  slug:        DS.attr('string'),
  title:       DS.attr('string')
});

App.Project = DS.Model.extend({
  body:        DS.attr('string'),
  description: DS.attr('string'),
  slug:        DS.attr('string'),
  title:       DS.attr('string')
});

var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown', function(input) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.registerBoundHelper('date', function(input) {
  return new Ember.Handlebars.SafeString(moment(input).format('MMMM Do, YYYY'));
});

}).call(this);
