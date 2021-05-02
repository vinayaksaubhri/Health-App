import React from 'react';
import styles from "./HospitalCard.module.css";
const HospitalCard = (props)=>{
    return <div className={styles["hospital-card"]}>
        {props.children}
    </div>
}
export default HospitalCard;