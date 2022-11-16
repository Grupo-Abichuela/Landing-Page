import React from 'react'
import Main from "./components/Main"
import Guias from "./components/Guias"
import Slider from "./components/Slider"
import Footer from "./components/Footer"
import Estreno from "./components/Estreno"


function Home() {
  return (
    <div>
      <Main/>      
      <Slider/>
      <Estreno/>
      <Guias/>
      <Footer/>

    </div>
  )
}

export default Home
