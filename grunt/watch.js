module.exports = {
  options: {
    livereload: true
  },
  content: {
    files: ['site/**/*'],
    tasks: ['jekyll', 'compile']
  },
  grunt: {
    files: ['Gruntfile.js', 'grunt/**/*', 'package.json'],
    tasks: ['jekyll', 'compile']
  },
  markup: {
    files: 'index.html'
  },
  script: {
    files: ['.jshintrc', 'js/**/*.js'],
    tasks: 'js'
  },
  stylesheets: {
    files: 'sass/**/*.scss',
    tasks: 'css'
  },
  vectors: {
    files: 'vectors/**/*',
    tasks: 'vectors'
  }
};
