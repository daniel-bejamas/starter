import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, withPrefix, graphql } from "gatsby"

export const SEO = ({ location = { pathname: "/" }, seo = {} }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            url
            meta {
              title
              description
              image
            }
            og {
              title
              description
              image
              type
            }
            twitter {
              title
              description
              image
              card
            }
          }
        }
      }
    `}
    render={data => {
      const { url, meta, og, twitter } = data.site.siteMetadata

      const getProperty = (name, type = {}) => seo[name] || type[name] || meta[name]

      const getImage = type => url + withPrefix(getProperty("image", type))

      const default_props = {
        title: getProperty("title"),
        description: getProperty("description"),
        image: getImage(),
      }

      const og_props = {
        url: url + location.pathname || "",
        type: og.type,
        title: getProperty("title", og),
        description: getProperty("description", og),
        image: getImage(og),
      }

      const twitter_props = {
        card: twitter.card,
        title: getProperty("title", twitter),
        description: getProperty("description", twitter),
        image: getImage(twitter),
      }

      return (
        <Helmet>
          <title>{default_props.title}</title>
          <meta name="description" content={default_props.description} />
          <meta name="image" content={default_props.image} />

          {Object.keys(og_props).map(key => (
            <meta property={`og:${key}`} content={og_props[key]} />
          ))}

          {Object.keys(twitter_props).map(key => (
            <meta name={`twitter:${key}`} content={twitter_props[key]} />
          ))}
        </Helmet>
      )
    }}
  />
)
