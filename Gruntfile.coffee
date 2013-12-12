'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffee:
      options:
        sourceMap: true
      run:
        files:
          '<%= pkg.name %>.js': [
            'coffee/application.coffee'
            'coffee/router.coffee'
            'coffee/adapter.coffee'
            'coffee/store.coffee'
            'coffee/controllers/**/*.coffee'
            'coffee/models/**/*.coffee'
            'coffee/helpers.coffee'
          ]

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
          colors:
            blue: '#3581fc'
            gray: '#bdbdbd'
            green: '#23db2a'
            orange: '#ff9949'
            red: '#e33d27'
            violet: '#904fff'
            yellow: '#ffe226'
          customselectors:
            'github-logo': '.github.logo::before'
            'islovely-logo-blue': '.islovely.logo::before'
            'twitter-logo': '.twitter.logo::before'
            'xing-logo': '.xing.logo::before'

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
          'moment': true
        undef: true
        unused: true
        strict: true
        trailing: true
      run:
        files:
          src: '<%= pkg.name %>.js'

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
            'bower_components/jquery/jquery.min.js'
            'bower_components/handlebars/handlebars.js'
            'bower_components/ember/ember.min.js'
            'bower_components/ember-data/ember-data.min.js'
            'bower_components/showdown/compressed/showdown.js'
            'bower_components/momentjs/min/moment.min.js'
            '<%= pkg.name %>.js'
          ]

    watch:
      options:
        livereload: true
      grunt:
        files: ['package.json', 'Gruntfile.coffee']
        tasks: 'compile'
      markup:
        files: 'index.html'
      script:
        files: 'coffee/**/*.coffee'
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
