import React, { Component, Fragment, useState } from "react";
// import "./App.css";
// import "./index.css";
import Main from './components/main'
import Guidline from "./components/guidline";
import Exercise from "./components/exercise";
import Exer2 from "./components/Exer2";
import { Button } from "@mui/material";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useRoutes,
} from "react-router-dom";

function App() {
    return ( <>
        <Routes>
<Route
  exact
  path="*"
  element={
    <Main/>
  }
/>

<Route exact path="/guid/" element={<Guidline/>}></Route>
<Route exact path="/exercise/" element={<Exercise/>}></Route>
<Route exact path="/exer2/" element={<Exer2/>}></Route>

</Routes> 

    </>)

{/* <Routes>
<Route
  exact
  path="*"
  element={
    <First/>
  }
/>
<Route exact path="/register/" element={<Regis/>}></Route>
<Route exact path="/mainMenu/" element={<MainMenu/>}></Route>
<Route exact path="/mainPage/" element={<MainPage/>}></Route>
<Route exact path="/sargyt/" element={<Sargyt/>}></Route>
</Routes> */}
        // 
        //     >
        //     <
        //     Button variant = "contained"
        //     color = "primary" >
        //     Primary <
        //     /Button> <
        //     div className = "container p-2 m-auto" >
        //     <
        //     button className = "p-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-400" >
        //     Button <
        //     /button> <
        //     button className = "button-blue" > Find friends < /button> < /
        //     div > <
        //     />

    }

    export default App;