module.exports = {
  compile: {
    options: {
      bundleExec: true,
      sourcemap: 'none'
    },
    files: {
      'public/style.css': 'sass/style.scss'
    }
  }
};
