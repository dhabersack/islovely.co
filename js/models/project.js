App.Project = DS.Model.extend({
  body:        DS.attr('string'),
  description: DS.attr('string'),
  slug:        DS.attr('string'),
  title:       DS.attr('string')
});
