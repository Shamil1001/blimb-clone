import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer12({
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

  const wellDone = [
    { eng: "Well done", rus: "Вы молодец!" },
    {
      eng: "Well Done! Now get some rest from the computer. If you do not close the window, we remind you the rest in an hour",
      rus: "Вы молодец! Теперь немного отдохните от компьютера. Если не закроете вкладку, через час мы вам напомним про отдых.",
    },
  ];

  const [counter, setCounter] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
      if (counter === 0) {
        navigate("/");
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
            {lang === "eng" ? wellDone[0].eng : wellDone[0].rus}
          </h1>
          <span className="eng ex1">
            {lang === "eng" ? wellDone[1].eng : wellDone[1].rus}
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer12;
