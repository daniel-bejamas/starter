import React from "react"

import { Header, Footer } from "blocks"
import { SEO, WrapperSection } from "components"

export const Layout = ({ location, seo, headerData, footerData, children }) => (
  <>
    <SEO {...{ location, seo }} />
    <WrapperSection variant="background-light">
      <Header data={headerData} />
    </WrapperSection>
    <main>{children}</main>
    <WrapperSection variant="background-light">
      <Footer data={footerData} />
    </WrapperSection>
  </>
)
