import React, { useEffect, useState } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar2 from "../navBar2";

function Exer10({
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

  const distance = [
    { eng: "Into the distance", rus: "Вблизи-вдали" },
    {
      eng: "Look at the object in the distance, then at the objects near you",
      rus: "Посмотрите на предмет вдали, потом — на монитор",
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
        navigate("/exer11");
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
            {lang === "eng" ? distance[0].eng : distance[0].rus}
          </h1>
          <p className="exCounter" style={{ marginBottom: 40 }}>
            <span>{0 <= counter ? counter : 0}</span>
          </p>
          <span className="eng ex1">
            {lang === "eng" ? distance[1].eng : distance[1].rus}
          </span>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer10;
