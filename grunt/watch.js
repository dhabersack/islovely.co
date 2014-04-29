module.exports = {
  options: {
    livereload: true
  },
  grunt: {
    files: ['Gruntfile.js', 'grunt/**/*.js', 'package.json'],
    tasks: 'compile'
  },
  markup: {
    files: 'index.html'
  },
  script: {
    files: ['.jshintrc', 'js/**/*.js'],
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
};
