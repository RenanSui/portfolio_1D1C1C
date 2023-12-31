/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      colors: {
        nier: {
          50: '#F2F2F2',
          100: '#FAF8EF',
          200: '#A19D93',
          300: '#BCAEA3',
          400: '#AFA98F',
          500: '#C3BFA7',
          600: '#D1CBAB',
          700: '#4D4A40',
          800: '#302A24',
          900: '#31312F',
          950: '#191713',
        },
      },
      animation: {
        loading: 'loading 0.75s linear infinite',
      },
      keyframes: {
        loading: {
          from: { transform: 'rotate(0turn)' },
          to: { transform: 'rotate(1turn)' },
        },
      },
    },
  },
  plugins: [],
}
