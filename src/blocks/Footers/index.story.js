import React from "react"

import { Elements, Element, WrapperSection } from "components"
import { Footer } from "./Footer"

import { data } from "data/footer"

export default { title: "Blocks/Footers", component: Example }

export const Example = () => (
  <Elements>
    <Element title="default">
      <Footer {...{ data }} />
    </Element>
    <Element title="section" variant="full-width" info="width">
      <WrapperSection variant="background-light">
        <Footer {...{ data }} />
      </WrapperSection>
    </Element>
  </Elements>
)
