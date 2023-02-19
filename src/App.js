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
  return (
    <>
      <Routes>
        <Route exact path="*" element={<Main />} />

        <Route exact path="/guid/" element={<Guidline />}></Route>
        <Route exact path="/exercise/" element={<Exercise />}></Route>
        <Route exact path="/exer2/" element={<Exer2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
