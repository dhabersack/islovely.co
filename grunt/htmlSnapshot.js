module.exports = {
  run: {
    options: {
      fileNamePrefix: '',
      removeLinkTags: true,
      removeScripts: true,
      replaceStrings: [
        { 'ember-application': '' },
        { 'ember-view': '' },
        { 'ember\\d+': '' },

        { 'class=".*?"': '' },
        { 'id=".*?"': '' },

        { '<div.*?>': '' },
        { '</div>': '' },
        { '<span.*?>': '' },
        { '</span>': '' },

        { '<noscript>.*?</noscript>': '' }
      ],
      sanitize: function(requestUri) {
        requestUri = requestUri.replace(/^#!\//g, '');
        if (requestUri === '') {
          return 'index';
        }
        return requestUri;
      },
      sitePath: 'http://localhost/islovely/',
      snapshotPath: 'snapshots-build/',
      urls: '<%= urls %>'
    }
  }
};
