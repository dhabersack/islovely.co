module.exports = {
  js: {
    files: {
      '<%= package.name %>.js': [
        'js/intro.js',
        '<%= jsfiles %>',
        'js/outro.js'
      ]
    }
  },
  sitemap: {
    src: [
      'sitemap-src/header.xml',
      'sitemap-src/list.xml',
      'sitemap-src/footer.xml'
    ],
    dest: 'sitemap.xml'
  }
};
