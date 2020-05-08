import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.backdrop} />
    </header>
  );
}

export default Header;