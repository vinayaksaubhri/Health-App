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
        </>
    )
}
