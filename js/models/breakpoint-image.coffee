Portfolio.BreakpointImage = DS.Model.extend
  breakpoint: DS.attr 'string'
  client: DS.belongsTo 'Portfolio.Client'
  title: DS.attr 'string'
  url: DS.attr 'string'
