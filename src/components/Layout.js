import React from "react"
import Header from "./Header"
import "./Layout.css"
import "typeface-manjari"
import "typeface-montserrat"
import { useMedia, MediaContext } from "../hooks"

const Layout = ({ children }) => {
  const screen = useMedia()
  return (
    <MediaContext.Provider value={screen}>
      <Header />
      <main className="pt-16">{children}</main>
    </MediaContext.Provider>
  )
}

export default Layout