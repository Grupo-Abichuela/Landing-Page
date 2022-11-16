import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Home from "./Home"
import AboutUs from './/AboutUs';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;