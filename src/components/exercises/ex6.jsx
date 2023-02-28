import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Navbar2 from "../navBar2";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: n },
    number: 0,
    delay: 1000,
    config: { duration: 15000 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Exer6({
  list,
  pylan,
  handleLanguage,
  lang,
  voiceChoice,
  chooseAudio,
  slideValue,
  handleChange,
}) {
  const navigate = useNavigate();

  const clipLang = [
    { eng: "Clip", rus: "Помигайте глазами" },
    {
      eng: "Blinked or hands close your eyes",
      rus: "Помигайте глазами или прикройте ладонями до сигнала",
    },
  ];

  const [counter, setCounter] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
      if (counter == 0) {
        if (voiceChoice !== "four") {
          pylan[voiceChoice].volume = slideValue / 100;
          pylan[voiceChoice].play();
        }
        navigate("/exer7");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     pylan[voiceChoice].volume = slideValue / 100;
  //     pylan[voiceChoice].play();
  //     navigate("/exer7/");
  //   }, 18000);
  // }, []);

  return (
    <>
      <div className="main">
        <Navbar2
          list={list}
          pylan={pylan}
          lang={lang}
          handleLanguage={handleLanguage}
          voiceChoice={voiceChoice}
          chooseAudio={chooseAudio}
          slideValue={slideValue}
          handleChange={handleChange}
        />
        <div className="navyExer">
          <h1 className="guidTitle">
            {lang === "eng" ? clipLang[0].eng : clipLang[0].rus}
          </h1>
          <p className="exCounter" style={{ marginBottom: 40 }}>
            <span>{0 <= counter ? counter : 0}</span>
          </p>
          <span className="eng ex1">
            {lang === "eng" ? clipLang[1].eng : clipLang[1].rus}
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer6;
