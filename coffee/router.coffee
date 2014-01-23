Portfolio.Router.map () ->
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
      window.scrollTo(0, 0)

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
