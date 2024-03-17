const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [plugin(function({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.7xl') },
      'h2': { fontSize: theme('fontSize.5xl') },
      'h3': { fontSize: theme('fontSize.2xl') },
    })
  })],
}

