import React from "react"

import { Layout } from "blocks"

import { data as headerData } from "data/header"
import { data as footerData } from "data/footer"

const PageIndex = ({ location }) => (
  <Layout {...{ location, headerData, footerData }}>Home</Layout>
)

export default PageIndex
