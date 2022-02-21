require("dotenv").config({
  path: ".env"
});

module.exports = {
  siteMetadata: {
    title: `1Vision`,
    description: `Streamlining Communications`,
    author: `@WatermarkAgency`,
    homeUrl: `https://1vision.netlify.app`,
    baseUrl: `https://visiongraphics.netlify.app`
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    /* CONTENTFUL DELIVERY */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
      // options: {
      //   // Add any options here
      // },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 100
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T2XP682",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,400,400i,500,600`,
          `ibm plex sans\:400,500,600,700`
        ],
        display: "swap"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
