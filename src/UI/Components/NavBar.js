import React from "react";
import {Link} from 'react-router-dom'
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
      <div className={styles["nav-bar"]}>
         <Link to="/">
            <div className={styles["nav-bar__home"]}>
             <span></span>
             <div>Home</div>
           </div>
          </Link>
          <Link to="/hospital">
        <div className={styles["nav-bar__hospital"]}>
          <span></span>
          <div>Hospital</div>
        </div>
        </Link>
        <Link to="/ChatScreen">
        <div className={styles["nav-bar__vaccine"]}>
          <span></span>
          <div>Vaccine</div>
        </div>
        </Link>
      </div>
  );
};

export default NavBar;
