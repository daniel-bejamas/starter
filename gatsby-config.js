require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    url: process.env.URL || "localhost:8000",
    meta: {
      // TODO: update
      title: "DEFAULT_TITLE",
      description: "DEFAULT_DESCRIPTION",
      image: "/images/seo.png",
    },
    og: {
      // https://developers.facebook.com/docs/sharing/webmasters
      // TODO: update
      title: "OG_TITLE",
      description: "OG_DESCRIPTION",
      image: "/images/seo.png",
      type: "website",
    },
    twitter: {
      // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
      // TODO: update
      title: "TWITTER_TITLE",
      description: "TWITTER_DESCRIPTION",
      image: "/images/seo.png",
      card: "summary",
    },
  },
  plugins: [
    {
      // https://developer.mozilla.org/en-US/docs/Web/Manifest
      // TODO: update
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "APP_NAME",
        short_name: "SHORT_APP_NAME",
        start_url: "/",
        background_color: "#000",
        theme_color: "#000",
        display: "minimal-ui",
        icon: "static/images/icon.png",
        theme_color_in_head: false,
      },
    },
    "gatsby-plugin-csp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-preact",
    "gatsby-plugin-loadable-components-ssr",
    "gatsby-plugin-svgr",
  ],
}
