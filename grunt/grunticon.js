module.exports = {
  icons: {
    options: {
      colors: {
        brand: '#3581fc'
      },
      customselectors: {
        'logo-github': ['.logo-github::before'],
        'logo-linkedin': ['.logo-linkedin::before'],
        'logo-islovely-brand': ['.logo-islovely::before'],
        'logo-twitter': ['.logo-twitter::before'],
        'logo-xing': ['.logo-xing::before']
      }
    },
    files: [{
      expand: true,
      cwd: 'vectors',
      src: ['*.svg', '*.png'],
      dest: 'grunticon'
    }]
  }
};
