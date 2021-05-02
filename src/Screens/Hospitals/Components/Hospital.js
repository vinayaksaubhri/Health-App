import React from "react";

import HospitalCard from "../../UI/HospitalCard";
import styles from "./Hospital.module.css"
const Hospital = (props) => {
  return (
    <HospitalCard>
      <h3 className={styles["hospital_name"]}>{props.hospitalName}</h3>
      <div>{props.hospitalPhone ? props.hospitalPhone : "372390294"}</div>
      <div>{props.hospitalLoc ? props.hospitalLoc : "Hospital Location"}</div>
      <div>{props.isOxygen}</div>
      <div>{props.hospital_beds}</div>
    </HospitalCard>
  );
};

export default Hospital;
