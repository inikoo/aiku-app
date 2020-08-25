
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },

    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
}
