module.exports = {
  options: {
    banner: '/*! <%= package.name %> <%= package.version %> */\n',
    report: 'min'
  },
  js: {
    files: {
      '<%= package.name %>.min.js': [
        'bower_components/picturefill/dist/picturefill.js',
        '<%= package.name %>.js'
      ]
    }
  }
};
