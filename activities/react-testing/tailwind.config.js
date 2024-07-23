const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/components/**/*.{jsx,js,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
    },
  },
}