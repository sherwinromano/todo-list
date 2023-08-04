/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
      backgroundImage: {
        'cover-photo': "url('/public/img/background.JPG')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'light-mode': '#f0f0f0',
        'dark-mode': '#252525',
        'btn-danger': '#DB2222',
        'btn-add': '#20C030',
        'input': '#e1e1e1',
        'overlay-bg': '#00000080',
        'border-light': '#d5d5d5',
        'border-dark': '#444444',
        'highlight': '#8e8e8e80',
      },
      width: {
        '30': '30%',
        '40': '40%',
        '45': '45%',
        '60': '60%',
      },
      fontSize: {
        '1.3': '1.3rem',
        '3': '.9rem',
      },
      height: {
        '18': '4.5rem',
      },
      flexBasis: {
        '25': '25rem'
      },
      borderRadius: {
        '4': '4px',
      },
      translate: {
        '100': '100%',
        '50': '50rem',
        '50%': '-50%',
      }
    },
  },
  plugins: [],
}

