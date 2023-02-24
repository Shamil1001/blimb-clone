import React, { useState } from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";
import { Slider } from "rsuite";
import "./slider.less";

function Navbar({
  list,
  pylan,
  handleLanguage,
  lang,
  voiceChoice,
  chooseAudio,
  handleChange,
  slideValue,
}) {
  const [volumeAct, setVolumeAct] = useState(false);
  const [volPanel, setVolPanel] = useState(false);

  const handleVolumeAct = () => {
    setVolumeAct(!volumeAct);
  };

  return (
    <>
      <div className="wrapper">
        <div className="eye"></div>
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
                className="slider"
                style={{ height: 100 }}
                value={slideValue}
                progress
                vertical
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
