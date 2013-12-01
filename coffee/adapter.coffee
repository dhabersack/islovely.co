Portfolio.Adapter = DS.RESTAdapter.extend()

Portfolio.Adapter.reopen { url: 'http://localhost:1986' }
# Portfolio.Adapter.reopen { url: 'http://islovely.heroku.com' }
