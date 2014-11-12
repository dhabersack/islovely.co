module.exports = {
  run: {
    options: {
      open: false,
      watchTask: true,
      server: {
        baseDir: 'public'
      }
    },
    bsFiles: {
      src: 'site/**/*'
    }
  }
};
