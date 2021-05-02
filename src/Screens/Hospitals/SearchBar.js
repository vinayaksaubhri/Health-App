import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return <div className={styles["search-bar"]}>
    <div className={styles["search-bar__control"]}> 
      <label htmlFor="search-input" className={styles["search-bar__label"]}></label>
      <input type="text" placeholder="Search" id="search-input" className={styles["search-bar__input"]}/>
      </div>
  </div>;
};

export default SearchBar;
