Portfolio.Post = DS.Model.extend(
  body:        DS.attr('string')
  description: DS.attr('string')
  published:   DS.attr('date')
  slug:        DS.attr('string')
  title:       DS.attr('string')
)
