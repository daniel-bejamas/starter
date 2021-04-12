import React from "react"

import { Link } from "components"

import { IconHeart } from "assets/icons"

import * as styles from "./styles.module.css"

export const Heartbeat = () => (
  <small className={styles.wrapper}>
    <span>Coded with</span>
    <IconHeart className={styles.icon} />
    <span>
      by{" "}
      <Link to="https://bejamas.io" title="Jamstack Developers" variant="simple">
        Bejamas
      </Link>
    </span>
  </small>
)
