import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Home from "./Home"
import AboutUs from './/AboutUs';
import {Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/aboutus" component={AboutUs} />
    </div>
  );
}

export default App;