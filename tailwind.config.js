const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.js',
    './_courses/**/*.md',
    './_courses/**/*.mdx',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      mono: ['Source Code Pro', 'monospace'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      opacity: ['disabled'],
      textColor: ['disabled', 'visited'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
