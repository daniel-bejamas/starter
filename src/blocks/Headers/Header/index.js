import React from "react"

import { Link } from "components"

import * as styles from "./styles.module.css"

/**
 * @function
 * @name Header
 * @param {object} {data} object
 * @returns {function}
 */
export const Header = ({ data }) => (
  <header className={styles.header}>
    {(data?.links || []).map(link => (
      <Link {...link} />
    ))}
  </header>
)
