module.exports = {
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
};
