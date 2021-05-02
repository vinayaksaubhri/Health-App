import React from "react";

import HospitalCard from "../../UI/HospitalCard";

const Hospital = (props) => {
  return (
    <HospitalCard>
      <h3>{props.hospitalName ? props.hospitalName : "Hospital Name"}</h3>
      <div>{props.hospitalPhone ? props.hospitalPhone : "372390294"}</div>
      <div>{props.hospitalLoc ? props.hospitalLoc : "Hospital Location"}</div>
    </HospitalCard>
  );
};

export default Hospital;
