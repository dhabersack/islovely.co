module.exports = {
  options: {
    browsers: [
      '> 1%',
      'last 2 versions',
      'Android >= 4',
      'Chrome >= 32',
      'Firefox >= 26',
      'Firefox ESR',
    ],
    cascade: true
  },
  run: {
    src: 'public/style.css'
  }
};
