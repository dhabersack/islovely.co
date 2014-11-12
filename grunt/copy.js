module.exports = {
  grunticon: {
    files: [
      {
        expand: true,
        cwd: 'grunticon/grunticon',
        src: ['**'],
        dest: 'public/grunticon/'
      }
    ]
  }
};
