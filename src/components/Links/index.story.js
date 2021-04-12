import React from "react"

import { Elements, Element, Link } from "components"

import { IconInfo } from "assets/icons"

export default { title: "Components/Links", component: Default }

export const Default = () => (
  <Elements>
    <Element title="internal">
      <Link>Contact us</Link>
    </Element>
    <Element title="external">
      <Link to="https://bejamas.io">bejamas.io</Link>
    </Element>
    <Element title="mailto">
      <Link to="mailto:me@bejamas.io">me@bejamas.io</Link>
    </Element>
  </Elements>
)

export const Variants = () => (
  <Elements>
    <Element title="external">
      <Link variant="external" to="https://bejamas.io">
        bejamas.io
      </Link>
    </Element>
    <Element title="button">
      <Link variant="button" to="https://bejamas.io">
        Get in touch
      </Link>
    </Element>
    <Element title="icon-before">
      <Link icon={IconInfo} variant="icon-before">
        Learn more
      </Link>
    </Element>
    <Element title="icon-after">
      <Link icon={IconInfo} variant="icon-after">
        Learn more
      </Link>
    </Element>
    <Element title="icon">
      <Link icon={IconInfo} />
    </Element>
  </Elements>
)

export const Responsive = () => (
  <Elements>
    <Element title="internal">
      <p>
        <Link>Contact us</Link>
      </p>
    </Element>
    <Element title="external">
      <p>
        <Link to="https://bejamas.io">bejamas.io</Link>
      </p>
    </Element>
    <Element title="mailto">
      <p>
        <Link to="mailto:me@bejamas.io">me@bejamas.io</Link>
      </p>
    </Element>
    <Element title="simple">
      <p>
        <Link variant="simple">bejamas.io</Link>
      </p>
    </Element>
    <Element title="button">
      <p>
        <Link variant="button">Get in touch</Link>
      </p>
    </Element>
    <Element title="icon-before">
      <p>
        <Link icon={IconInfo} variant="icon-before">
          Learn more
        </Link>
      </p>
    </Element>
    <Element title="icon-after">
      <p>
        <Link icon={IconInfo} variant="icon-after">
          Learn more
        </Link>
      </p>
    </Element>
    <Element title="icon">
      <p>
        <Link icon={IconInfo} />
      </p>
    </Element>
  </Elements>
)

const content = (
  <>
    We build <Link>fast sites</Link> & apps.
    <br />
    We build{" "}
    <Link variant="external" to="https://bejamas.io">
      fast sites
    </Link>{" "}
    & apps.
    <br />
    We build{" "}
    <Link icon={IconInfo} variant="icon-before">
      fast sites
    </Link>{" "}
    & apps
    <br />
    We build{" "}
    <Link icon={IconInfo} variant="icon-after">
      fast sites
    </Link>{" "}
    & apps
    <br />
    We build <Link icon={IconInfo} /> & apps
  </>
)

export const Inline = () => (
  <Elements>
    <Element title="p">
      <p>{content}</p>
    </Element>
    <Element title="h1">
      <h1>{content}</h1>
    </Element>
    <Element title="h2">
      <h2>{content}</h2>
    </Element>
    <Element title="h3">
      <h3>{content}</h3>
    </Element>
    <Element title="h4">
      <h4>{content}</h4>
    </Element>
  </Elements>
)
