import React from "react"

import { Elements, Element, Heartbeat, Hamburger } from "components"

export default { title: "Components/Miscellaneous", component: Example }

export const Example = () => {
  const [isOpened, setIsOpened] = React.useState()

  return (
    <Elements>
      <Element title="Heartbeat">
        <Heartbeat />
      </Element>
      <Element title="Ham">
        <Hamburger onClick={() => setIsOpened(!isOpened)} opened={String(isOpened)} />
      </Element>
    </Elements>
  )
}
