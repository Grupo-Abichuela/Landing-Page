import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Guias from "./components/Guias"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Guias/>
    </div>
  );
}

export default App;
