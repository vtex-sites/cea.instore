const STORE_ID = 'cea'

module.exports = {
  plugins: [
    {
      resolve: '@vtexlab/gatsby-theme-instore-core',
      options: { tenant: STORE_ID },
    },
  ],
}
