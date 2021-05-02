import React,{useState} from 'react'
import './Status_bar.css'
import Network from '../Icons/Network-svg.svg'
import Wifi from '../Icons/Wifi-svg.svg'
import Battery from '../Icons/battery-svg.svg'


export default function Status_bar() {
    const [time,set_time]  =useState('')
    function get_time(){
        let time=new Date().toLocaleTimeString().slice(0,4)
        set_time(time)
  }
  setInterval(get_time,1000)
    return (
        <>
        <div className='bar'>
            <div className="time">
            {time}
            </div>
            <div className='right_bar'>
                
                <img src={Network} alt="network"/>
                <img src={Wifi} alt="wifi"/>
                <img src={Battery} alt="battery"/>
                
            </div>
        </div>
    
        </>
    )
}
