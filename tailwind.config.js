/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      headerGray: '#323232',
      charcoalGray: '#333333',
      goldAccent: '#FFD700',
      offWhite: '#F9F9F9',
      coolGray: "#C9C9C9",
      pureWhite: '#FFFFFF',
      headerGrayLighter: '#393939'
    },
    extend: {
      fontFamily: {
        lato: ['Lato:100,300,400,700,900', 'sans-serif']
      },
      colors: {
        'cool-gray': '#C9C9C9',
        'gold-accent': '#FFD700',
      },
      sepia: {
        25: '.25',
        50: '.50',
        75: '.75',
      }
    },
    plugins: [],
  }
}
