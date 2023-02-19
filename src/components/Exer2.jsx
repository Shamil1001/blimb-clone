import React, { useState, useEffect } from "react";
import exer from "./exercise.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Slider } from "rsuite";
import "./slider.less";
import audi1 from "../components/audio1.wav";
import audi2 from "../components/audio/audio2.wav";
import audi3 from "../components/audio/audio3.wav";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: n },
    number: 0,
    delay: 1000,
    config: { duration: 15000 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Exer2({ list }) {
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
      navigate("/");
    }, 18000);
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

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setSlideValue(newValue);
  };

  const handleVolumeAct = () => {
    setVolumeAct(!volumeAct);
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
          <h1 className="guidTitle">Up-down</h1>
          <h1>
            <Number n={20} />
          </h1>
          <span class="engl">
            For a second old your eyes in the upper and low points
          </span>
        </div>
        <div className="footer">
          <div className="social"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer2;
