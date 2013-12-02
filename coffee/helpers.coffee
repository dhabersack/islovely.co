showdown = new Showdown.converter()

Ember.Handlebars.registerBoundHelper('markdown', (input) ->
  # markdown = "{{#linkTo 'page' 'imprint'}}imprint{{/linkTo}}"
  # console.log("markdown: #{ markdown }")

  # html = showdown.makeHtml(markdown)
  # console.log("html: #{ html }")

  # template = Ember.Handlebars.compile(html)
  # console.log("template: #{ template }")

  # executed = template(this)
  # console.log(executed)

  new Ember.Handlebars.SafeString(showdown.makeHtml(input))
)

Ember.Handlebars.registerBoundHelper('date', (input) ->
  new Ember.Handlebars.SafeString(moment(input).format('MMMM Do, YYYY'))
)
