showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper('markdown', (input) ->
  new Ember.Handlebars.SafeString(showdown.makeHtml(input))
)

Ember.Handlebars.registerBoundHelper('date', (input) ->
  new Ember.Handlebars.SafeString(moment(input).format('MMMM Do, YYYY'))
)
