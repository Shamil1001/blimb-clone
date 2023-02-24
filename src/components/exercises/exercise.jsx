import React, { useState, useEffect } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exercise({
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

  const [counter, setCounter] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
      // console.log(pylan[voiceChoice]);
      if (counter == 0) {
        pylan[voiceChoice].volume = slideValue / 100;
        pylan[voiceChoice].play();
        navigate("/exer2");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  const relax = [
    { eng: "Relax", rus: "Расслабьтесь" },
    {
      eng: "Close your eyes until you hear a signal",
      rus: "Закройте глаза до сигнала",
    },
  ];

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
            {lang === "eng" ? relax[0].eng : relax[0].rus}
          </h1>
          <h1>
            <span>{0 <= counter ? counter : 0}</span>
          </h1>
          <span className="engl">
            {lang === "eng" ? relax[1].eng : relax[1].rus}
          </span>
        </div>
        <div className="box1"></div>
      </div>
      <Outlet />
    </>
  );
}

export default Exercise;
