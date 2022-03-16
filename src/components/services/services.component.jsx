import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './services.style.scss';

const Services = () => (
    <div className="sekcija">
        <h3 className="heading">Teikiame remonto paslaugas:</h3>

        <div className="paslaugos">

            <div className="item">
                <div className="ikona">
                    <FontAwesomeIcon icon="layer-group" />
                </div>
                <div className="aprasymas">
                    <h5>Stambios buitinės technikos</h5>
                    <p> Šaldytuvai<br />
                    Šaldikliai<br />
                    Skalbimo mašinos
                    </p>
                </div>
            </div>

            <div className="item">
                <div className="ikona">
                    <FontAwesomeIcon icon="tools" />
                </div>
                <div className="aprasymas">
                    <h5>Garantinio</h5>
                    <p>Detailesnė informacija</p>
                </div>
            </div>

            <div className="item">
                <div className="ikona">
                    <FontAwesomeIcon icon="city" />
                </div>
                <div className="aprasymas">
                    <h5>Mieste</h5>
                    <p>Marijampolė<br />
                    Kalvarija
                    </p>
                </div>
            </div>

            <div className="item">
                <div className="ikona">
                    <FontAwesomeIcon icon="blender" />
                </div>
                <div className="aprasymas">
                    <h5>Smulkios buitinės technikos</h5>
                    <p> Kavamalės<br />
                    Dulkių siurbliai<br />
                    Mikseriai</p>
                </div>
            </div>

            <div className="item">
                <div className="ikona">
                    <FontAwesomeIcon icon="hammer" />
                </div>
                <div className="aprasymas">
                    <h5>Pogarantinio</h5>
                    <p>Detailesnė informacija</p>
                </div>
            </div>


            <div className="item">
                <div className="ikona">
                    <FontAwesomeIcon icon="home" />
                </div>
                <div className="aprasymas">
                    <h5>Rajone</h5>
                    <p>Želsva.<br />
                    30km apie Marijampolę.
                    </p>
                </div>
            </div>

        </div>
    </div>
)

export default Services;