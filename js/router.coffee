Portfolio.Router.map () ->
  this.resource 'clients', path: '/'
  this.resource 'posts', path: '/posts'
  this.resource 'clients', path: '/clients'

Portfolio.ClientsRoute = Ember.Route.extend
  model: () ->
    Portfolio.Client.find()
