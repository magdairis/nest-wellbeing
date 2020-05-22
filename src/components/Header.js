import React, { useState } from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import theme from "tailwindcss/defaultTheme";
import MenuToggle from "./MenuToggle";
import SvgIconNest from "./SvgIconNest";
import { Link } from "gatsby";

const Header = () => {
  const [variant, setVariant] = useState("closed")

  const toggleVariant = () => {
    console.log(variant)
    if (variant === "closed") {
      setVariant("open")
    } else {
      setVariant("closed")
    }
  }

  return (
    <motion.header className={styles.root}
      initial="closed"
      animate={variant}
    >
      <motion.div
        className={styles.backdrop}
        variants={{
          closed: {
            y: `calc(-100% + ${theme.spacing[16]})`
          },
          open: {
            y: 0,
          },
        }}
        transition={{ type: "spring", damping: 25, mass: 0.9, stiffness: 120 }}
      />
      <div className={styles.containerContainer}>
        <motion.div className={styles.container}>
          <div className={styles.banner}>
            <Link to="/">
              <SvgIconNest />
              <span>Nest Wellbeing</span>
            </Link>
          </div>
          <MenuToggle onClick={toggleVariant} className={styles.menu} />
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;