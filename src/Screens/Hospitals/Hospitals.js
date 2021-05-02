import React from "react";


import SearchBar from "./SearchBar";
import Hospital from "./Hospital";
import styles from "./Hospitals.module.css";
const data = [
  {
    hospital_name: "Batra Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
];

const Hospitals = () => {
  return (
    <div className={styles["hospitals"]}>
      <SearchBar></SearchBar>
      <div className={styles["hospital-section"]}>
        {data.map((hospital) => {
          return (
            <Hospital
              hospitalName={hospital.hospital_name}
              hospitalPhone={hospital.hospital_tel}
              hospitalLoc={hospital.hospital_loc}
              isOxygen = {hospital.isOxygen}
              hospital_beds = {hospital.hospital_beds}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hospitals;
