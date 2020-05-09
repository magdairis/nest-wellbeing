import React from "react";
import Header from "./Header";
import "./Layout.css";
import "typeface-manjari";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;