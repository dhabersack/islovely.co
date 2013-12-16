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
