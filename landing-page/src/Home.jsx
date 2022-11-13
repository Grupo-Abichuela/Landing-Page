import React from 'react'
import Main from "./components/Main"
import Guias from "./components/Guias"
import Slider from "./components/Slider"
import Footer from "./components/Footer"

function Home() {
  return (
    <div>
      <Main/>      
      <Slider/>
      <Guias/>
      <Footer/>
    </div>
  )
}

export default Home
