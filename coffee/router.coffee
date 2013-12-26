Portfolio.Router.map () ->
  this.resource('client', { path: '/clients/:client_slug' })
  this.resource('clients')

  this.resource('page', { path: '/pages/:page_slug' })
  this.resource('pages')

  this.resource('post', { path: '/posts/:post_slug' })
  this.resource('posts')

Portfolio.Router.reopen(
  location: 'hashbang'
)

Portfolio.Route = Ember.Route.extend(
  renderTemplate: (controller, model) ->
    this.render()

    title = this.title(model) if this.title
    document.title = if title then "#{ title } | islovely" else 'islovely'

    $('meta[name=description]').attr('content', this.description(model)) if this.description

    return
)

Portfolio.ClientRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: (params) ->
    this.store.find('client', params.client_slug)

  serialize: (model) ->
    { client_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.ClientsRoute = Portfolio.Route.extend(
  description: () ->
    'A selection of client projects I have worked on.'

  model: () ->
    this.store.find('client')

  title: () ->
    'Clients'
)

Portfolio.IndexRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: () ->
    this.store.find('page', 'index')
)

Portfolio.PageRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: (params) ->
    this.store.find('page', params.page_slug)

  serialize: (model) ->
    { page_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.PagesRoute = Portfolio.Route.extend(
  description: () ->
    'Find more information about me and the services I offer.'

  model: () ->
    this.store.find('page')

  title: () ->
    'Pages'
)

Portfolio.PostRoute = Portfolio.Route.extend(
  description: (model) ->
    model.get('description')

  model: (params) ->
    this.store.find('post', params.post_slug)

  serialize: (model) ->
    { post_slug: model.get('slug') }

  title: (model) ->
    model.get('title')
)

Portfolio.PostsRoute = Portfolio.Route.extend(
  description: () ->
    'Articles on technology, development, consulting, and teaching.'

  model: () ->
    this.store.find('post')

  title: () ->
    'Posts'
)
