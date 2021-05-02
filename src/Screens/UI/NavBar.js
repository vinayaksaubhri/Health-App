import React from "react";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-bar__home"]}>
          <span></span>
          <div>Home</div>
        </div>
        <div className={styles["nav-bar__hospital"]}>
          <span></span>
          <div>Hospital</div>
        </div>
        <div className={styles["nav-bar__vaccine"]}>
          <span></span>
          <div>Vaccine</div>
        </div>
      </div>
  );
};

export default NavBar;
