import React, { useState, useEffect } from "react";
import { Slider } from "rsuite";
import "./slider.less";
import "./exercise.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: n },
    number: 0,
    delay: 1000,
    config: { duration: 15000 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Exercise({ list, pylan }) {
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
      pylan[voiceChoice].play();
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
    pylan[e].play();
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
