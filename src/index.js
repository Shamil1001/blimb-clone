import React from "react";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
