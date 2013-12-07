Portfolio.PostsController = Ember.ArrayController.extend(
  sortProperties: ['id']
  sortAscending: false

  sortFunction: (x, y) ->
    return 0 if x is y
    if parseInt(x, 10) < parseInt(y, 10) then -1 else 1
)
