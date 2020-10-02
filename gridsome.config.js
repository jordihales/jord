module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')],
      },
    },
  },
}
