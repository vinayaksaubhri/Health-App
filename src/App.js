import React from 'react';
import Status_bar from './UI/Components/Status_bar'
import styles from '../src/App.module.css'
import ChatScreen from '../src/Screens/ChatScreen/chatscreen'

const App = ()=>{
  return (
    <div className={styles['iphone_frame']} >
       <Status_bar/>
       <ChatScreen/>
   </div>
  )}
export default App;