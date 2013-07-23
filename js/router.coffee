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
