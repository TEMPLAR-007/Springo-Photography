import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from '../../Images/3-22.jpg'
import img2 from '../../Images/karsten-wurth-7BjhtdogU3A-unsplash.jpg'
import img3 from '../../Images/jonas-jaeken-6GBYz-QQZik-unsplash.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='container shadow-lg p-1 mb-5 bg-body'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>“Colors are the smiles of nature.”</h3>
                        <p>~Leigh Hunt</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>“Landscape photography is the supreme test of the photographer – and often the supreme disappointment.”</h3>
                        <p>~Ansel Adams</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>“By discovering nature, you discover yourself.”</h3>
                        <p>~Maxime Lagacé</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;