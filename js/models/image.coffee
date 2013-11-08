Portfolio.Image = DS.Model.extend
  base64: DS.attr 'string'
  mime: DS.attr 'string'

  src: (->
    "data:#{ @get 'mime' };base64,#{ @get 'base64' }"
  ).property 'base64', 'mime'
