
import React from "react";
import Hospitals from "./Screens/Hospitals/Components/Hospitals";
import Status_bar from './UI/Components/Status_bar'
const App = () => {
  return (
    <div>
      <Status_bar/>
      <Hospitals />
    </div>
  );
};
export default App;

