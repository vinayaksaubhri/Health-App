import React, { useState } from 'react'
import style from '../Components/Status_bar.module.css'
import Network from '../Icons/Network-svg.svg'
import Wifi from '../Icons/Wifi-svg.svg'
import Battery from '../Icons/battery-svg.svg'


export default function Status_bar() {
    const [time, set_time] = useState('')
    function get_time() {
        let time = new Date().toLocaleTimeString().slice(0, 4)
        set_time(time)
    }
    setInterval(get_time, 1000)
    return (
        <>
            <div className={style["container"]}>
                <div className={style["bar"]}>
                    <div className={style["time"]}>
                        {time}
                    </div>
                    <div className={style["right_bar"]}>
                        <img className={style["size"]} src={Network} alt="network" />
                        <img className={style["size"]} src={Wifi} alt="wifi" />
                        <img className={style["size"]} src={Battery} alt="battery" />
                    </div>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <h1>Vaccination</h1>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    Indian Vaccine is sbout 90% effective <br /> against Covid.<br />And 1.9% people are fully vaccinated.
                </div>
                <div className={style["schedule"]}>
                    <div style={{ marginLeft: '80px',fontSize:'large' }}>
                        <h3>Schedule Appoinment</h3>
                    </div>
                   <div style={{ marginLeft: '9px'}}>Find Vaccination Center</div>
                    <div className={style["input_box"]}>
                        <input className={style["input"]} type="text" placeholder='Enter the State'/><br/>
                        <input className={style["input"]} type="text" placeholder='Enter the City'/><br/>
                        <input className={style["input"]} type="date"/>
                    </div>
                </div>
            </div>

        </>
    )
}
