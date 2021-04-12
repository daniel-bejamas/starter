import React from "react"

import * as styles from "./styles.module.css"

export const WrapperSection = ({ children, ...rest }) => (
  <section {...{ className: styles.section, ...rest }}>
    <div>{children}</div>
  </section>
)
