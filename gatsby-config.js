require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  
  module.exports = {
    siteMetadata: {
      title: `SV Sea Senora`,
      description: `WebPage for SV Sea Senora. Sailing,Travel,YouTube And Blog Site.A Must To Check Out.`,
      author: `Fred`,
      siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`
    },
    plugins: [
      "gatsby-transformer-sharp",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sharp",
      "gatsby-plugin-image",
      {
        resolve: "gatsby-source-contentful",
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          host: process.env.CONTENTFUL_HOST
        },
      },
    ],
  };
  