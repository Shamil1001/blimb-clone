import React, { useState, useEffect } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Navbar2 from "./navBar2";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: n },
    number: 0,
    delay: 1000,
    config: { duration: 15000 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Exercise({ list, pylan, handleLanguage, lang }) {
  const [voiceChoice, setVoiceChoice] = useState("one");
  const [audio, setAudio] = useState("one");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      pylan[voiceChoice].play();
      console.log(audio);
      navigate("/exer2");
    }, 16000);
  }, []);

  return (
    <>
      <div className="main">
        <Navbar2
          list={list}
          pylan={pylan}
          lang={lang}
          handleLanguage={handleLanguage}
        />
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
