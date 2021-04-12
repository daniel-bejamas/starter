import React from "react"

import { Elements, Element } from "components"

export default { title: "Components/Typography", component: Default }

export const Default = () => (
  <Elements>
    <Element title="default">
      <div>We build fast sites & apps.</div>
    </Element>
    <Element title="b">
      <b>We build fast sites & apps.</b>
    </Element>
    <Element title="i">
      <i>We build fast sites & apps.</i>
    </Element>
    <Element title="small">
      <small>We build fast sites & apps.</small>
    </Element>
  </Elements>
)

export const Responsive = () => (
  <Elements>
    <Element title="h1">
      <h1>We build fast sites & apps.</h1>
    </Element>
    <Element title="h2">
      <h2>We build fast sites & apps.</h2>
    </Element>
    <Element title="h3">
      <h3>We build fast sites & apps.</h3>
    </Element>
    <Element title="h4">
      <h4>We build fast sites & apps.</h4>
    </Element>
    <Element title="p">
      <p>
        Jamstack is no longer a buzz word over which dev keyword warriors brawl. It has grown to
        become a booming ecosystem of tools helping developers ship performant websites, progressive
        web apps, and other projects with benefits too good to ignore.
      </p>
    </Element>
    <Element title="b">
      <p>
        <b>We build fast sites & apps.</b>
      </p>
    </Element>
    <Element title="i">
      <p>
        <i>We build fast sites & apps.</i>
      </p>
    </Element>
  </Elements>
)
