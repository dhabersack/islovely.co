App.ProjectsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['id'],

  sortFunction: function(x, y) {
    if (x === y) {
      return 0;
    }

    return (parseInt(x, 10) < parseInt(y, 10)) ? -1 : 1;
  }
});
