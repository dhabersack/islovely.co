'use strict'

window.Portfolio = Ember.Application.create()

Portfolio.Router.map () ->
  this.resource 'client', path: '/clients/:client_id'
  this.resource 'clients'
  this.resource 'post', path: '/posts/:post_id'
  this.resource 'posts'

Portfolio.ClientsRoute = Ember.Route.extend
  model: () ->
    Portfolio.Client.find()

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
  images: DS.hasMany 'Portfolio.BreakpointImage'
  name: DS.attr 'string'
  url: DS.attr 'string'

Portfolio.Post = DS.Model.extend
  body: DS.attr 'string'
  publishedAt: DS.attr 'date'
  teaser: DS.attr 'string'
  title: DS.attr 'string'

showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper('markdown', (input) ->
  new Ember.Handlebars.SafeString showdown.makeHtml input
)
