App.PostsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['id'],

  sortFunction: function(x, y) {
    if (x === y) {
      return 0;
    }

    if (parseInt(x, 10) < parseInt(y, 10)) {
      return -1;
    } else {
      return 1;
    }
  }
});
