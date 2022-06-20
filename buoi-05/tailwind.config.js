/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.html"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontSize: {
        "h1": ["72px", { lineHeight: 1.3 }],
        "h2": ["48px", { lineHeight: 1.5 }],
        "h5": ["24px", { lineHeight: 1.3 }],
        "subtitle": ["18px", { lineHeight: 1.5 }],
        "p": ["18px", { lineHeight: 1.7 }],
        "body": ["14px", { lineHeight: 1.5 }]
      },
      colors: {
        white: '#ffffff',
        purple: '#8C30F5',
        gray100: '#F4F5F7',
        gray300: '#D9DBE1',
        gray900: '#18191F'
      },
    },
  },
  plugins: [],
}
