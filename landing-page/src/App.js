import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Guias from "./components/Guias"
import Slider from "./components/Slider"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Slider/>
      <Guias/>
    </div>
  );
}

export default App;
