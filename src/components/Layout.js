import React from "react"
import Header from "./Header"
import "./Layout.css"
import "typeface-manjari"
import "typeface-montserrat"
import Footer from "./footer"
import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </div>
    </>
  )
}

export default Layout
