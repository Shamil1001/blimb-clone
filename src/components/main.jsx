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
          <Link to="/guid/" style={{ color: "white", textDecoration: "none" }}>
            <h1 className="button" id="start">
              <span className="eng">
                {lang === "eng" ? "Let's start" : "Начать зарядку для глаз"}
              </span>
            </h1>
          </Link>

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
