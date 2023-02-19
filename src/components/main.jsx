import React, { useState } from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";
import { Slider } from "rsuite";
import "./slider.less";
import Footer from "./footer";

function Main({ list, pylan }) {
  const [lang, setLang] = useState("eng");
  const [voiceChoice, setVoiceChoice] = useState("one");
  const [volumeAct, setVolumeAct] = useState(false);
  const [volPanel, setVolPanel] = useState(false);
  const [slideValue, setSlideValue] = useState(0);
  let langArr = true;

  const handleLanguage = () => {
    if (langArr) {
      setLang("ru");
      langArr = !langArr;
    } else {
      setLang("eng");
      langArr = !langArr;
    }
  };

  const handleChange = (event, newValue) => {
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
      <div className="main">
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
                  <li>
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

        <div className="navy">
          <h1 className="button" id="start">
            <Link
              to="/guid/"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="eng">
                {lang === "eng" ? "Let's start" : "Начать зарядку для глаз"}
              </span>
            </Link>
          </h1>

          <div className="nav">
            <span>{lang === "eng" ? "Guidlines" : "Рекомендации"}</span>
          </div>
        </div>
        <Footer />
      </div>
      <Outlet />
    </>
  );
}

export default Main;
