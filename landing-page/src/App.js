import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Guias from "./components/Guias"
import Slider from "./components/Slider"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Slider/>
      <Guias/>
      <Footer/>
    </div>
  );
}

export default App;
