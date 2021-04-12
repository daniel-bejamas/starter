import React from "react"

import { Elements, Element, WrapperSection } from "components"
import { Header } from "./Header"

import { data } from "data/header"

export default { title: "Blocks/Headers", component: Example }

export const Example = () => (
  <Elements>
    <Element title="default">
      <Header {...{ data }} />
    </Element>
    <Element title="section" variant="full-width" info="width">
      <WrapperSection variant="background-light">
        <Header {...{ data }} />
      </WrapperSection>
    </Element>
  </Elements>
)
