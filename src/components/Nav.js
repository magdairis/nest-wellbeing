import { useLocation } from "@reach/router"
import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/classes", label: "Classes" },
    { href: "/faq", label: "FAQ's" },
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
        <motion.nav {...props}>
            {links.map(linkProps => (
                <NavLink key={linkProps.href} children={children} {...linkProps} />
            ))}
        </motion.nav>
    )
}

export default Nav
