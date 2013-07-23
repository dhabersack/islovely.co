Portfolio.Client = DS.Model.extend
  images: DS.hasMany 'Portfolio.BreakpointImage'
  name: DS.attr 'string'
  url: DS.attr 'string'
