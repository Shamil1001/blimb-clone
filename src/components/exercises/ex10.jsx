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

function Exer10({ list, pylan, handleLanguage, lang }) {
  const navigate = useNavigate();

  const distance = [
    { eng: "Into the distance", rus: "Вблизи-вдали" },
    {
      eng: "Look at the object in the distance, then at the objects near you",
      rus: "Посмотрите на предмет вдали, потом — на монитор",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      navigate("/exer11/");
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
          <h1 className="guidTitle">{lang == "eng" ? distance[0].eng : ""}</h1>
          <h1>
            <Number n={20} />
          </h1>
          <span className="engl">{lang == "eng" ? distance[1].eng : ""}</span>
        </div>
        <div className="footer">
          <div className="social"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Exer10;
