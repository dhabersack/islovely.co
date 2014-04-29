'use strict'

module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
    data: {
      jsfiles: [
        'js/application.js',
        'js/location.js',
        'js/router.js',
        'js/adapter.js',
        'js/store.js',
        'js/controllers/**/*.js',
        'js/models/**/*.js',
        'js/helpers.js'
      ],
      urls: [
        '#!/',
        '#!/pages/about',
        '#!/pages/contact',
        '#!/pages/imprint',
        '#!/posts',
        '#!/posts/debunking-whitewashed-exam-statistics',
        '#!/posts/grunt-contrib-sass-and-node-js-0-10-8',
        '#!/posts/insights-of-a-new-screencaster',
        '#!/posts/on-lazy-journalism',
        '#!/posts/painless-installation-of-sml-on-os-x',
        '#!/posts/screencasts-on-standard-ml-in-german',
        '#!/posts/sml-nj-110.74-on-os-x-10.8-mountain-lion',
        '#!/posts/understanding-css-hierarchy-matching',
        '#!/posts/why-students-fail-entry-level-programming-exams',
        '#!/posts/writing-high-performance-css',
        '#!/projects',
        '#!/projects/handpicked-js',
        '#!/projects/page-blur',
        '#!/projects/respaintive',
        '#!/projects/smileylist'
      ]
    }
  });

  // require('time-grunt')(grunt);
};
