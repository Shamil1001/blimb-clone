import React, { useEffect } from "react";
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

  useEffect(() => {
    setTimeout(() => {
      pylan[voiceChoice].play();
      navigate("/exer6/");
    }, 18000);
  }, []);

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
            <Number n={20} />
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
