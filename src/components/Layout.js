import React from "react";
import Nav from "./Nav";
import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <div>
            <h2 className="mx-4 bg-pink-500">teasie?</h2>
            <div>{children}</div>
            <Nav />
        </div>
    );
}

export default Layout;