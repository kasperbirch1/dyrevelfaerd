module.exports = {
  siteMetadata: {
    title: `Dyrevelfærd`,
    description: `Vi kæmper for at nedbringe antallet af dyr i nød og sikre, at alle nedstødte dyr får den rette hjælp.`,
    author: `Kasper Birch`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dyrevelfærd`,
        short_name: `Dyrevelfærd`,
        start_url: `/`,
        background_color: `#007cff`,
        theme_color: `#007cff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
