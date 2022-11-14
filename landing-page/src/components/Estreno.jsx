import React from "react";
import Card from "./Card";


import featureimage1 from "../img/1.jpeg"
import featureimage2 from "../img/2.jpeg"
import featureimage3 from "../img/3.jpeg"
import featureimage4 from "../img/4.jpeg"
import featureimage5 from "../img/5.jpeg"
import featureimage6 from "../img/6.jpg"
import featureimage7 from "../img/7.jpg"
import featureimage8 from "../img/8.jpg"
function Estreno() {
    return (

        <div class="artistas">
            <div id="guias-header">
                <ul>
                    <li><h2>Artistas en estreno</h2></li>
                    <li><a href="#">Ver Más Artistas nuevo</a></li>
                </ul>
            </div>
            <div className="cards">
                <Card image={featureimage1} profilePicture={featureimage2} artName="Ayla" artistName="" />
                <Card image={featureimage3} profilePicture={featureimage4} artName="Ayla" artistName="" />
                <Card image={featureimage5} profilePicture={featureimage6} artName="Ayla" artistName="" />
                <Card image={featureimage7} profilePicture={featureimage8} artName="Ayla" artistName="" />
            </div>
            
        </div>
    )

}

export default Estreno