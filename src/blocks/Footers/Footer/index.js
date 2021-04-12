import React from "react"

import { Link } from "components"

import * as styles from "./styles.module.css"

export const Footer = ({ data }) => (
  <footer className={styles.footer}>
    {(data?.columns || []).map(column => (
      <div className={styles.column}>
        <h5>{column.label}</h5>
        {(column?.links || []).map(link => (
          <Link {...link} />
        ))}
      </div>
    ))}
  </footer>
)
