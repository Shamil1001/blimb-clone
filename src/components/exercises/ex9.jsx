import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer9({
  list,
  pylan,
  handleLanguage,
  lang,
  voiceChoice,
  chooseAudio,
  slideValue,
  handleChange,
  handleLevel,
  level,
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
        navigate("/exer10");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

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
          handleLevel={handleLevel}
          lev={level}
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

export default Exer9;
