import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer2({
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

  const upDown = [
    { eng: "Up-down", rus: "Вверх−вниз" },
    {
      eng: "For a second old your eyes in the upper and low points",
      rus: "На секунду задерживайте взгляд в верхней и нижней точках",
    },
  ];

  const [counter, setCounter] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
      if (counter == 0) {
        if (voiceChoice !== "four") {
          pylan[voiceChoice].volume = level;
          pylan[voiceChoice].play();
        }
        navigate("/exer3");
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
            {lang === "eng" ? upDown[0].eng : upDown[0].rus}
          </h1>
          <p className="exCounter" style={{ marginBottom: 40 }}>
            <span>{0 <= counter ? counter : 0}</span>
          </p>
          <span className="eng ex1">
            {lang === "eng" ? upDown[1].eng : upDown[1].rus}
          </span>
          <div className="box2"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer2;
