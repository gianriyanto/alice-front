const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      transparent: 'transparent',
      // slate
      slate50: '#f8fafc',
      slate100: '#f1f5f9',
      slate200: '#e2e8f0',
      slate300: '#cbd5e1',
      slate400: '#94a3b8',
      slate500: '#64748b',
      slate600: '#475569',
      slate700: '#334155',
      slate800: '#1e293b',
      slate900: '#0f172a',
      zinc50: '#fafafa',
      zinc100: '#f4f4f5',
      zinc200: '#e4e4e7',
      zinc300: '#d4d4d8',
      zinc400: '#a1a1aa',
      zinc500: '#71717a',
      zinc600: '#52525b',
      zinc700: '#3f3f46',
      zinc800: '#27272a',
      zinc900: '#18181b',
      neutral50: '#fafafa',
      neutral100: '#f5f5f5',
      neutral200: '#e5e5e5',
      neutral300: '#d4d4d4',
      neutral400: '#a3a3a3',
      neutral500: '#737373',
      neutral600: '#525252',
      neutral700: '#404040',
      neutral800: '#262626',
      neutral900: '#171717',
      //palette
      background: '#fafcfc',
      darkblue: '#0b1a36',
      blue: colors.blue,
      lightgrey: 'rgba(191,191,191,0.39)',
      //supporting colors
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
      green: colors.emerald,
      teal: colors.teal

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
      },
      height: {
        '98': '25rem',
        'thread-feed': '40rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
