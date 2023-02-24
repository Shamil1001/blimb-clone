import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer5({
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

  const diagonal = [
    { eng: "Along the diagonal", rus: "По диагонали" },
    {
      eng: "Look at the corners, as the dot shows you",
      rus: "Смотрите по углам, точка покажет как",
    },
  ];

  const [counter, setCounter] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
      if (counter == 0) {
        pylan[voiceChoice].volume = slideValue / 100;
        pylan[voiceChoice].play();
        navigate("/exer6");
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
            {lang === "eng" ? diagonal[0].eng : diagonal[0].rus}
          </h1>
          <h1>
            <span>{0 <= counter ? counter : 0}</span>
          </h1>
          <span className="engl">
            {lang === "eng" ? diagonal[1].eng : diagonal[1].rus}
          </span>
          <div className="box5"></div>
        </div>
        <div className="footer">
          <div className="social"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer5;
