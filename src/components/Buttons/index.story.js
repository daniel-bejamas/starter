import React from "react"
import { action } from "@storybook/addon-actions"

import { Elements, Element, Button } from "components"

export default { title: "Components/Buttons", component: Default }

export const Default = () => (
  <Elements>
    <Element title="Primary">
      <Button onClick={action("click")}>Click me!</Button>
    </Element>
    <Element title="Disabled">
      <Button disabled>Cannot click me!</Button>
    </Element>
  </Elements>
)
