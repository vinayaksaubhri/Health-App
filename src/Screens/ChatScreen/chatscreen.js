import React from 'react'
import styles from '../ChatScreen/chatScreen.module.css'

export default function chatscreen() {
    return (
        <>
          <h1 className={styles['chatScreen_selftest']}>Self Test</h1>
          <div className={styles['chatScreen_chatbox']}>Please note that information from this chat will be
                                                                used for monitoring & management of the current health
                                                                crisis and research in the fight against COVID-19.
                                                                </div>
           <div className={styles['chatScreen_chatbox']}>Are you experience any of the following symptoms?</div>
           <div className={styles['chatScreen_buttoncontainer']}>
            <div className={styles['chatScreen_buttonstyle']}>Cough</div>       
            <div className={styles['chatScreen_buttonstyle']}>Difficulty in Breathing</div>    
            <div className={styles['chatScreen_buttonstyle']}>Fever</div>    
            <div className={styles['chatScreen_buttonstyle']}>Cold</div>    
            <div className={styles['chatScreen_buttonstyle']}>Loss of senses of smell and taste</div>    

           </div>                                             
        </>
    )
}
