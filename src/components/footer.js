import React from "react"
import Nav from "./Nav"
import styles from "./footer.module.css"
import SvgIconNest from "./SvgIconNest"
import { ReactComponent as SvgIconFacebook } from "../data/svgs/facebook-icon.svg"

const Footer = () => {
  return (
    <div className={styles.root}>
      <footer className={styles.footer}>
        <Nav className={styles.nav} />
        <hr />
        <div className={styles.icons}>
          <SvgIconNest />
          <SvgIconFacebook />
        </div>
      </footer>
    </div>
  )
}

export default Footer
