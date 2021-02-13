const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.js',
    './_courses/**/*.md',
    './_courses/**/*.mdx',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
    fontFamily: {
      mono: ['Source Code Pro', 'monospace'],
      sans: ['Inter', 'sans-serif'],
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      display: ['dark'],
      opacity: ['disabled'],
      textColor: ['disabled', 'visited'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
