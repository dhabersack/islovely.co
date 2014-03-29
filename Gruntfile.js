'use strict'

var jsfiles = [
  'js/application.js',
  'js/location.js',
  'js/router.js',
  'js/adapter.js',
  'js/store.js',
  'js/controllers/**/*.js',
  'js/models/**/*.js',
  'js/helpers.js'
];

var urls = [
  '#!/',
  '#!/pages/about',
  '#!/pages/contact',
  '#!/pages/imprint',
  '#!/pages/process',
  '#!/pages/regarding-recruitment',
  '#!/pages/request-a-proposal',
  '#!/pages/services',
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
  '#!/projects/handpicked-js',
  '#!/projects/page-blur',
  '#!/projects/respaintive',
  '#!/projects/smileylist'
];

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      postsnapshots: {
        src: 'snapshots-build'
      },
      presnapshots: {
        src: ['sitemap.xml', 'snapshots', 'snapshots-build']
      }
    },

    concat: {
      js: {
        files: {
          '<%= pkg.name %>.js': [
            'js/intro.js',
            jsfiles,
            'js/outro.js'
          ]
        }
      },
      sitemap: {
        src: [
          'sitemap-src/header.xml',
          'sitemap-src/list.xml',
          'sitemap-src/footer.xml'
        ],
        dest: 'sitemap.xml'
      }
    },

    cssmin: {
      options: {
        report: 'min'
      },
      css: {
        options: {
          banner:  '/*! <%= pkg.name %> v<%= pkg.version %> */'
        },
        files: {
          'style.css': 'sass/style.css'
        }
      },
      grunticon: {
        files: {
          'grunticon/icons.data.png.min.css': 'grunticon/icons.data.png.css',
          'grunticon/icons.data.svg.min.css': 'grunticon/icons.data.svg.css',
          'grunticon/icons.fallback.min.css': 'grunticon/icons.fallback.css'
        }
      }
    },

    grunticon: {
      icons: {
        options: {
          colors: {
            brand: '#3581fc'
          },
          customselectors: {
            'logo-github': ['.logo-github::before'],
            'logo-linkedin': ['.logo-linkedin::before'],
            'logo-islovely-brand': ['.logo-islovely::before'],
            'logo-twitter': ['.logo-twitter::before'],
            'logo-xing': ['.logo-xing::before']
          }
        },
        files: [{
          expand: true,
          cwd: 'vectors',
          src: ['*.svg', '*.png'],
          dest: 'grunticon'
        }]
      }
    },

    htmlmin: {
      options: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      snapshots: {
        cwd: 'snapshots-build/',
        dest: 'snapshots/',
        expand: true,
        src: '**/*.html'
      }
    },

    htmlSnapshot: {
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
          urls: urls
        }
      }
    },

    jshint: {
      options: {
        browser: true,
        curly: true,
        devel: true,
        eqeqeq: true,
        expr: true,
        globals: {
          '$': true,
          'App': true,
          'DS': true,
          'Ember': true,
          'ga': true,
          'moment': true,
          'Showdown': true
        },
        undef: true,
        unused: true,
        strict: true,
        trailing: true
      },
      run: {
        files: {
          src: ' <%= pkg.name %>.js'
        }
      }
    },

    sass: {
      compile: {
        files: {
          'sass/style.css': 'sass/style.scss'
        }
      }
    },

    shell: {
      createSitemapList: {
        command: "echo '  <url><loc>http://islovely.co/" + urls.join('</loc></url>\n  <url><loc>http://islovely.co/') + "</loc></url>' > sitemap-src/list.xml"
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n',
        report: 'min'
      },
      run: {
        files: {
          '<%= pkg.name %>.min.js': '<%= pkg.name %>.js'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      grunt: {
        files: ['package.json', 'Gruntfile.js'],
        tasks: 'compile'
      },
      markup: {
        files: 'index.html'
      },
      script: {
        files: 'js/**/*.js',
        tasks: 'compile:js'
      },
      stylesheets: {
        files: 'sass/**/*.scss',
        tasks: 'compile:css'
      },
      vectors: {
        files: 'vectors/**/*',
        tasks: 'compile:vectors'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-html-snapshot');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('compile', ['compile:vectors', 'compile:css', 'compile:js']);
  grunt.registerTask('compile:css', ['sass', 'cssmin:css']);
  grunt.registerTask('compile:js', ['concat:js', 'jshint', 'uglify']);
  grunt.registerTask('compile:vectors', ['grunticon', 'cssmin:grunticon']);
  grunt.registerTask('default', ['compile', 'watch']);
  grunt.registerTask('sitemap', ['shell:createSitemapList', 'concat:sitemap']);
  grunt.registerTask('snapshot', ['clean:presnapshots', 'htmlSnapshot', 'htmlmin:snapshots', 'clean:postsnapshots', 'sitemap']);
};
