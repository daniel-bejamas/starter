import React from "react"

import * as styles from "./styles.module.css"

export const Hamburger = ({ ...rest }) => (
  <div {...{ className: styles.hamburger, ...rest }}>
    <span />
    <span />
    <span />
    <span />
  </div>
)
