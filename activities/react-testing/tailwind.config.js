const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/components/**/*.{jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
    },
  },
}