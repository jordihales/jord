module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        white: '#f7f7f7',
      },
      transitionProperty: {
        size: 'height, width',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
}
