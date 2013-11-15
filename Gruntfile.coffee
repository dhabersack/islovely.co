'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      options:
        sourceMap: true
      run:
        files:
          'js/<%= pkg.name %>.js': [
            'js/application.coffee'
            'js/router.coffee'
            'js/adapter.coffee'
            'js/store.coffee'
            'js/controllers/**/*.coffee'
            'js/models/**/*.coffee'
            'js/helpers.coffee'
          ]
      server:
        files:
          'server/server.js': 'server/server.coffee'

    connect:
      server:
        options:
          hostname: '*'
          port: 1506

    cssmin:
      options:
        report: 'min'
      css:
        options:
          banner: '/*! <%= pkg.name %> v<%= pkg.version %> */'
        files:
          'style.css': 'sass/style.css'
      grunticon:
        files:
          'grunticon/icons.data.png.min.css': 'grunticon/icons.data.png.css'
          'grunticon/icons.data.svg.min.css': 'grunticon/icons.data.svg.css'
          'grunticon/icons.fallback.min.css': 'grunticon/icons.fallback.css'

    grunticon:
      icons:
        options:
          src: 'vectors'
          dest: 'grunticon'
          customselectors:
            'github-logo': '.github.logo::before'
            'twitter-logo': '.twitter.logo::before'

    jshint:
      options:
        browser: true
        curly: true
        devel: true
        eqeqeq: true
        expr: true
        globals:
          'DS': true
          'Ember': true
          'Portfolio': true
          'Showdown': true
        loopfunc: true
        undef: true
        unused: true
        strict: true
        trailing: true
      run:
        files:
          src: 'js/<%= pkg.name %>.js'
      server:
        options:
          node: true
        files:
          src: 'server/server.js'

    sass:
      compile:
        files:
          'sass/style.css': 'sass/style.scss'

    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
        report: 'min'
      run:
        files:
          '<%= pkg.name %>.min.js': [
            'components/jquery/jquery.js'
            'components/handlebars/handlebars.js'
            'components/ember/ember.js'
            'components/ember-data-shim/ember-data.js'
            'js/templates.js'
            'js/<%= pkg.name %>.js'
          ]

    watch:
      options:
        livereload: true
      content:
        files: 'server/**/*.md'
      grunt:
        files: ['package.json', 'Gruntfile.coffee']
        tasks: 'compile'
      markup:
        files: 'index.html'
      script:
        files: ['js/**/*.coffee', 'server/server.coffee']
        tasks: 'compile:js'
      stylesheets:
        files: 'sass/**/*.scss'
        tasks: 'compile:css'
      vectors:
        files: 'vectors/**/*'
        tasks: 'compile:vectors'

  # Load plugins
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-grunticon'
  grunt.loadNpmTasks 'grunt-sass'

  grunt.registerTask 'build', ['compile', 'uglify']
  grunt.registerTask 'compile', ['compile:vectors', 'compile:css', 'compile:js']
  grunt.registerTask 'compile:css', ['sass', 'cssmin:css']
  grunt.registerTask 'compile:js', ['coffee', 'jshint']
  grunt.registerTask 'compile:vectors', ['grunticon', 'cssmin:grunticon']
  grunt.registerTask 'default', ['compile', 'connect', 'watch']
