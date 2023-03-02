import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer8({
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

  const spiral = [
    { eng: "Spirally", rus: "По спирали" },
    {
      eng: "Try to do no less than 4 turns",
      rus: "Старайтесь делать не меньше четырёх витков",
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
        navigate("/exer9");
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
            {lang === "eng" ? spiral[0].eng : spiral[0].rus}
          </h1>
          <p className="exCounter" style={{ marginBottom: 40 }}>
            <span>{0 <= counter ? counter : 0}</span>
          </p>
          <span className="eng ex1">
            {lang === "eng" ? spiral[1].eng : spiral[1].rus}
          </span>
          <div className="boxS"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer8;
