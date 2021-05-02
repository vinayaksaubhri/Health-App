import React from 'react'
import style from '../Dashboard/Dashboard.module.css'
import Flag from './Icon/Flag.svg'
import Call from './Icon/Call.svg'
import Message from './Icon/Message.svg'
import Doctor from './Icon/Doctor.svg'
import Test from './Icon/Test.svg'
import CTA from './Icon/CTA.svg'


export default function Dashboard() {
    return (
        <div className={style["container"]}>
            <div className={style["header"]}><h1>Covid-19</h1></div>
            <div className={style["location"]}><img src={Flag} alt="flag" style={{paddingTop:'2.5px'}}/><div> &nbsp;&nbsp;Delhi</div></div>
            <div className={style["sub_header"]}>Are you feeling sick?</div>
            <div className={style["tips"]}>If you feel sick with  any of covid-19 symptoms please call or SMS us im8ediatly for help.</div>
            <div className={style["call"]}><div><img src={Call} alt="call" style={{paddingTop:'7px'}}/></div><div style={{padding:'7px'}}>Call Now<div/></div></div>
            <div className={style["message"]}> <div><img src={Message} alt="message" style={{paddingTop:'10px',paddingLeft:'8px'}}/></div><div style={{padding:'7px'}}>Message</div></div>
            <div className={style["safety_tip"]}><div><img src={Doctor} alt="doctor" style={{paddingLeft:'15px'}}/></div>
            <div><img src={CTA} alt="cta" style={{marginLeft:'300px',marginTop:'-46px',position:'absolute'}}/></div>
            <div style={{textAlign:'right', marginTop:'-135px'}}>Know safety tips and <br/> precautions from<br/>top Doctors.</div></div>
            <div className={style["confirm_case"]}><h4> Confirmed</h4><br/><br/><br/><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2,37,395</h3></div>
            <div className={style["active_case"]}><h4>Active</h4><br/><br/><br/><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,17,408</h3></div>
            <div className={style["recover_case"]}><h4>Recovered</h4><br/><br/><br/><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,13,325</h3></div>
            <div className={style["decrease_case"]}><h4>Decreased</h4><br/><br/><br/><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6,650</h3></div>
            <div className={style["test"]}><div><img src={Test} alt="test" style={{paddingTop:'10px',paddingLeft:'8px'}}/></div> <div style={{marginLeft:'190px',marginTop:'-90px'}}><h4>Do your own test?</h4></div><div style={{backgroundColor:'#A74813',color:'white',width:'118.77px',height:'34.6px',borderRadius:'20px',textAlign:'center',marginLeft:'210px',marginTop:'10px',padding:'5px'}}><h4>Test Now</h4></div>
            </div>
           
        </div>
    )
}
