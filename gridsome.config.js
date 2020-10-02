module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './src/content/projects/*.md',
        route: '/projects/:path',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')],
      },
    },
  },
}
