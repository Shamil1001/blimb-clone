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

function Exer6({ list, pylan, handleLanguage, lang }) {
  const navigate = useNavigate();

  const clipLang = [
    { eng: "Clip", rus: "Помигайте глазами" },
    {
      eng: "Blinked or hands close your eyes",
      rus: "Помигайте глазами или прикройте ладонями до сигнала",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      navigate("/exer7/");
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
        />
        <div className="navyExer">
          <h1 className="guidTitle">
            {lang == "eng" ? clipLang[0].eng : clipLang[0].rus}
          </h1>
          <h1>
            <Number n={20} />
          </h1>
          <span className="engl">
            {lang == "eng" ? clipLang[1].eng : clipLang[1].rus}
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

export default Exer6;
