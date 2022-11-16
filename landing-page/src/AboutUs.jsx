import React from "react";
import "./AboutUs.css";
import integrante2 from "./img/rodrigo.png";
import integrante1 from "./img/jose.jpg";
import integrante3 from "./img/victor.png";
import integrante4 from "./img/gonzalo.png";
import integrante5 from "./img/cesar.png";
function AboutUs() {
  return (
    <div class="container">
      <div>
        <h1>MISION</h1>
        <p>
          Desarrollar una aplicación que logre un servicio efectivo y
          satisfactorio entre sus usuarios generando confianza, seguridad,
          oportunidades de trabajo además de servicio.
        </p>
        <h1>VISION</h1>
        <p>
          Ser la empresa por excelencia reconocida en latinoamérica donde las
          personas psuedan descubrir y contratar diferentes artistas, de una
          manera sencilla y segura online.
        </p>
      </div>
      <div>
        <h1>Integrantes</h1>
        <div class="container-cartas">
          <div class="cartas-integrantes">
            <div class="card_title">
              <p>José Mauricio Santisteban Cerna</p>
            </div>
            <div class="card_body">
              <ul>
                <li>Ciencias de la computación</li>
                <li>Videojuegos</li>
                <li>UX/UI Design</li>
                <li>C++, Python, C#</li>
              </ul>
              <div class="card_image">
                <img src={integrante1} />
              </div>
            </div>
          </div>
          <div class="cartas-integrantes">
            <div class="card_title">
              <p>Rodrigo Andrés López Takahashi</p>
            </div>
            <div class="card_body">
              <ul>
                <li>Ciencias de la computación</li>
                <li>Angular Intermedio</li>
                <li>Python, C++</li>
              </ul>
              <div class="card_image">
                <img src={integrante2} />
              </div>
            </div>
          </div>
          <div class="cartas-integrantes">
            <div class="card_title">
              <p>Victor Andrés Orihuela Schanks</p>
            </div>
            <div class="card_body">
              <ul>
                <li>Ciencias de la computación</li>
                <li>Videojuegos</li>
                <li>C++</li>
                <li>React, HTML, CSS</li>
              </ul>
              <div class="card_image">
                <img src={integrante3} />
              </div>
            </div>
          </div>
          <div class="cartas-integrantes">
            <div class="card_title">
              <p>Gonzalo Alejandro Jurado</p>
            </div>
            <div class="card_body">
              <ul>
                <li>Ciencias de la computación</li>
                <li>HTML, CSS</li>
                <li>Python</li>
                <li>C++</li>
              </ul>
              <div class="card_image">
                <img src={integrante4} />
              </div>
            </div>
          </div>
          <div class="cartas-integrantes">
            <div class="card_title">
              <p>César Augusto Torres Paniagua</p>
            </div>
            <div class="card_body">
              <ul>
                <li>Ciencias de la computación</li>
                <li>Inteligencia Artificial</li>
                <li>Python</li>
                <li>C++</li>
              </ul>
              <div class="card_image">
                <img src={integrante5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
