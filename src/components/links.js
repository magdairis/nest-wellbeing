import React from "react"
import { Link } from "gatsby"
import styles from "./links.module.css"

export const TextLink = ({ className, ...props }) => {
  return <Link className={styles.textLink} {...props} />
}

export const ButtonLink = ({ className, ...props }) => {
  return <Link className={styles.button} {...props} />
}
