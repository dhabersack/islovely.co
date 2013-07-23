Portfolio.Post = DS.Model.extend
  body: DS.attr 'string'
  publishedAt: DS.attr 'date'
  teaser: DS.attr 'string'
  title: DS.attr 'string'
