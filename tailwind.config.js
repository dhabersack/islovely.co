const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['/src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
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
      textColor: ['disabled', 'visited'],
    },
  },
  plugins: [],
}
