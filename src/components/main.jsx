import React, { useState } from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";
import "./slider.less";
import Footer from "./footer";
import Navbar from "./navbarMain";

function Main({ list, pylan, handleLanguage, lang }) {
  return (
    <>
      <div className="main">
        <Navbar
          list={list}
          pylan={pylan}
          lang={lang}
          handleLanguage={handleLanguage}
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
            <span>{lang === "eng" ? "Guidlines" : "Рекомендации"}</span>
          </div>
        </div>
        <Footer />
      </div>
      <Outlet />
    </>
  );
}

export default Main;
