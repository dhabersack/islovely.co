Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend(
  getURL: () ->
    Ember.get(this, 'location').hash.substr(2)

  setURL: (path) ->
    Ember.get(this, 'location').hash = "!#{ path }"
    Ember.set(this, 'lastSetURL', "!#{ path }")
    return

  onUpdateURL: (callback) =>
    guid = Ember.guidFor(this)

    Ember.$(window).bind("hashchange.ember-location-{ guid }", () =>
      Ember.run(() =>
        path = location.hash.substr(2)
        return if (Ember.get(this, 'lastSetURL') is path)

        Ember.set(this, 'lastSetURL', null)

        callback(location.hash.substr(2))
      )
    )

  formatURL: (url) ->
    "#!#{ url }"
))
