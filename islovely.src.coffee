'use strict'

window.Portfolio = Ember.Application.create()

Portfolio.Router.map () ->
  this.resource('client', { path: '/clients/:client_slug' })
  this.resource('clients')

  this.resource('page', { path: '/pages/:page_slug' })
  this.resource('pages')

  this.resource('post', { path: '/posts/:post_slug' })
  this.resource('posts')

Portfolio.Route = Ember.Route.extend(
  renderTemplate: (controller, model) ->
    this.render()
    title = this.title(model) if this.title
    document.title = if title then "#{ title } | islovely" else 'islovely'
    return
)

Portfolio.ClientRoute = Portfolio.Route.extend(
  model: (params) ->
    this.store.find('client', params.client_slug)

  serialize: (model) ->
    { client_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.ClientsRoute = Portfolio.Route.extend(
  model: () ->
    this.store.find('client')

  title: () ->
    'Clients'
)

Portfolio.IndexRoute = Portfolio.Route.extend(
  model: () ->
    this.store.find('page', 'index')
)

Portfolio.PageRoute = Portfolio.Route.extend(
  model: (params) ->
    this.store.find('page', params.page_slug)

  serialize: (model) ->
    { page_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.PagesRoute = Portfolio.Route.extend(
  model: () ->
    this.store.find('page')

  title: () ->
    'Pages'
)

Portfolio.PostRoute = Portfolio.Route.extend(
  model: (params) ->
    this.store.find('post', params.post_slug)

  serialize: (model) ->
    { post_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.PostsRoute = Portfolio.Route.extend(
  model: () ->
    this.store.find('post')

  title: () ->
    'Posts'
)

Portfolio.ApplicationAdapter = DS.RESTAdapter.extend(
  host: 'http://api.islovely.co'
)

Portfolio.ClientsController = Ember.ArrayController.extend(
  sortProperties: ['id']
  sortAscending: false

  sortFunction: (x, y) ->
    return 0 if x is y
    if parseInt(x, 10) < parseInt(y, 10) then -1 else 1
)

Portfolio.PostsController = Ember.ArrayController.extend(
  sortProperties: ['id']
  sortAscending: false

  sortFunction: (x, y) ->
    return 0 if x is y
    if parseInt(x, 10) < parseInt(y, 10) then -1 else 1
)

Portfolio.Client = DS.Model.extend(
  body:        DS.attr('string')
  description: DS.attr('string')
  slug:        DS.attr('string')
  title:       DS.attr('string')
  url:         DS.attr('string')
)

Portfolio.Page = DS.Model.extend(
  body:        DS.attr('string')
  description: DS.attr('string')
  slug:        DS.attr('string')
  title:       DS.attr('string')
)

Portfolio.Post = DS.Model.extend(
  body:        DS.attr('string')
  description: DS.attr('string')
  published:   DS.attr('date')
  slug:        DS.attr('string')
  title:       DS.attr('string')
)

showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper('markdown', (input) ->
  new Ember.Handlebars.SafeString(showdown.makeHtml(input))
)

Ember.Handlebars.registerBoundHelper('date', (input) ->
  new Ember.Handlebars.SafeString(moment(input).format('MMMM Do, YYYY'))
)
