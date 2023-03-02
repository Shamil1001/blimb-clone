import React, { useState } from "react";
import "./main.css";
import { Link, Outlet } from "react-router-dom";
import { Slider } from "rsuite";
import "./slider.less";
import $ from "jquery";
import audi1 from "./audio/audio1.wav";
import audi2 from "./audio/audio2.wav";
import audi3 from "./audio/audio3.wav";

function Navbar({
  list,
  pylan,
  handleLanguage,
  lang,
  voiceChoice,
  chooseAudio,
  handleChange,
  slideValue,
  eyeActive,
  handleLevel,
  lev,
}) {
  let audio1 = new Audio(audi1);
  let audio2 = new Audio(audi2);
  let audio3 = new Audio(audi3);

  var checkMouse;

  if (lev == 1) {
    $(".pointVolume:eq(0)").addClass("active");
  }
  if (lev == 0.9) {
    $(".pointVolume:eq(1)").addClass("active");
  }
  if (lev == 0.8) {
    $(".pointVolume:eq(2)").addClass("active");
  }
  if (lev == 0.7) {
    $(".pointVolume:eq(3)").addClass("active");
  }
  if (lev == 0.6) {
    $(".pointVolume:eq(4)").addClass("active");
  }
  if (lev == 0.5) {
    $(".pointVolume:eq(5)").addClass("active");
  }
  if (lev == 0.4) {
    $(".pointVolume:eq(6)").addClass("active");
  }
  if (lev == 0.3) {
    $(".pointVolume:eq(7)").addClass("active");
  }
  if (lev == 0.2) {
    $(".pointVolume:eq(8)").addClass("active");
  }

  if (lev == 0.1) {
    $(".pointVolume").last().addClass("active");
  }

  $(".slideLineVolume")
    .find(".after")
    .css({
      height: lev * 100 + "%",
    });

  if (lev == 1 || lev == 0.9) {
    $(".volumePanel").prop("id", "maximum");
  } else if (lev == 0.8 || lev == 0.7 || lev == 0.6) {
    $(".volumePanel").prop("id", "middle");
  } else if (lev == 0.5 || lev == 0.4 || lev == 0.3) {
    $(".volumePanel").prop("id", "medium");
  } else {
    $(".volumePanel").prop("id", "minimum");
  }

  function changeAudioVolume(level) {
    audio1.volume = level;
    audio2.volume = level;
    audio3.volume = level;
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0;

    var volume = $(".volume");

    // $(".slideLineVolume")
    //   .find(".after")
    //   .css({
    //     height: level * 100 + "%",
    //   });
    // if (level == 1 || level == 0.9) {
    //   $(".volumePanel").prop("id", "maximum");
    // } else if (level == 0.8 || level == 0.7 || level == 0.6) {
    //   $(".volumePanel").prop("id", "middle");
    // } else if (level == 0.5 || level == 0.4 || level == 0.3) {
    //   $(".volumePanel").prop("id", "medium");
    // } else {
    //   $(".volumePanel").prop("id", "minimum");
    // }

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
  }

  const [volumeAct, setVolumeAct] = useState(false);
  const [volPanel, setVolPanel] = useState(false);

  const handleVolumeAct = () => {
    setVolumeAct(!volumeAct);
  };

  $(".slideLineVolume")
    .mousedown(function () {
      checkMouse = true;
      $(".pointVolume")
        .hover(function () {
          if (checkMouse) {
            $(".pointVolume").removeClass("active");
            $(this).addClass("active");
            // console.log($(this).attr("data-volume"));
            handleLevel($(this).attr("data-volume"));
            // changeAudioVolume(lev);
            changeAudioVolume($(this).attr("data-volume"));
          }
        })
        .click(function () {
          $(".pointVolume").removeClass("active");
          $(this).addClass("active");
          handleLevel($(this).attr("data-volume"));
          // changeAudioVolume(lev);
          changeAudioVolume($(this).attr("data-volume"));
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
      <div className={eyeActive ? "eye active" : "eye"}></div>
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
              className="slider"
              style={{ height: 100 }}
              value={slideValue}
              progress
              vertical
              onChange={(e) => handleChange(e)}
            /> */}
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
