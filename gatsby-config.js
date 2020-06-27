module.exports = {
  siteMetadata: {
    title: `Nest Wellbeing`,
    description: `Mum and baby wellbeing in Bearwood and Beyond`,
    seo: {
      ogp: {
        image: `/images/twitter-fb-card.png`,
      },
      twitter: {
        image: `/images/twitter-fb-card.png`,
      },
    },
    siteUrl: `https://nestwellbeing.com`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svgs`,
        path: `${__dirname}/src/data/svgs`,
      },
    },
    `gatsby-transformer-svgo-inline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/Layout.js`,
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        // dimensions: false
        icon: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/data/pages`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-svgr`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
