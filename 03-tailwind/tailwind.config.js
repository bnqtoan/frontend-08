module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "'Inter', sans-serif"
      },
      spacing: {
        'standard': '30px'
      },
      fontSize: {
        'h2': ["48px", "64px"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}