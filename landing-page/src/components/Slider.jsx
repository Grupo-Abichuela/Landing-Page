import React from "react";
import Slide from "./Slide";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.webp";
import img4 from "../img/img4.webp";
import img5 from "../img/img5.webp";
import img6 from "../img/img6.webp";
import img7 from "../img/img7.webp";
import img8 from "../img/img8.webp";
import img9 from "../img/img9.webp";
import img10 from "../img/img10.webp";
import img11 from "../img/img11.webp";
import img12 from "../img/img12.webp";
import prof1 from "../img/prof1.jpg";
import prof2 from "../img/prof2.webp";
import prof3 from "../img/prof3.jpg";
import prof4 from "../img/prof4.jpg";
import prof5 from "../img/prof5.webp";
import prof6 from "../img/prof6.webp";
import prof7 from "../img/prof7.webp";
import prof8 from "../img/prof8.webp";
import prof9 from "../img/prof9.jpg";
import prof10 from "../img/prof10.webp";
import prof11 from "../img/prof11.webp";
import prof12 from "../img/prof12.jpg";

function Slider() {
  return (
    <div id="slider" className="bk">
      <input type="radio" name="slider" id="slide1" defaultChecked={true} />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <div id="slides">
        <div id="guias-header">
          <ul>
            <li>
              <h2>
                Inspirate con los proyectos realizados por nuestros artistas
              </h2>
            </li>
            <li>
              <a href="#">Ver Más Proyectos</a>
            </li>
          </ul>
        </div>
        <div id="overflow">
          <div className="inner">
            <div className="slide">
              <Slide
                image={img1}
                image2={img2}
                image3={img3}
                image4={img4}
                profilePicture={prof1}
                profilePicture2={prof2}
                profilePicture3={prof3}
                profilePicture4={prof4}
                artName="Ayla"
                artName2="Skeleton Warrior"
                artName3="Eclipse Samurai"
                artName4="Ghost Warrior"
                artistName="by Chubymi"
                artistName2="by Rhydden"
                artistName3="by Lineos_Art"
                artistName4="by Stormrider_art"
              />
            </div>
            <div className="slide">
              <Slide
                image={img5}
                image2={img6}
                image3={img7}
                image4={img8}
                profilePicture={prof5}
                profilePicture2={prof6}
                profilePicture3={prof7}
                profilePicture4={prof8}
                artName="Callous King"
                artName2="Goblin"
                artName3="Amaris Kingvale"
                artName4="Cassius"
                artistName="by Silicon"
                artistName2="by yodeller"
                artistName3="by Sodapoppin"
                artistName4="by angor"
              />
            </div>
            <div className="slide">
            <Slide
                image={img9}
                image2={img10}
                image3={img11}
                image4={img12}
                profilePicture={prof9}
                profilePicture2={prof10}
                profilePicture3={prof11}
                profilePicture4={prof12}
                artName="Babylon"
                artName2="Errant Raverly"
                artName3="Verp"
                artName4="Hateful Dead"
                artistName="by JohnSilvaArt"
                artistName2="by Sony"
                artistName3="by Mariah_art"
                artistName4="by Tombag_"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>
      <div id="bullets">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>
    </div>
  );
}

export default Slider;
