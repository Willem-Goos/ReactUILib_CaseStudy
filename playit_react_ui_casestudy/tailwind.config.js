/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      'piblue': '#3AC4FF',
      'pibluehover': 'rgba(80, 192, 255, 0.21)',
      'white': 'rgba(255,255,255,1)',
      'dark': {
        '100': '#333333',
        '200': '#FF252526'
      },
      'pi': {
        'blue': '#3AC4FF',
        'bluehover': 'rgba(80, 192, 255, 0.21)',
      }
    },
    extend: {
      width: {
        '264': '264px'
      },
      height: {
        '36': '36px',
        '264': '264px'
      },
      minHeight: {
        '264': '264px'
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      borderRadius: {
        'pi5': '5px'
      },
      zIndex: {
        '1000': '1000'
      }
    },
  },
  plugins: [],
}

