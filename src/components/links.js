import { Link } from "gatsby"
import React from "react"
import styles from "./links.module.css"

export const TextLink = ({ className, ...props }) => {
  return <Link className={styles.textLink} {...props} />
}

export const ButtonLink = ({ className, ...props }) => {
  return <Link className={styles.button} {...props} />
}

export const Anchor = ({ className = styles.anchor, ...props }) => (
  <a className={className} {...props} />
)
