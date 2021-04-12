import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { isExternalLink, isUtilityLink } from "utils"

import { IconExternal } from "assets/icons"

import * as styles from "./styles.module.css"

const ElementIcon = ({ icon: Icon }) =>
  Icon ? (
    <span className={styles.icon}>
      <Icon />
    </span>
  ) : null

const ElementIconExternal = () => (
  <span className={styles.iconExternal}>
    <IconExternal />
  </span>
)

const ElementContent = ({ children }) =>
  children ? <span className={styles.content}>{children}</span> : null

export const Link = React.forwardRef(
  ({ to = "/", icon, label, variant, children, ...rest }, ref) => {
    const title = label || (typeof children === "string" && children)
    const styling = { className: variant === "button" ? styles.button : styles.link, variant }
    const props = { ref, title, ...styling, ...rest }

    const content = (
      <>
        <ElementIcon {...{ icon }} />
        <ElementContent>{label || children}</ElementContent>
      </>
    )

    if (isExternalLink(to)) {
      return (
        <a {...{ href: to, target: "_blank", ...props }}>
          {content}
          <ElementIconExternal />
        </a>
      )
    }

    if (isUtilityLink(to)) {
      return <a {...{ href: to, target: "_self", ...props }}>{content}</a>
    }

    return <GatsbyLink {...{ to, ...props }}>{content}</GatsbyLink>
  }
)
