(function() {
  'use strict';
  var showdown;

  window.Portfolio = Ember.Application.create();

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

  Portfolio.ClientRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.find('client', params.client_slug);
    },
    serialize: function(model) {
      return {
        client_slug: model.get('slug')
      };
    }
  });

  Portfolio.ClientsRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('client');
    }
  });

  Portfolio.IndexRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('page', 'index');
    }
  });

  Portfolio.PageRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.find('page', params.page_slug);
    },
    serialize: function(model) {
      return {
        page_slug: model.get('slug')
      };
    }
  });

  Portfolio.PagesRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('page');
    }
  });

  Portfolio.PostRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.find('post', params.post_slug);
    },
    serialize: function(model) {
      return {
        post_slug: model.get('slug')
      };
    }
  });

  Portfolio.PostsRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('post');
    }
  });

  Portfolio.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:1986'
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