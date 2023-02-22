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

function Exer12({
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

  const wellDone = [
    { eng: "Well done", rus: "Вы молодец!" },
    {
      eng: "Well Done! Now get some rest from the computer. If you do not close the window, we remind you the rest in an hour",
      rus: "Вы молодец! Теперь немного отдохните от компьютера. Если не закроете вкладку, через час мы вам напомним про отдых.",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      pylan[voiceChoice].play();
      navigate("/");
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
            {lang === "eng" ? wellDone[0].eng : wellDone[0].rus}
          </h1>
          <h1>
            <Number n={20} />
          </h1>
          <span className="engl">
            {lang === "eng" ? wellDone[1].eng : wellDone[1].rus}
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

export default Exer12;
