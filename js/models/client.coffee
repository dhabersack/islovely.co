Portfolio.Client = DS.Model.extend
  title: DS.attr 'string'
  url: DS.attr 'string'

Portfolio.Client.FIXTURES = [
  { id: 1, title: 'smarchive/Gini', url: 'http://gini.net' }
  { id: 2, title: 'Masfina', url: 'http://masfina.de' }
]
