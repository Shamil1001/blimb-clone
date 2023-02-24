import React from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";
import "./slider.less";
import Footer from "./footer";
import Navbar from "./navbarMain";

function Main({
  list,
  pylan,
  handleLanguage,
  lang,
  voiceChoice,
  chooseAudio,
  slideValue,
  handleChange,
}) {
  return (
    <>
      <div className="main">
        <Navbar
          voiceChoice={voiceChoice}
          list={list}
          pylan={pylan}
          lang={lang}
          handleLanguage={handleLanguage}
          chooseAudio={chooseAudio}
          slideValue={slideValue}
          handleChange={handleChange}
        />
        <div className="navy">
          <h1 className="button" id="start">
            <Link
              to="/guid/"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="eng">
                {lang === "eng" ? "Let's start" : "Начать зарядку для глаз"}
              </span>
            </Link>
          </h1>

          <div className="nav">
            <Link
              to="https://blimb.su/about/"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span>{lang === "eng" ? "Guidlines" : "Рекомендации"}</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
      <Outlet />
    </>
  );
}

export default Main;
