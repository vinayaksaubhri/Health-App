import React from "react";

import NavBar from "../../UI/NavBar";
import SearchBar from "../../UI/SearchBar";
import Hospital from "./Hospital";
import styles from "./Hospitals.module.css";
const data = [
  {
    hospital_name: "Action Hospital",
    hospital_tel: "8376904128",
    hospital_loc: "New Delhi",
    isOxygen: true,
    hospital_beds: "30",
  },
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
];

const Hospitals = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <div className={styles['hospital-section']}> 
        {data.map((hospital) => {
          return (
            <Hospital
              hospitalName={hospital.hospital_name}
              hospitalPhone={hospital.hospital_tel}
              hospitalLoc={hospital.hospital_loc}
            />
          );
        })}
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Hospitals;
