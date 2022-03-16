import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import logo1 from '../../images/technika.jpg'; 
import logo2 from '../../images/technika2.jpg'; 
import logo3 from '../../images/technika3.jpg'; 

import './news-carousel.style.css';

const NewsCarousel = () => (

    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={logo1}
                alt="Third slide"
            />
            <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={logo2}
                alt="Third slide"
            />

            <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={logo3}
                alt="Third slide"
            />

            <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>


)

export default NewsCarousel;