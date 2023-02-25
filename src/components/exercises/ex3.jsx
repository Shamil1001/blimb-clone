import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer3({
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
        navigate("/exer4");
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
        />
        <div className="navyExer">
          <h1 className="guidTitle">
            {lang === "eng" ? clipLang[0].eng : clipLang[0].rus}
          </h1>
          <h1>
            <span>{0 <= counter ? counter : 0}</span>
          </h1>
          <span className="engl">
            {lang === "eng" ? clipLang[1].eng : clipLang[1].rus}
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

export default Exer3;
