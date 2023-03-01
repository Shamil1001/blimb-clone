import React, { useState } from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";
import { Slider } from "rsuite";
import "./slider.less";
import $ from "jquery";
import audi1 from "./audio/audio1.wav";
import audi2 from "./audio/audio2.wav";
import audi3 from "./audio/audio3.wav";

function Navbar2({
  list,
  handleLanguage,
  lang,
  chooseAudio,
  pylan,
  voiceChoice,
  slideValue,
  handleChange,
  handleLevel,
  level,
}) {
  const [volumeAct, setVolumeAct] = useState(false);
  const [volPanel, setVolPanel] = useState(false);

  const handleVolumeAct = () => {
    setVolumeAct(!volumeAct);
  };

  let audio1 = new Audio(audi1);
  let audio2 = new Audio(audi2);
  let audio3 = new Audio(audi3);

  var checkMouse;

  function changeAudioVolume(level) {
    audio1.volume = level;
    audio2.volume = level;
    audio3.volume = level;
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0;

    var volume = $(".volume");

    $(".slideLineVolume")
      .find(".after")
      .css({
        height: level * 100 + "%",
      });
    if (level == 1 || level == 0.9) {
      $(".volumePanel").prop("id", "maximum");
    } else if (level == 0.8 || level == 0.7 || level == 0.6) {
      $(".volumePanel").prop("id", "middle");
    } else if (level == 0.5 || level == 0.4 || level == 0.3) {
      $(".volumePanel").prop("id", "medium");
    } else {
      $(".volumePanel").prop("id", "minimum");
    }

    // pylan[voiceChoice].play();

    if (volume.hasClass("firstVoice")) {
      audio1.play();
      // pylan["one"].play();
    } else if (volume.hasClass("secondVoice")) {
      audio2.play();
      // pylan["two"].play();
    } else {
      // pylan["three"].play();
      audio3.play();
    }

    // if (voiceChoice) {
    //   audio1.play();
    // } else if (volume.hasClass("second")) {
    //   audio2.play();
    // } else {
    //   audio3.play();
    // }
  }

  $(".slideLineVolume")
    .mousedown(function () {
      checkMouse = true;
      $(".pointVolume")
        .hover(function () {
          if (checkMouse) {
            $(".pointVolume").removeClass("active");
            $(this).addClass("active");
            handleLevel($(this).attr("data-volume"));
            changeAudioVolume(level);
            // changeAudioVolume($(this).attr("data-volume"));
          }
        })
        .click(function () {
          $(".pointVolume").removeClass("active");
          $(this).addClass("active");
          handleLevel($(this).attr("data-volume"));
          changeAudioVolume(level);
          // changeAudioVolume($(this).attr("data-volume"));
        });
    })
    .mouseup(function () {
      checkMouse = false;
    })
    .mouseleave(function () {
      checkMouse = false;
    });

  return (
    <>
      <div className="wrapper">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div className="eyes"></div>
        </Link>
        <div className="optionPanel">
          <span onClick={() => handleLanguage()} className="languagePanel">
            <span>{lang === "eng" ? "Eng" : "Ru"}</span>
          </span>
          <div className="audioPanel">
            <span
              onClick={() => handleVolumeAct()}
              className={
                voiceChoice === "three"
                  ? "volume thirdVoice"
                  : voiceChoice === "four"
                  ? "volume fourthVoice"
                  : voiceChoice === "two"
                  ? "volume secondVoice"
                  : "volume firstVoice"
              }
            ></span>
            <ul
              className={
                volumeAct === true ? "volumeList volActive" : "volumeList"
              }
            >
              {list.map((item) => (
                <li key={item.num}>
                  <span
                    onClick={() => chooseAudio(item.num)}
                    className={item.class}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="volumeWrapper">
            <div
              onClick={() => setVolPanel(!volPanel)}
              className="volumePanel"
              id="maximum"
            ></div>
            <div
              className={
                volPanel === false
                  ? "slideLineVolume"
                  : "slideLineVolume visActive"
              }
            >
              <div className="pointVolume active" data-volume="1"></div>
              <div className="pointVolume" data-volume="0.9"></div>
              <div className="pointVolume" data-volume="0.8"></div>
              <div className="pointVolume" data-volume="0.7"></div>
              <div className="pointVolume" data-volume="0.6"></div>
              <div className="pointVolume" data-volume="0.5"></div>
              <div className="pointVolume" data-volume="0.4"></div>
              <div className="pointVolume" data-volume="0.3"></div>
              <div className="pointVolume" data-volume="0.2"></div>
              <div className="pointVolume" data-volume="0.1"></div>
              <div className="before"></div>
              <div className="after"></div>

              {/* <Slider
                style={{ height: 100 }}
                value={slideValue}
                progress
                vertical
                onChange={(e) => handleChange(e)}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar2;
