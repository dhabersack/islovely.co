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
