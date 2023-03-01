import React from "react";
import "./guidline.css";
import { Link, Outlet } from "react-router-dom";
import "./slider.less";
import Navbar2 from "./navBar2";

function Guidline({
  list,
  pylan,
  handleLanguage,
  lang,
  chooseAudio,
  voiceChoice,
  slideValue,
  handleChange,
  handleLevel,
  level,
}) {
  const guideLang = [
    { eng: "Guidlines", rus: "Рекомендации" },
    {
      eng: "This gymnastics includes the set of exercises. At run time your eyes need to follow the direction indicated by the dot.",
      rus: "В комплексе набор упражнений, во время которых нужно смотреть в направления, указываемые точкой.",
    },
    {
      eng: "The dot shows only the direction of the eyes rotation. Move your eyes as much as possible in the indicated direction, but by doing this you should not feel any discomfort.",
      rus: "Точка показывает только направление — взгляд перемещайте до упора, но не сильно.",
    },
    {
      eng: "In extreme points hold your eyes for a second.",
      rus: "В крайних точках задерживайте взгляд на секунду.",
    },
    {
      eng: "After finishing of each exercise you can blink eyes for a few seconds.",
      rus: "После выполнения каждого упражнения можно легонько зажмуриться или поморгать пару секунд – это помогает расслабиться глазам.",
    },
    {
      eng: "Total time of the exercise: 3 minutes 25 seconds.",
      rus: "Общее время упражнения: 3 минуты 25 секунд.",
    },
  ];

  return (
    <>
      <div className="main guide">
        <Navbar2
          list={list}
          pylan={pylan}
          lang={lang}
          handleLanguage={handleLanguage}
          chooseAudio={chooseAudio}
          voiceChoice={voiceChoice}
          slideValue={slideValue}
          handleChange={handleChange}
          handleLevel={handleLevel}
          lev={level}
        />
        <div className="navyGuid">
          <p className="guidTitle">
            {lang === "eng" ? guideLang[0].eng : guideLang[0].rus}
          </p>
          <div className="guidText">
            <span>{lang === "eng" ? guideLang[1].eng : guideLang[1].rus}</span>

            <div>
              <span>
                {lang === "eng" ? guideLang[2].eng : guideLang[2].rus}
              </span>
            </div>
            <div>
              <span>
                {lang === "eng" ? guideLang[3].eng : guideLang[3].rus}
              </span>
            </div>
            <div>
              <span>
                {lang === "eng" ? guideLang[4].eng : guideLang[4].rus}
              </span>
            </div>
            <div>
              <span>
                {lang === "eng" ? guideLang[5].eng : guideLang[5].rus}
              </span>
            </div>
          </div>
          <div className="input-btn">
            <div className="show-checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label className="form-check-label">
                {lang === "eng"
                  ? "Do not show me this again"
                  : "Больше не показывать"}
              </label>
            </div>
            <Link
              to="/exercise/"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="btn">
                <h4>{lang === "eng" ? "Start" : "Начать"}</h4>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="footer">
          <div className="social"></div>
        </div> */}
      </div>
      <Outlet />
    </>
  );
}

export default Guidline;
