module.exports = {
  options: {
    banner: '/*! <%= package.name %> <%= package.version %> */\n',
    report: 'min'
  },
  js: {
    files: {
      'public/<%= package.name %>.min.js': [
        'bower_components/picturefill/dist/picturefill.js',
        '<%= package.name %>.js'
      ]
    }
  }
};
