'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      options:
        sourceMap: true
      compile:
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
          port: 1506

    grunticon:
      icons:
        options:
          src: 'vectors'
          dest: 'grunticon'
          customselectors:
            'github-logo': '.github.logo'
            'islovely-logo': '.islovely.logo'
            'twitter-logo': '.twitter.logo'

    jshint:
      options:
        browser: true
        curly: true
        devel: true
        eqeqeq: true
        globals:
          'DS': true
          'Ember': true
          'Portfolio': true
          'Showdown': true
        undef: true
        unused: true
        strict: true
        trailing: true
      run:
        files:
          src: 'js/<%= pkg.name %>.js'

    sass:
      options:
        bundleExec: true
        style: 'compressed'
      compile:
        files:
          'style.css': 'sass/style.scss'

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
        files: ['js/**/*.coffee', 'server/**/*.coffee']
        tasks: 'compile:js'
      stylesheets:
        files: 'sass/**/*.scss'
        tasks: 'compile:css'
      vectors:
        files: 'vectors/**/*'
        tasks: 'grunticon'

  # Load plugins
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-grunticon'

  grunt.registerTask 'build', ['compile', 'uglify']
  grunt.registerTask 'compile', ['grunticon', 'compile:css', 'compile:js']
  grunt.registerTask 'compile:css', 'sass'
  grunt.registerTask 'compile:js', ['coffee', 'jshint']
  grunt.registerTask 'default', ['compile', 'connect', 'watch']
