import { display } from "@mui/system";
import React, { Component, Fragment, useState, useEffect } from "react";
// import guid from './guidline.css'
import exer from './exercise.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Number({n}){
 const {number}=useSpring({
    from: {number:n},
    number: 0,
    delay: 1000,
    config: {duration: 15000},
 })
 return <animated.div>{number.to(n=>n.toFixed(0))}</animated.div>
}


function Exer2(){

    const [lang, setLang]=useState('eng')
    const [voiceChoice, setVoiceChoice]=useState('one')
    const [volumeAct,setVolumeAct]=useState(false)
    const [volPanel, setVolPanel]=useState(false)

    let langArr=true

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
          navigate('/')
        }, 18000)
      }, [])

    

    const handleLanguage=()=>{
        if(langArr){
            setLang('ru')
            langArr=!langArr
        }
        else{
            setLang('eng')
            langArr=!langArr
        }
    }

    const handleVolumeAct=()=>{
        setVolumeAct(!volumeAct)
    }

    

    return (
        <>
        <div className="main">
        <div className="wrapper">
        <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
        <div className="eyes">
            </div>
        </Link>
            <div className="optionPanel">
                <span onClick={()=>handleLanguage()} className="languagePanel">
                    <span>{lang=='eng' ? "Eng" : 'Ru'}</span>
                </span>
                <div className="audioPanel">
                    <span onClick={()=>handleVolumeAct()} className={voiceChoice=='three' ? "volume thirdVoice" : voiceChoice=='four' ? "volume fourthVoice" :  voiceChoice=='two' ? 'volume secondVoice' : 'volume firstVoice' }></span>
                    <ul className={volumeAct==true ? "volumeList volActive" : "volumeList"}  >
                        <li><span onClick={()=> setVoiceChoice('one')} className="close voices firstVoice"></span></li>
                        <li><span onClick={()=> setVoiceChoice('two')} className="close voices secondVoice"></span></li>
                        <li><span onClick={()=> setVoiceChoice('three')} className="close voices thirdVoice"></span></li>
                        <li><span onClick={()=> setVoiceChoice('four')} className="close voices fourthVoice"></span></li>
                    </ul>
                </div>
                <div className="volumeWrapper">
                    <div onClick={()=> setVolPanel(!volPanel)} className="volumePanel" id="maximum"></div>
                    <div className={volPanel==false ? "slide_line_volume" : "slide_line_volume visActive"}>
                    <div className="point_volume active" data-volume=" 1 ">
                    </div>
                    <div className="point_volume" data-volume=" 0.9 "></div>
                    <div className="point_volume" data-volume=" 0.8 ">
                    </div><div className="point_volume" data-volume=" 0.7 ">
                    </div><div className="point_volume" data-volume=" 0.6 ">
                    </div><div className="point_volume" data-volume=" 0.5 ">
                    </div><div className="point_volume" data-volume=" 0.4 ">
                    </div><div className="point_volume" data-volume=" 0.3 ">
                    </div><div className="point_volume" data-volume=" 0.2 ">
                    </div><div className="point_volume" data-volume=" 0.1 "></div>
                     <div className="before"></div>
                     <div className="after"></div>
                  </div>
                </div>
            </div>
        </div>
        <div className="navyExer">
            <h1 className="guidTitle">Up-down</h1>
            <h1><Number n={20}/></h1>
            <span class="engl">
                For a second old your eyes in the upper and low points
            </span>
            
        </div>
        <div className="footer">
            <div className="social">
            
            </div>
        </div>

        </div>
        <Outlet/>
        </>
        
    )
}

export default Exer2