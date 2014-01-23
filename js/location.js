Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend({
  getURL: function() {
    return Ember.get(this, 'location').hash.substr(2);
  },

  setURL: function(path) {
    Ember.get(this, 'location').hash = '!' + path;
    Ember.set(this, 'lastSetURL', '!' + path);
  },

  onUpdateURL: function(callback) {
    var that = this,
        guid = Ember.guidFor(this);

    Ember.$(window).bind('hashchange.ember-location-' + guid, function() {
      Ember.run(function() {
        var path = location.hash.substr(2);

        if (Ember.get(that, 'lastSetURL') === path) {
          return;
        }

        Ember.set(that, 'lastSetURL', null);

        callback(location.hash.substr(2));
      });
    });
  },

  formatURL: function(url) {
    return '#!' + url;
  }
}));
