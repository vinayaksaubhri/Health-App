import styles from '../src/App.module.css'
import React from "react";
import Status_bar from '../src/UI/Components/Status_bar'
import ChatScreen from '../src/Screens/ChatScreen/chatscreen'
import Navbar from '../src/UI/Components/NavBar'
import Hospitals from '../src/Screens/Hospitals/Hospitals'
import Vaccination from './Screens/Vaccine/Vaccination'
import Dashboard from './Screens/Dashboard/Dashboard'
const App = () => {
  return (
  <div className={styles['iphone_frame']} >
     <Status_bar/>
     <Dashboard/>
     {/* <Vaccination/> */}
     {/* <ChatScreen/> */}
     {/* <Hospitals/> */}
     <Navbar/>
   </div>
  );
};
export default App;
