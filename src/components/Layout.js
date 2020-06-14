import React from "react"
import Header from "./Header"
import "./Layout.css"
import "typeface-manjari"
import "typeface-montserrat"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
