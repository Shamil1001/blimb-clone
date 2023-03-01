import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer4({
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

  const LeftRight = [
    { eng: "Left-Right", rus: "Влево−вправо" },
    {
      eng: "Move your eyes as much as possible left and right, but by doing this you should not feel any discomfort",
      rus: "До упора, но без сильного напряжения",
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
        navigate("/exer5");
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
            {lang === "eng" ? LeftRight[0].eng : LeftRight[0].rus}
          </h1>
          <p className="exCounter" style={{ marginBottom: 40 }}>
            <span>{0 <= counter ? counter : 0}</span>
          </p>
          <span className="eng ex1">
            {lang === "eng" ? LeftRight[1].eng : LeftRight[1].rus}
          </span>
          <div className="box4"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer4;
