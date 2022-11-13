import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Home from "./Home"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home></Home>
    </div>
  );
}

export default App;