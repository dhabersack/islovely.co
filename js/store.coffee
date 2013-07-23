Portfolio.Store = DS.Store.extend
  revision: 12
  adapter: 'DS.RESTAdapter'

DS.RESTAdapter.reopen { url: 'http://localhost:1986' }
