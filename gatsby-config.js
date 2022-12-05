require('dotenv').config()
require('ts-node').register({
  files: true,
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

module.exports = {
  siteMetadata: {
    title: 'Ovosodo',
    siteUrl: process.env.REACT_APP_SITE_URL,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [425, 750, 1080, 1366, 1920],
        },
        defaultQuality: 70,
        failOnError: false,
        useMozJpeg: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        icon_options: {
          purpose: 'any maskable',
        },
        name: 'Ovosodo',
        short_name: 'Ovosodo',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#111111',
        display: 'standalone',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        documentPaths: [`./src/**/*.{ts,tsx}`],
        failOnError: false,
        fileName: './graphql-types.ts',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        batch: true,
        typeName: 'CMSData',
        fieldName: 'cms',
        url: `${process.env.DIRECTUS_URL}/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
        },
        dataLoaderOptions: {
          maxBatchSize: 10,
        },
      },
    },
    'gatsby-plugin-sitemap',
  ],
}
