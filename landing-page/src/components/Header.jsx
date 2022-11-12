import React from 'react';
import contactanos_icon from "../img/contactanos_icon.svg";
import explorar_icon from "../img/explorar_icon.svg";

function Navbar() {
  return (
    <nav id="header-nav">
        <ul id="nav_content">
            <li id="nav_left">
                <a id="app-name" href="#">GoArt</a>
                <input id="search-input" type="text" name="key-words" placeholder="Buscar por nombre de producto o artista"></input>
                <div id="header-explorar">Explorar<img src={explorar_icon}/></div>
            </li>
            <li>
                <div id="header-contactanos">
                    <a href="#">Contactanos</a>
                    <img src={contactanos_icon}/>
                </div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar