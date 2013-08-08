Portfolio.Client = DS.Model.extend
  body: DS.attr 'string'
  description: DS.attr 'string'
  images: DS.hasMany 'Portfolio.BreakpointImage'
  slug: DS.attr 'string'
  title: DS.attr 'string'
  url: DS.attr 'string'
