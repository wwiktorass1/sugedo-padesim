import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.style.css';

const Footer = () => (
    <div className="footer">
        <div className="footer-widget">
            <h3>Kontaktinė informacija</h3>
            <div className="contact-block">
                <ul>
                    <li>
                        <FontAwesomeIcon icon="map-marker" />
                        <span className="text"> Adresas</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="phone" />
                        <span className="text"> Telefonas</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon="paper-plane" />
                        <span className="text"> E-mail</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="footer-widget">
        <h3>Darbo valandos</h3>
        <div className="opening-hours">
            <h4>Darbo laikas:</h4>
            <p>
                <span>Pirmadienis – Penktadienis: 8-17</span>
            </p>
            <h4>Nedirbame:</h4>
            <p>
                <span>Savatgaliais</span><br/>
                <span>Švenčių dienomis</span>
            </p>
        </div>

        
    </div>
    </div>
)

export default Footer;