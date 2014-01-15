(function() {
  'use strict';
  var showdown,
    _this = this;

  window.Portfolio = Ember.Application.create();

  Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend({
    getURL: function() {
      return Ember.get(this, 'location').hash.substr(2);
    },
    setURL: function(path) {
      Ember.get(this, 'location').hash = "!" + path;
      Ember.set(this, 'lastSetURL', "!" + path);
    },
    onUpdateURL: function(callback) {
      var guid;
      guid = Ember.guidFor(_this);
      return Ember.$(window).bind("hashchange.ember-location-{ guid }", function() {
        return Ember.run(function() {
          var path;
          path = location.hash.substr(2);
          if (Ember.get(_this, 'lastSetURL') === path) {
            return;
          }
          Ember.set(_this, 'lastSetURL', null);
          return callback(location.hash.substr(2));
        });
      });
    },
    formatURL: function(url) {
      return "#!" + url;
    }
  }));

  Portfolio.Router.map(function() {
    this.resource('client', {
      path: '/clients/:client_slug'
    });
    this.resource('clients');
    this.resource('page', {
      path: '/pages/:page_slug'
    });
    this.resource('pages');
    this.resource('post', {
      path: '/posts/:post_slug'
    });
    return this.resource('posts');
  });

  Portfolio.Router.reopen({
    location: 'hashbang'
  });

  Portfolio.Route = Ember.Route.extend({
    renderTemplate: function(controller, model) {
      var title;
      this.render();
      if (this.title) {
        title = this.title(model);
      }
      document.title = title ? "" + title + " | islovely" : 'islovely';
      if (this.description) {
        $('meta[name=description]').attr('content', this.description(model));
      }
    }
  });

  Portfolio.ClientRoute = Portfolio.Route.extend({
    description: function(model) {
      return model.get('description');
    },
    model: function(params) {
      return this.store.find('client', params.client_slug);
    },
    serialize: function(model) {
      return {
        client_slug: model.get('slug')
      };
    },
    title: function(model) {
      return model.get('title');
    }
  });

  Portfolio.ClientsRoute = Portfolio.Route.extend({
    description: function() {
      return 'A selection of client projects I have worked on.';
    },
    model: function() {
      return this.store.find('client');
    },
    title: function() {
      return 'Clients';
    }
  });

  Portfolio.IndexRoute = Portfolio.Route.extend({
    description: function(model) {
      return model.get('description');
    },
    model: function() {
      return this.store.find('page', 'index');
    }
  });

  Portfolio.PageRoute = Portfolio.Route.extend({
    description: function(model) {
      return model.get('description');
    },
    model: function(params) {
      return this.store.find('page', params.page_slug);
    },
    serialize: function(model) {
      return {
        page_slug: model.get('slug')
      };
    },
    title: function(model) {
      return model.get('title');
    }
  });

  Portfolio.PagesRoute = Portfolio.Route.extend({
    description: function() {
      return 'Find more information about me and the services I offer.';
    },
    model: function() {
      return this.store.find('page');
    },
    title: function() {
      return 'Pages';
    }
  });

  Portfolio.PostRoute = Portfolio.Route.extend({
    description: function(model) {
      return model.get('description');
    },
    model: function(params) {
      return this.store.find('post', params.post_slug);
    },
    serialize: function(model) {
      return {
        post_slug: model.get('slug')
      };
    },
    title: function(model) {
      return model.get('title');
    }
  });

  Portfolio.PostsRoute = Portfolio.Route.extend({
    description: function() {
      return 'Articles on technology, development, consulting, and teaching.';
    },
    model: function() {
      return this.store.find('post');
    },
    title: function() {
      return 'Posts';
    }
  });

  Portfolio.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://api.islovely.co'
  });

  Portfolio.ClientsController = Ember.ArrayController.extend({
    sortProperties: ['id'],
    sortAscending: false,
    sortFunction: function(x, y) {
      if (x === y) {
        return 0;
      }
      if (parseInt(x, 10) < parseInt(y, 10)) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  Portfolio.PostsController = Ember.ArrayController.extend({
    sortProperties: ['id'],
    sortAscending: false,
    sortFunction: function(x, y) {
      if (x === y) {
        return 0;
      }
      if (parseInt(x, 10) < parseInt(y, 10)) {
        return -1;
      } else {
        return 1;
      }
    }
  });

  Portfolio.Client = DS.Model.extend({
    body: DS.attr('string'),
    description: DS.attr('string'),
    slug: DS.attr('string'),
    title: DS.attr('string'),
    url: DS.attr('string')
  });

  Portfolio.Page = DS.Model.extend({
    body: DS.attr('string'),
    description: DS.attr('string'),
    slug: DS.attr('string'),
    title: DS.attr('string')
  });

  Portfolio.Post = DS.Model.extend({
    body: DS.attr('string'),
    description: DS.attr('string'),
    published: DS.attr('date'),
    slug: DS.attr('string'),
    title: DS.attr('string')
  });

  showdown = new Showdown.converter();

  Ember.Handlebars.registerBoundHelper('markdown', function(input) {
    return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
  });

  Ember.Handlebars.registerBoundHelper('date', function(input) {
    return new Ember.Handlebars.SafeString(moment(input).format('MMMM Do, YYYY'));
  });

}).call(this);

/*
//@ sourceMappingURL=islovely.js.map
*/