import React, { useState, useEffect } from "react";
import { Slider } from "rsuite";
import "./slider.less";
import exer from "./exercise.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import audi1 from "../components/audio1.wav";
import audi2 from "../components/audio/audio2.wav";
import audi3 from "../components/audio/audio3.wav";

// Same issues

function Number({ n }) {
  const { number } = useSpring({
    from: { number: n },
    number: 0,
    delay: 1000,
    config: { duration: 15000 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Exercise() {
  let audio1 = new Audio(audi1);
  let audio2 = new Audio(audi2);
  let audio3 = new Audio(audi3);

  const [lang, setLang] = useState("eng");
  const [voiceChoice, setVoiceChoice] = useState("one");
  const [volumeAct, setVolumeAct] = useState(false);
  const [volPanel, setVolPanel] = useState(false);
  const [slideValue, setSlideValue] = useState(0);

  const [audio, setAudio] = useState("one");

  let langArr = true;

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (voiceChoice == "one") {
        audio1.play();
      }
      if (voiceChoice == "two") {
        audio2.play();
      }
      if (voiceChoice == "three") {
        audio3.play();
      }
      console.log(audio);
      navigate("/exer2");
    }, 16000);
  }, []);

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
    if (e == "one") {
      audio1.play();
    }
    if (e == "two") {
      audio2.play();
    }
    if (e == "three") {
      audio3.play();
    }
    setAudio(e);
    setVoiceChoice(e);
  };

  return (
    <>
      <div className="main">
        <div className="wrapper">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <div className="eyes"></div>
          </Link>
          <div className="optionPanel">
            <span onClick={() => handleLanguage()} className="languagePanel">
              <span>{lang == "eng" ? "Eng" : "Ru"}</span>
            </span>
            <div className="audioPanel">
              <span
                onClick={() => handleVolumeAct()}
                className={
                  voiceChoice == "three"
                    ? "volume thirdVoice"
                    : voiceChoice == "four"
                    ? "volume fourthVoice"
                    : voiceChoice == "two"
                    ? "volume secondVoice"
                    : "volume firstVoice"
                }
              ></span>
              <ul
                className={
                  volumeAct == true ? "volumeList volActive" : "volumeList"
                }
              >
                {/* Dont repeat yourself */}
                <li>
                  <span
                    onClick={() => chooseAudio("one")}
                    className="voices firstVoice"
                  ></span>
                </li>
                <li>
                  <span
                    onClick={() => chooseAudio("two")}
                    className="voices secondVoice"
                  ></span>
                </li>
                <li>
                  <span
                    onClick={() => chooseAudio("three")}
                    className="voices thirdVoice"
                  ></span>
                </li>
                <li>
                  <span
                    onClick={() => chooseAudio("four")}
                    className="voices fourthVoice"
                  ></span>
                </li>
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
                  volPanel == false
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
        <div className="navyExer">
          <h1 className="guidTitle">Relax</h1>
          <h1>
            <Number n={15} />
          </h1>
          <span class="engl">Close your eyes until you hear a signal</span>
        </div>
        <div className="footer">
          <div className="social"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exercise;
