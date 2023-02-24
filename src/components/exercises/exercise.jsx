import React, { useState, useEffect } from "react";
import "./exercise.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Navbar2 from "../navBar2";
import Exer2 from "./Exer2";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: n },
    number: 0,
    delay: 1000,
    config: { duration: 15000 },
  });
  console.log(number.to((n) => n.toFixed(0)));
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

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
      console.log(counter);
      if (counter == 0) {
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

  useEffect(() => {
    // if (counter == 15) {
    //   pylan[voiceChoice].play();
    //   navigate("/exer2");
    // }
    // setTimeout(() => {
    // }, 16000);
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
            {lang === "eng" ? relax[0].eng : relax[0].rus}
          </h1>
          <h1>
            <span>{0 <= counter ? counter : 0}</span>
            {/* <Number n={15} /> */}
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
