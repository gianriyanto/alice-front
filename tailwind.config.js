const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      //palette
      darkblue: '#0b1a36',
      lighterblue: '#0d1f40',
      blue: colors.blue,
      lightgrey: 'rgba(191,191,191,0.39)',
      white: '#f2f6f8',
      bluegrey: 'rgb(229,230,238)',
      //supporting colors
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
      green: colors.emerald

    },
    fontFamily: {
      'roboto-slab': ['"Roboto Slab"', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'nunito-sans': ['"Nunito Sans"', 'sans-serif']
    },
    fontWeight: {
      'thin': 100,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900
    },
    extend: {
      width: {
        '1/16': '6.25%',
        '2/16': '12.5%',
        '3/16': '18.75%',
        '4/16': '25%',
        '5/16': '31.25%',
        '6/16': '37.5%',
        '7/16': '43.75%',
        '8/16': '50%',
        '9/16': '56.25%',
        '10/16': '62.5%',
        '11/16': '68.75%',
        '12/16': '75%',
        '13/16': '81.25%',
        '14/16': '87.5%',
        '15/16': '93.75%',
        '16/16': '100%',
      },
      spacing: {
        '96': '24rem',
        '100': '28rem',
        '104': '29rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
