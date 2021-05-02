import React from "react";
import {Link} from 'react-router-dom'
import styles from "./NavBar.module.css";
import home from '../Icons/home.svg';
import hospital from '../Icons/hospital.svg';
import Vaccine from '../Icons/vaccine.svg';

const NavBar = () => {
  return (
      <div className={styles["nav-bar"]}>
         <Link to="/">
            <div className={styles["nav-bar__home"]}>
             <img src={home} className={styles["nav-bar__home_icon"]}/>
             <div><text>Home</text></div>
           </div>
          </Link>
          <Link to="/hospital">
        <div className={styles["nav-bar__hospital"]}>
        <img src={hospital} className={styles["nav-bar__home_icon"]}/>
          <div><text>Hospital</text></div>
        </div>
        </Link>
        <Link to="/ChatScreen">
        <div className={styles["nav-bar__vaccine"]}>
        <img src={Vaccine} className={styles["nav-bar__home_icon"]}/>
          <div><text>Vaccine</text></div>
        </div>
        </Link>
      </div>
  );
};

export default NavBar;
