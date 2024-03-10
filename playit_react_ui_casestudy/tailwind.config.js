module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      'piblue': '#3AC4FF',
      'pibluehover': 'rgba(80, 192, 255, 0.21)',
      'white': 'rgba(255,255,255,1)',
      'dark': {
        '100': '#333333',
        '200': '#FF252526'
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
      }
      },
  },
  variants: {},
  plugins: [],
}
