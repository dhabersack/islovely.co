var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown', function(input) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.registerBoundHelper('date', function(input) {
  return new Ember.Handlebars.SafeString(moment(input).format('MMMM Do, YYYY'));
});
