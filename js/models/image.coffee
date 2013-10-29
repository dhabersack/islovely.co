Portfolio.Image = DS.Model.extend
  url: DS.attr 'string'

  absoluteUrl: (->
    "http://localhost:1986/#{ @get 'url' }"
  ).property 'url'
