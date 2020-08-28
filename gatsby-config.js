module.exports = {
  siteMetadata: {
    title: `AIM - Australia`,
    description: `Ambedkar International Mission - Help, Sustain your community`,
    author: `@gatsbyjs`,
    // Links to your social networks:
   social: [
    {
      url: 'https://github.com/kapilkamble',
      name: 'GitHub'
    }
  ]
  },
  plugins: [
    // {
    //   resolve: `gatsby-theme-contact`,
    //   options: {
    //     contactPath: '/contact',
    //     successPath: '/thanks'
    //   }
    // },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ambedkar-mission.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
