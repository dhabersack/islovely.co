'use strict'

window.Portfolio = Ember.Application.create()

Portfolio.Router.map () ->
  this.resource 'client', path: '/clients/:client_slug'
  this.resource 'clients'
  this.resource 'page', path: '/pages/:page_slug'
  this.resource 'pages'
  this.resource 'post', path: '/posts/:post_slug'
  this.resource 'posts'

Portfolio.ClientRoute = Ember.Route.extend
  model: (params) ->
    Portfolio.Client.find params.client_slug

  serialize: (model) ->
    { client_slug: model.get 'slug' }

Portfolio.ClientsRoute = Ember.Route.extend
  model: () ->
    Portfolio.Client.find()

Portfolio.PageRoute = Ember.Route.extend
  model: (params) ->
    Portfolio.Page.find params.page_slug

  serialize: (model) ->
    { page_slug: model.get 'slug' }

Portfolio.PagesRoute = Ember.Route.extend
  model: () ->
    Portfolio.Page.find()

Portfolio.PostRoute = Ember.Route.extend
  model: (params) ->
    Portfolio.Post.find params.post_slug

  serialize: (model) ->
    { post_slug: model.get 'slug' }

Portfolio.PostsRoute = Ember.Route.extend
  model: () ->
    Portfolio.Post.find()

Portfolio.Store = DS.Store.extend
  revision: 12
  adapter: 'DS.RESTAdapter'

DS.RESTAdapter.reopen { url: 'http://localhost:1986' }

Portfolio.BreakpointImage = DS.Model.extend
  breakpoint: DS.attr 'string'
  client: DS.belongsTo 'Portfolio.Client'
  title: DS.attr 'string'
  url: DS.attr 'string'

Portfolio.Client = DS.Model.extend
  body: DS.attr 'string'
  description: DS.attr 'string'
  images: DS.hasMany 'Portfolio.BreakpointImage'
  slug: DS.attr 'string'
  title: DS.attr 'string'
  url: DS.attr 'string'

Portfolio.Page = DS.Model.extend
  body: DS.attr 'string'
  description: DS.attr 'string'
  publishedAt: DS.attr 'date'
  slug: DS.attr 'string'
  title: DS.attr 'string'

Portfolio.Post = DS.Model.extend
  body: DS.attr 'string'
  publishedAt: DS.attr 'date'
  slug: DS.attr 'string'
  teaser: DS.attr 'string'
  title: DS.attr 'string'

showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper('markdown', (input) ->
  new Ember.Handlebars.SafeString showdown.makeHtml input
)
