'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      options:
        sourceMap: true
      run:
        files:
          'source/assets/javascripts/<%= pkg.name %>.js': 'source/assets/javascripts/<%= pkg.name %>.coffee'

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
          src: 'source/assets/javascripts/<%= pkg.name %>.js'

    sass:
      options:
        bundleExec: true
        style: 'compressed'
      run:
        files:
          'source/assets/stylesheets/style.css': 'source/assets/stylesheets/style.scss'

    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
        report: 'min'
      run:
        files:
          'source/assets/javascripts/<%= pkg.name %>.min.js': 'source/assets/javascripts/<%= pkg.name %>.js'

    watch:
      options:
        livereload: true
      content:
        files: ['content/**/*']
      markup:
        files: ['site/snippets/*.php', 'site/templates/*.php'] # TODO
      script:
        files: 'source/assets/javascripts/*.coffee'
        tasks: ['coffee', 'jshint', 'uglify']
      stylesheets:
        files: 'source/assets/stylesheets/**/*.scss'
        tasks: 'sass'

  # Load plugins
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', ['sass', 'coffee', 'jshint', 'uglify', 'watch']
