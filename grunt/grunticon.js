module.exports = {
  icons: {
    options: {
      colors: {
        brand: '#3581fc'
      },
      customselectors: {
        'device-desktop': ['.device-desktop::before'],
        'device-laptop': ['.device-laptop::before'],
        'device-smartphone': ['.device-smartphone::before'],
        'device-tablet': ['.device-tablet::before'],

        'logo-github': ['.logo-github::before'],
        'logo-islovely-brand': ['.logo-islovely::before'],
        'logo-twitter': ['.logo-twitter::before'],
      },
      pngfolder: 'grunticon'
    },
    files: [{
      expand: true,
      cwd: 'vectors',
      src: ['*.svg', '*.png'],
      dest: 'grunticon'
    }]
  }
};
