import React, { useState } from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";
import { Slider } from "rsuite";
import "./slider.less";

function Navbar2({ list, pylan, handleLanguage, lang }) {
  const [voiceChoice, setVoiceChoice] = useState("one");
  const [volumeAct, setVolumeAct] = useState(false);
  const [volPanel, setVolPanel] = useState(false);
  const [slideValue, setSlideValue] = useState(0);

  const handleChange = (newValue) => {
    console.log(newValue);
    setSlideValue(newValue);
  };

  const handleVolumeAct = () => {
    setVolumeAct(!volumeAct);
  };

  const chooseAudio = (e) => {
    pylan[e].play();
    setVoiceChoice(e);
  };

  return (
    <>
      <div className="wrapper">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div className="eyes"></div>
        </Link>
        <div className="optionPanel">
          <span onClick={() => handleLanguage()} className="languagePanel">
            <span>{lang === "eng" ? "Eng" : "Ru"}</span>
          </span>
          <div className="audioPanel">
            <span
              onClick={() => handleVolumeAct()}
              className={
                voiceChoice === "three"
                  ? "volume thirdVoice"
                  : voiceChoice === "four"
                  ? "volume fourthVoice"
                  : voiceChoice === "two"
                  ? "volume secondVoice"
                  : "volume firstVoice"
              }
            ></span>
            <ul
              className={
                volumeAct === true ? "volumeList volActive" : "volumeList"
              }
            >
              {list.map((item) => (
                <li key={item.num}>
                  <span
                    onClick={() => chooseAudio(item.num)}
                    className={item.class}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="volumeWrapper">
            <div
              onClick={() => setVolPanel(!volPanel)}
              className="volumePanel"
              id="maximum"
            ></div>
            <div
              className={
                volPanel === false
                  ? "slide_line_volume"
                  : "slide_line_volume visActive"
              }
            >
              <Slider
                style={{ height: 100 }}
                value={slideValue}
                progress
                vertical
                onChange={() => handleChange()}
              />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar2;
