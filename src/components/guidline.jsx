import React from "react";
import "./guidline.css";
import { Link, Outlet } from "react-router-dom";
import "./slider.less";
import Navbar2 from "./navBar2";

function Guidline({ list, pylan, handleLanguage, lang }) {
  return (
    <>
      <div className="main">
        <Navbar2
          list={list}
          pylan={pylan}
          lang={lang}
          handleLanguage={handleLanguage}
        />
        <div className="navyGuid">
          <h1 className="guidTitle">Guidelines</h1>
          <div>
            <span>
              This gymnastics includes the set of exercises. At run time your
              eyes need to follow the direction indicated by the dot.
            </span>
          </div>
          <div>
            <span>
              The dot shows only the direction of the eyes rotation. Move your
              eyes as much as possible in the indicated direction, but by doing
              this you should not feel any discomfort.
            </span>
          </div>
          <div>
            <span>In extreme points hold your eyes for a second.</span>
          </div>
          <div>
            <span>
              After finishing of each exercise you can blink eyes for a few
              seconds.
            </span>
          </div>
          <div>
            <span>Total time of the exercise: 3 minutes 25 seconds.</span>
          </div>
          <Link
            to="/exercise/"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className="btn">
              <h2>Start</h2>
            </div>
          </Link>
        </div>
        <div className="footer">
          <div className="social"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Guidline;
