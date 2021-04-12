import React from "react"

import * as styles from "./styles.module.css"

export const Button = React.forwardRef(({ children, ...rest }, ref) => (
  <button {...{ ref, className: styles.button, ...rest }}>{children}</button>
))