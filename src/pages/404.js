import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { Layout } from "blocks"

import { data as headerData } from "data/header"
import { data as footerData } from "data/footer"

const PageNotFound = ({ location }) => (
  <Layout {...{ location, headerData, footerData }}>
    <h1>Page not found.</h1>
    <p>{location.pathname} page does not exist.</p>
    <GatsbyLink to="/">Back to the home page</GatsbyLink>
  </Layout>
)

export default PageNotFound
