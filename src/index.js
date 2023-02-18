import ReactDOM from 'react-dom/client';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const rootElement =document.getElementById('root')
const root=createRoot(rootElement)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(
  
    <BrowserRouter>
        
        {/* <Route path="/" element={ <App /> }/> */}
        <App/>
    </BrowserRouter>
  

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
