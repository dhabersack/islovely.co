'use strict'

window.Portfolio = Ember.Application.create()

Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend(
  getURL: () ->
    Ember.get(this, 'location').hash.substr(2)

  setURL: (path) ->
    Ember.get(this, 'location').hash = "!#{ path }"
    Ember.set(this, 'lastSetURL', "!#{ path }")
    return

  onUpdateURL: (callback) =>
    guid = Ember.guidFor(this)

    Ember.$(window).bind("hashchange.ember-location-{ guid }", () =>
      Ember.run(() =>
        path = location.hash.substr(2)
        return if (Ember.get(this, 'lastSetURL') is path)

        Ember.set(this, 'lastSetURL', null)

        callback(location.hash.substr(2))
      )
    )

  formatURL: (url) ->
    "#!#{ url }"
))

Portfolio.Router.map () ->
  @resource('client', { path: '/clients/:client_slug' })
  @resource('clients')

  @resource('page', { path: '/pages/:page_slug' })
  @resource('pages')

  @resource('post', { path: '/posts/:post_slug' })
  @resource('posts')

Portfolio.Router.reopen(
  lastUrl = undefined

  didTransition: (infos) ->
    @_super(infos)

    return unless window.ga

    Ember.run.next =>
      url = @get('url')

      if (url isnt lastUrl)
        lastUrl = url
        ga('send', 'pageview', url)

  location: 'hashbang'
)

Portfolio.Route = Ember.Route.extend(
  renderTemplate: (controller, model) ->
    @render()

    title = @title(model) if @title
    document.title = if title then "#{ title } | islovely" else 'islovely'

    $('meta[name=description]').attr('content', @description(model)) if @description

    return
)

Portfolio.ClientRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: (params) ->
    @store.find('client', params.client_slug)

  serialize: (model) ->
    { client_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.ClientsRoute = Portfolio.Route.extend(
  description: () ->
    'A selection of client projects I have worked on.'

  model: () ->
    @store.find('client')

  title: () ->
    'Clients'
)

Portfolio.IndexRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: () ->
    @store.find('page', 'index')

  title: (model) ->
    model.get('title')
)

Portfolio.PageRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: (params) ->
    @store.find('page', params.page_slug)

  serialize: (model) ->
    { page_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.PagesRoute = Portfolio.Route.extend(
  description: () ->
    'Find more information about me and the services I offer.'

  model: () ->
    @store.find('page')

  title: () ->
    'Pages'
)

Portfolio.PostRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: (params) ->
    @store.find('post', params.post_slug)

  serialize: (model) ->
    { post_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.PostsRoute = Portfolio.Route.extend(
  description: () ->
    'Articles on technology, development, consulting, and teaching.'

  model: () ->
    @store.find('post')

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
