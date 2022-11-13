import React from "react";
import facebook_icon from "../img/facebook.png"
import twitter_icon from "../img/twitter.png"
import instagram_icon from "../img/instagram.png"
import linkedin_icon from "../img/linkedin.png"

function Footerbar() {
    return (
        <footer>
            <ul class="subcribe">
                <div id="subscribe-main">
                    <li>Subscribete</li>
                </div>
                <div id="correo-suscribete-input">
                    <li>correo electronico</li>
                </div>
                <li>suscribete para obeter ofertas y noticias</li>
                <li></li>
                <div id="button-suscribirse">
                    <li>Subscribirse</li>
                </div>
            </ul>
            <ul class="foot">
                <li>
                    <ul class="soporte">
                        <li><th>Soporte</th></li>
                        <li><a href="#">Ayuda y soporte</a></li>
                        <li><a href="#">Confianza y seguridad</a></li>
                        <li><a href="#">Comprar en GoArt</a></li>
                        <li><a href="#">Vender en GoArt</a></li>
                    </ul>
                </li>
        
                <li>
                    <ul class="acerca">
                        <li><th>Acerca de</th></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Términos y condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </li>
                
                <li>
                    <ul class="social">
                        <li><th>Social</th></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Lindkedln</a></li>
                    </ul>
                </li>
            </ul>

            <ul class="image">
                <li>
                    <img src={facebook_icon}/>
                    <img src={twitter_icon}/>
                    <img src={instagram_icon}/>
                    <img src={linkedin_icon}/>
                </li>
            </ul>
        </footer>
    )
}

export default Footerbar