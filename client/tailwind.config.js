module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'russo': ['"russo one"', 'sans-serif']
      },
      colors: {
        consumer: {DEFAULT: "#b0c3d9"},
        industrial: {DEFAULT: "#5e98d9"},
        military: {DEFAULT: "#4b69ff"},
        restricted: {DEFAULT: "#8847ff"},
        classified: {DEFAULT: "#d32ce6"},
        covert: {DEFAULT: "#eb4b4b"},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
