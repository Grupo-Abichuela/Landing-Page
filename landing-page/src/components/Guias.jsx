import React from 'react';
import Guia from './Guia';
import guia_impulsar from "../img/guia_impulsar_negocio.png"
import guia_portafolio from "../img/guia_crear_portafolio.png"
import guia_perfil from "../img/guia_personalizar_perfil.png"

function Guias() {
  return (
    <div id="section-guias">
        <div id="guias-header">
            <ul>
                <li><h2>Guias de GoArt</h2></li>
                <li><a href="#">Ver Más Guias</a></li>
            </ul>
        </div>
        <ul id="guias-lst">
            <li>
                <Guia href="#" src={guia_perfil} title="Personaliza tu perfil" text="Guia completa de como personalizar tu perfil en GoArt."/>
            </li>
            <li>
                <Guia href="#" src={guia_portafolio} title="Crea tu portafolio" text="Guia completa de como crear tu portafolio para atraer mas clientes."/>
            </li>
            <li>
                <a href="#">
                    <img src={guia_impulsar}/>
                    <h2>Impulsa tu negocio</h2>
                </a>    
                <p>Guia completa de como impulsar tu negocio en GoArt.</p>
            </li>
        </ul>
    </div>
  )
}

export default Guias