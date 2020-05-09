import React from "react";
import Nav from "./Nav";
import "./Layout.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;