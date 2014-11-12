module.exports = {
  options: {
    report: 'min'
  },
  css: {
    options: {
      banner:  '/*! <%= package.name %> v<%= package.version %> */'
    },
    files: {
      'public/style.css': 'public/style.css'
    }
  },
  grunticon: {
    files: {
      'public/icons.png.css': 'grunticon/icons.data.png.css',
      'public/icons.svg.css': 'grunticon/icons.data.svg.css',
      'public/icons.fallback.css': 'grunticon/icons.fallback.css'
    }
  }
};
