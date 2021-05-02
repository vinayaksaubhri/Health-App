import React from 'react'
import style from '../Vaccine/Vaccination.module.css'

export default function Vaccination() {
    return (
        <>
            <div className={style["container"]}>
                <div style={{ marginLeft: '10px' }}>
                    <h1>Vaccination</h1>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    Indian Vaccine is sbout 90% effective <br /> against Covid.<br />And 1.9% people are fully vaccinated.
                </div>
                <div className={style["schedule"]}>
                    <div style={{ marginLeft: '80px', fontSize: 'large' }}>
                        <h3>Schedule Appoinment</h3>
                    </div>
                    <div style={{ marginLeft: '9px' }}>Find Vaccination Center</div>
                    <div className={style["input_box"]}>
                        <input className={style["input"]} type="text" placeholder='Enter the State' /><br />
                        <input className={style["input"]} type="text" placeholder='Enter the City' /><br />
                        <input className={style["input"]} type="date" />
                    </div>
                    <div className={style["radio_button"]}>
                        <input className={style["radio"]} type="radio" /><span style={{ fontSize: '20px', marginLeft: '-10px' }}>Free</span>
                        <input className={style["radio"]} type="radio" /><span style={{ fontSize: '20px', marginLeft: '-10px' }}>Paid</span>
                    </div>
                    <div className={style["cancel"]}><text>Cancel</text></div>
                    <div className={style["centre"]}>Find Centre</div>

                    <input className={style["input"]} type="text" placeholder='Select Vaccination Centre' />
                    <div className={style["availability"]}>Find Centre</div>

                </div>
            </div>

        </>
    )
}
