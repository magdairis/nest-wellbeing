import { motion, AnimateSharedLayout } from "framer-motion";
import { Link } from "gatsby";
import React, { useState } from "react";
import theme from "tailwindcss/defaultTheme";
import styles from "./Header.module.css";
import MenuToggle from "./MenuToggle";
import Nav from "./Nav";
import SvgIconNest from "./SvgIconNest";

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => void setOpen(!open)

  return (
    <motion.header className={styles.root}
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className={styles.backdrop}
        variants={{
          closed: {
            y: `calc(-100% + ${theme.spacing[16]})`,
            transition: { type: "spring", damping: 25, mass: 0.9, stiffness: 120, delay: 0.3 }
          },
          open: {
            y: 0,
            transition: { type: "spring", damping: 25, mass: 0.9, stiffness: 120 }
          },
        }}
      />
      <motion.div className={styles.container}>
        <div className={styles.banner}>
          <Link to="/">
            <SvgIconNest />
            <span>Nest Wellbeing</span>
          </Link>
        </div>
        <MenuToggle key="menuToggle" onClick={toggleOpen} className={styles.menu} />
        <Nav variants={{
          open: {
            display: "flex",
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
          closed: {
            display: "none",
            transition: {
              staggerChildren: 0.07,
              staggerDirection: -1,
              display: {
                delay: 1
              }
            },
          },
        }} className={styles.navMobile}>
          {({ href, label, active }) => (
            <motion.div variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 }
            }}>
              <Link to={href} data-active={active} onClick={() => void setOpen(false)}>
                {label}
              </Link>
            </motion.div>
          )}
        </Nav>
        <AnimateSharedLayout>

          <Nav className={styles.navDesktop}>
            {({ href, label, active }) => (
              <Link to={href}>
                <span>{label}</span>
                {active && (
                  <motion.div layoutId="desktopNavUnderline" />
                )}
              </Link>
            )}

          </Nav>
        </AnimateSharedLayout>
      </motion.div>
    </motion.header >
  );
}

export default Header;