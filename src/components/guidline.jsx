import { display } from "@mui/system";
import React, { Component, Fragment, useState } from "react";
import guid from './guidline.css'
import { Link, Outlet } from "react-router-dom";

function Guidline(){
    const [lang, setLang]=useState('eng')
    const [voiceChoice, setVoiceChoice]=useState('one')
    const [volumeAct,setVolumeAct]=useState(false)
    const [volPanel, setVolPanel]=useState(false)

    let aTest = new Audio("./audio1.wav")


    let langArr=true

    // let volumeAct=false

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
        aTest.play()
        setVolumeAct(!volumeAct)
    }


    return (
        <>
        <div className="main">
        <div className="wrapper">
        <div className="eyes">
            </div>
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
        <div className="navyGuid">
            <h1 className="guidTitle">Guidelines</h1>
            <div><span>This gymnastics includes the set of exercises. At run time your eyes need to follow the direction indicated by the dot.</span></div>
            <div><span>The dot shows only the direction of the eyes rotation. Move your eyes as much as possible in the indicated direction, but by doing this you should not feel any discomfort.</span></div>
            <div><span>In extreme points hold your eyes for a second.</span></div>
            <div><span>After finishing of each exercise you can blink eyes for a few seconds.</span></div>
            <div><span>Total time of the exercise: 3 minutes 25 seconds.</span></div>
            <Link to='/exercise/' style={{color: 'white', textDecoration: 'none'}}>
            <div className="btn">
                <h2>Start</h2>
            </div>
            </Link>
            {/* <h1 className="button" id="start">
            <Link to='/guid/' style={{color: 'white', textDecoration: 'none'}}>
                <span className="eng">{lang=='eng' ? "Let's start" : "Начать зарядку для глаз"}</span>
            </Link>
            </h1>
            
            <div className="nav">
                <span>{lang=='eng' ? "Guidlines" : "Рекомендации"}</span>
            </div>
             */}
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

export default Guidline