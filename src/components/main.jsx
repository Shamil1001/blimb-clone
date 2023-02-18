import { display } from "@mui/system";
import React, { Component, Fragment, useState } from "react";
import main from './main.css'
import { Link, Outlet } from "react-router-dom";


function Main(){
    const [lang, setLang]=useState('eng')
    const [voiceChoice, setVoiceChoice]=useState('one')
    const [volumeAct,setVolumeAct]=useState(false)
    const [volPanel, setVolPanel]=useState(false)

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
        setVolumeAct(!volumeAct)
    }

    return (
        <>
        <div className="main">
        <div className="wrapper">
            <div className="eye">
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
        <div className="navy">
            <h1 className="button" id="start">
            <Link to='/guid/' style={{color: 'white', textDecoration: 'none'}}>
                <span className="eng">{lang=='eng' ? "Let's start" : "Начать зарядку для глаз"}</span>
            </Link>
            </h1>
            
            <div className="nav">
                <span>{lang=='eng' ? "Guidlines" : "Рекомендации"}</span>
            </div>
        </div>
        <div className="footer">
            <div className="social">
            <div className="tweeter">
                <span className="likelyIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353z"></path></svg>
                </span>
                <span className="tweet">Twet</span>
            </div>
            <div className="facebook">
                <span className="likelyIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3z"></path></svg>
                </span>
                <span className="share">Share</span>
            </div>
            <div className="Vk">
                <span className="likelyIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71z"></path></svg>
                </span>
                <span className="share127">share127</span>
            </div>
            </div>
        </div>

        </div>
        <Outlet/>
        </>
    )
}

export default Main