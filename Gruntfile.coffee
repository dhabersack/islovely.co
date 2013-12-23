'use strict'

urls = [
  '#!/'

  '#!/clients'
  '#!/clients/gini'
  '#!/clients/falconfinch'
  '#!/clients/meinferiencamp'
  '#!/clients/masfina'
  '#!/clients/johannabeyer'

  '#!/pages'
  '#!/pages/about'
  '#!/pages/contact'
  '#!/pages/imprint'
  '#!/pages/process'
  '#!/pages/regarding-recruitment'
  '#!/pages/request-a-proposal'
  '#!/pages/services'

  '#!/posts'
  '#!/posts/debunking-whitewashed-exam-statistics'
  '#!/posts/grunt-contrib-sass-and-node-js-0-10-8'
  '#!/posts/insights-of-a-new-screencaster'
  '#!/posts/on-lazy-journalism'
  '#!/posts/painless-installation-of-sml-on-os-x'
  '#!/posts/screencasts-on-standard-ml-in-german'
  '#!/posts/sml-nj-110.74-on-os-x-10.8-mountain-lion'
  '#!/posts/understanding-css-hierarchy-matching'
  '#!/posts/why-students-fail-entry-level-programming-exams'
  '#!/posts/writing-high-performance-css'
]

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    clean:
      postsnapshots:
        src: 'snapshots-build'
      presnapshots:
        src: ['sitemap.xml', 'snapshots', 'snapshots-build']

    coffee:
      options:
        sourceMap: true
      run:
        files:
          '<%= pkg.name %>.js': [
            'coffee/application.coffee'
            'coffee/location.coffee'
            'coffee/router.coffee'
            'coffee/adapter.coffee'
            'coffee/store.coffee'
            'coffee/controllers/**/*.coffee'
            'coffee/models/**/*.coffee'
            'coffee/helpers.coffee'
          ]

    concat:
      sitemap:
        src: ['sitemap-src/header.xml', 'sitemap-src/list.xml', 'sitemap-src/footer.xml']
        dest: 'sitemap.xml'

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

    htmlmin:
      options:
        collapseWhitespace: true
        removeComments: true
        removeEmptyAttributes: true
      snapshots:
        cwd: 'snapshots-build/'
        dest: 'snapshots/'
        expand: true
        src: '**/*.html'

    htmlSnapshot:
      run:
        options:
          fileNamePrefix: ''
          removeLinkTags: true
          removeScripts: true
          replaceStrings: [
            { 'ember-application': '' }
            { 'ember-view': '' }
            { 'ember\\d+': '' }
            { 'class=".*?"': '' }
            { 'id=".*?"': '' }
          ]
          sanitize: (requestUri) ->
            requestUri = requestUri.replace(/^#!\//g, '')
            # if requestUri is '' then 'index' else requestUri.replace(/\//g, '-')
            if requestUri is '' then 'index' else requestUri
          sitePath: 'http://localhost'
          snapshotPath: 'snapshots-build/'
          urls: urls

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

    php:
      server:
        options:
          hostname: '0.0.0.0'
          keepalive: true

    sass:
      compile:
        files:
          'sass/style.css': 'sass/style.scss'

    shell:
      createSitemapList:
        command: "echo '  <url><loc>http://islovely.co/#{ urls.join('</loc></url>\n  <url><loc>http://islovely.co/') }</loc></url>' > sitemap-src/list.xml"

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
        files: 'index.php'
      script:
        files: 'coffee/**/*.coffee'
        tasks: 'compile:js'
      stylesheets:
        files: 'sass/**/*.scss'
        tasks: 'compile:css'
      vectors:
        files: 'vectors/**/*'
        tasks: 'compile:vectors'

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-grunticon')
  grunt.loadNpmTasks('grunt-html-snapshot')
  grunt.loadNpmTasks('grunt-php')
  grunt.loadNpmTasks('grunt-sass')
  grunt.loadNpmTasks('grunt-shell')

  grunt.registerTask('build', ['compile', 'uglify'])
  grunt.registerTask('compile', ['compile:vectors', 'compile:css', 'compile:js'])
  grunt.registerTask('compile:css', ['sass', 'cssmin:css'])
  grunt.registerTask('compile:js', ['coffee', 'jshint'])
  grunt.registerTask('compile:vectors', ['grunticon', 'cssmin:grunticon'])
  grunt.registerTask('default', ['compile', 'watch'])
  grunt.registerTask('sitemap', ['shell:createSitemapList', 'concat:sitemap'])
  grunt.registerTask('snapshot', ['clean:presnapshots', 'htmlSnapshot', 'htmlmin:snapshots', 'clean:postsnapshots', 'sitemap'])

