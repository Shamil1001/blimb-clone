import React from "react";
// import "./App.css";
// import "./index.css";
import Main from "./components/main";
import Guidline from "./components/guidline";
import Exercise from "./components/exercise";
import Exer2 from "./components/Exer2";
import { Routes, Route } from "react-router-dom";
//Same issues
function App() {
  const list = [
    { num: "one", class: "voices firstVoice" },
    { num: "two", class: "voices secondVoice" },
    { num: "three", class: "voices thirdVoice" },
    { num: "four", class: "voices fourthVoice" },
  ];

  return (
    <>
      <Routes>
        <Route exact path="*" element={<Main list={list} />} />

        <Route exact path="/guid/" element={<Guidline list={list} />}></Route>
        <Route
          exact
          path="/exercise/"
          element={<Exercise list={list} />}
        ></Route>
        <Route exact path="/exer2/" element={<Exer2 list={list} />}></Route>
      </Routes>
    </>
  );
}

export default App;
