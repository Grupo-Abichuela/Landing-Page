import React from 'react';

import check_icon from "../img/check_icon.svg"

function Main() {
  return (
    <div className="section">
        <ul id="main-txt">
            <li className="text40"><center>UNIFICANDO PASIONES Y EMPRENDIMIENTOS</center></li>
            <li className="text15"><center>Únete a nuestra comunidad de artistas y emprendedores y podrás:</center></li>
            <li>
                <div>
                    <ul className="main-txt-lst">
                        <li><img src={check_icon}/>Ver el progreso y estado de tus solicitudes de servicio</li>
                        <li><img src={check_icon}/>Comunicarte diréctamente con el artista comisionado</li>
                        <li><img src={check_icon}/>Encontrar artistas independientes variados</li>
                        <li><img src={check_icon}/>Encontrar eficazmente el servicio artistico que buscas</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Main