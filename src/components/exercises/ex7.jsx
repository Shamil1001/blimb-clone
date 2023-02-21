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

function Exer7({ list, pylan, handleLanguage, lang }) {
  const navigate = useNavigate();

  const clockWise = [
    { eng: "Clockwise direction", rus: "" },
    { eng: "Do not hurry, do it smoothly", rus: "" },
  ];

  useEffect(() => {
    setTimeout(() => {
      navigate("/exer8/");
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
          <h1 className="guidTitle">{lang == "eng" ? clockWise[0].eng : ""}</h1>
          <h1>
            <Number n={20} />
          </h1>
          <span className="engl">{lang == "eng" ? clockWise[1].eng : ""}</span>
          <div className="box7"></div>
        </div>
        <div className="footer">
          <div className="social"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer7;
