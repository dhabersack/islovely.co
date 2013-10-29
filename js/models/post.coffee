Portfolio.Post = DS.Model.extend
  body: DS.attr 'string'
  publishedAt: DS.attr 'date'
  slug: DS.attr 'string'
  teaser: DS.attr 'string'
  title: DS.attr 'string'
