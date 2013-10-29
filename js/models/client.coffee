Portfolio.Client = DS.Model.extend
  body: DS.attr 'string'
  description: DS.attr 'string'
  images: DS.hasMany 'Portfolio.Image'
  slug: DS.attr 'string'
  title: DS.attr 'string'
  url: DS.attr 'string'

DS.RESTAdapter.map 'Portfolio.Client',
  images: { embedded: 'always' }
