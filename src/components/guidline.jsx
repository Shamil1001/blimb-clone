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
}) {
  return (
    <>
      <div className="main">
        <Navbar2
          list={list}
          pylan={pylan}
          lang={lang}
          handleLanguage={handleLanguage}
          chooseAudio={chooseAudio}
          voiceChoice={voiceChoice}
          slideValue={slideValue}
          handleChange={handleChange}
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
          <div className="input-btn">
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label className="form-check-label">
                Do not show me this again
              </label>
            </div>
            <Link
              to="/exercise/"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="btn">
                <h4>Start</h4>
              </div>
            </Link>
          </div>
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
