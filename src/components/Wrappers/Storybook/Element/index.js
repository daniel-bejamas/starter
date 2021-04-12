import React from "react"

import * as styles from "./styles.module.css"

export const Element = ({ title, description, children, ...rest }) => (
  <div>
    <fieldset {...{ className: styles.fieldset, ...rest }}>
      {title && <legend>{title}</legend>}
      {children}
    </fieldset>
    {description && <small {...{ className: styles.description }}>{description}</small>}
  </div>
)
