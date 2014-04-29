module.exports = {
  options: {
    report: 'min'
  },
  css: {
    options: {
      banner:  '/*! <%= package.name %> v<%= package.version %> */'
    },
    files: {
      'style.css': 'sass/style.css'
    }
  },
  grunticon: {
    files: {
      'grunticon/icons.data.png.min.css': 'grunticon/icons.data.png.css',
      'grunticon/icons.data.svg.min.css': 'grunticon/icons.data.svg.css',
      'grunticon/icons.fallback.min.css': 'grunticon/icons.fallback.css'
    }
  }
};
