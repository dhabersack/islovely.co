'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      options:
        sourceMap: true
      run:
        files:
          'assets/javascripts/<%= pkg.name %>.js': 'assets/javascripts/<%= pkg.name %>.coffee'

    connect:
      server:
        options:
          port: 1506

    jshint:
      options:
        browser: true
        curly: true
        devel: true
        eqeqeq: true
        undef: true
        unused: true
        strict: true
        trailing: true
      run:
        files:
          src: 'assets/javascripts/<%= pkg.name %>.js'

    sass:
      options:
        bundleExec: true
        style: 'compressed'
      run:
        files:
          'assets/stylesheets/style.css': 'assets/stylesheets/style.scss'

    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
        report: 'min'
      run:
        files:
          'assets/javascripts/<%= pkg.name %>.min.js': 'assets/javascripts/<%= pkg.name %>.js'

    watch:
      options:
        livereload: true
      content:
        files: '**/*.md'
      markup:
        files: '**/*.haml'
      script:
        files: 'assets/javascripts/*.coffee'
        tasks: ['coffee', 'jshint', 'uglify']
      stylesheets:
        files: 'assets/stylesheets/**/*.scss'
        tasks: 'sass'

  # Load plugins
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', ['connect', 'sass', 'coffee', 'jshint', 'uglify', 'watch']
