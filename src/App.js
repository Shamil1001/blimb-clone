import React, { useState } from "react";
// import "./App.css";
// import "./index.css";
import Main from "./components/main";
import Guidline from "./components/guidline";
import Exercise from "./components/exercise";
import Exer2 from "./components/Exer2";
import { Routes, Route } from "react-router-dom";
import audi1 from "./components/audio/audio1.wav";
import audi2 from "./components/audio/audio2.wav";
import audi3 from "./components/audio/audio3.wav";

function App() {
  let audio1 = new Audio(audi1);
  let audio2 = new Audio(audi2);
  let audio3 = new Audio(audi3);

  const list = [
    { num: "one", class: "voices firstVoice" },
    { num: "two", class: "voices secondVoice" },
    { num: "three", class: "voices thirdVoice" },
    { num: "four", class: "voices fourthVoice" },
  ];

  const pylan = {
    one: audio1,
    two: audio2,
    three: audio3,
  };

  let langArr = true;
  const [lang, setLang] = useState("eng");

  const handleLanguage = () => {
    if (langArr) {
      setLang("ru");
      langArr = !langArr;
    } else {
      setLang("eng");
      langArr = !langArr;
    }
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="*"
          element={
            <Main
              list={list}
              pylan={pylan}
              handleLanguage={handleLanguage}
              lang={lang}
            />
          }
        />

        <Route
          exact
          path="/guid/"
          element={
            <Guidline
              list={list}
              pylan={pylan}
              handleLanguage={handleLanguage}
              lang={lang}
            />
          }
        ></Route>
        <Route
          exact
          path="/exercise/"
          element={
            <Exercise
              list={list}
              pylan={pylan}
              handleLanguage={handleLanguage}
              lang={lang}
            />
          }
        ></Route>
        <Route
          exact
          path="/exer2/"
          element={
            <Exer2
              list={list}
              pylan={pylan}
              handleLanguage={handleLanguage}
              lang={lang}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
