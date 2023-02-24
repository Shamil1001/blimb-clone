import React, { useState } from "react";
import Main from "./components/main";
import Guidline from "./components/guidline";
import Exercise from "./components/exercises/exercise";
import Exer2 from "./components/exercises/Exer2";
import Exer3 from "./components/exercises/ex3";
import Exer4 from "./components/exercises/ex4";
import Exer5 from "./components/exercises/ex5";
import Exer6 from "./components/exercises/ex6";
import Exer7 from "./components/exercises/ex7";
import Exer8 from "./components/exercises/ex8";
import Exer9 from "./components/exercises/ex9";
import Exer10 from "./components/exercises/ex10";
import Exer11 from "./components/exercises/ex11";
import Exer12 from "./components/exercises/ex12";
import { Routes, Route } from "react-router-dom";
import audi1 from "./components/audio/audio1.wav";
import audi2 from "./components/audio/audio2.wav";
import audi3 from "./components/audio/audio3.wav";

function App() {
  let audio1 = new Audio(audi1);
  let audio2 = new Audio(audi2);
  let audio3 = new Audio(audi3);

  const [voiceChoice, setVoiceChoice] = useState("one");
  const [slideValue, setSlideValue] = useState(50);

  const handleChange = (newValue) => {
    setSlideValue(newValue);
  };

  const chooseAudio = (e) => {
    pylan[e].volume = slideValue / 100;
    pylan[e].play();
    setVoiceChoice(e);
  };

  const list = [
    { num: "one", class: "voices firstVoice" },
    { num: "two", class: "voices secondVoice" },
    { num: "three", class: "voices thirdVoice" },
    { num: "four", class: "voices fourthVoice" },
  ];
  const components = [
    { component: Exercise, path: "/exercise/" },
    { component: Exer2, path: "/exer2/" },
    { component: Exer3, path: "/exer3/" },
    { component: Exer4, path: "/exer4/" },
    { component: Exer5, path: "/exer5/" },
    { component: Exer6, path: "/exer6/" },
    { component: Exer7, path: "/exer7/" },
    { component: Exer8, path: "/exer8/" },
    { component: Exer9, path: "/exer9/" },
    { component: Exer10, path: "/exer10/" },
    { component: Exer11, path: "/exer11/" },
    { component: Exer12, path: "/exer12/" },
  ];

  const pylan = {
    one: audio1,
    two: audio2,
    three: audio3,
    four: audio2,
  };

  const [langArr, setLangArr] = useState(true);
  const [lang, setLang] = useState("eng");

  const handleLanguage = () => {
    if (langArr) {
      setLangArr(!langArr);
      setLang("ru");
    } else {
      setLangArr(!langArr);
      setLang("eng");
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
              chooseAudio={chooseAudio}
              voiceChoice={voiceChoice}
              slideValue={slideValue}
              handleChange={handleChange}
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
              chooseAudio={chooseAudio}
              voiceChoice={voiceChoice}
              slideValue={slideValue}
              handleChange={handleChange}
            />
          }
        ></Route>
        {components.map((element) => (
          <Route
            key={element.component}
            exact
            path={element.path}
            element={
              <element.component
                list={list}
                pylan={pylan}
                handleLanguage={handleLanguage}
                lang={lang}
                chooseAudio={chooseAudio}
                voiceChoice={voiceChoice}
                slideValue={slideValue}
                handleChange={handleChange}
              />
            }
          ></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
