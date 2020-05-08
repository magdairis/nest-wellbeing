import { useLocation } from "@reach/router"
import React from "react"
import { Link } from "gatsby"

const links = [
    { href: "/", label: "Home" },
    // { href: "/blog", label: "Blog" },
    // { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

const NavLink = ({ children, href, label, ...props }) => {
    const { pathname } = useLocation()
    const pathBeginning = `/${pathname.split("/")[1]}`
    const active = pathBeginning === href
    return children ? (
        children({ href, label, active, ...props })
    ) : (
            <Link to={href} {...props}>
                {label}
            </Link>
        )
}

const Nav = ({ children, ...props }) => {
    return (
        <nav {...props}>
            {links.map(linkProps => (
                <NavLink key={linkProps.href} children={children} {...linkProps} />
            ))}
        </nav>
    )
}

export default Nav
