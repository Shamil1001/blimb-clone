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

function Exer4({ list, pylan, handleLanguage, lang }) {
  const navigate = useNavigate();

  const LeftRight = [
    { eng: "Left-Right", rus: "Влево−вправо" },
    {
      eng: "Move your eyes as much as possible left and right, but by doing this you should not feel any discomfort",
      rus: "До упора, но без сильного напряжения",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      navigate("/exer5/");
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
          <h1 className="guidTitle">{lang == "eng" ? LeftRight[0].eng : ""}</h1>
          <h1>
            <Number n={20} />
          </h1>
          <span className="engl">{lang == "eng" ? LeftRight[1].eng : ""}</span>
          <div className="box4"></div>
        </div>
        <div className="footer">
          <div className="social"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer4;
