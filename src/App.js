import styles from '../src/App.module.css'
import React from "react";
import Status_bar from '../src/UI/Components/Status_bar'
import ChatScreen from '../src/Screens/ChatScreen/chatscreen'
import Navbar from '../src/UI/Components/NavBar'
import Hospitals from '../src/Screens/Hospitals/Hosp
import Vaccination from './Screens/Vaccine/Vaccination'
import Dashboard from './Screens/Dashboard/Dashboard'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
const App = () => {
  return (
  <div className={styles['iphone_frame']} >
     <Router>
     <Status_bar/>
     <Dashboard/>
     <Route path="/" exact component={ChatScreen}></Route>
     <Route path="/hospital" exact component={Hospitals}></Route>
     <Route path="/ChatScreen" exact component={ChatScreen}></Route>
     <Navbar/>
     </Router>
   </div>
  );
};
export default App;


