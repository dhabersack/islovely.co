'use strict'

window.Portfolio = Ember.Application.create()

Portfolio.Router.map () ->
  this.resource 'clients', path: '/'
  this.resource 'posts', path: '/posts'
  this.resource 'clients', path: '/clients'

Portfolio.ClientsRoute = Ember.Route.extend
  model: () ->
    Portfolio.Client.find()

Portfolio.Store = DS.Store.extend
  revision: 12
  adapter: 'DS.FixtureAdapter'

Portfolio.Client = DS.Model.extend
  title: DS.attr 'string'
  url: DS.attr 'string'

Portfolio.Client.FIXTURES = [
  { id: 1, title: 'smarchive/Gini', url: 'http://gini.net' }
  { id: 2, title: 'Masfina', url: 'http://masfina.de' }
]
