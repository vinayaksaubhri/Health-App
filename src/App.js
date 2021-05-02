<<<<<<< HEAD
import styles from '../src/App.module.css'
import React from "react";
import Status_bar from '../src/UI/Components/Status_bar'
import ChatScreen from '../src/Screens/ChatScreen/chatscreen'
import Navbar from '../src/UI/Components/NavBar'
import Hospitals from '../src/Screens/Hospitals/Hospitals'
import Vaccination from './Screens/Vaccine/Vaccination'
const App = () => {
  return (
  <div className={styles['iphone_frame']} >
     <Status_bar/>
     <Vaccination/>
     {/* <ChatScreen/> */}
     {/* <Hospitals/> */}
     <Navbar/>
   </div>
  );
};
export default App;
=======
import React from 'react';
import Status_bar from './UI/Components/Status_bar'
import Vaccination from './UI/Components/Vaccination'

const App = ()=>{
  return (
    <>
  <Status_bar/>
  <Vaccination/>
  </>
  )}
export default App;
>>>>>>> origin/master
