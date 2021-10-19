import React from 'react';
import './Header.css'
import { Carousel } from 'react-bootstrap';
import s1 from '../../images/banner1.png'
import s2 from '../../images/s2.jpg'
import s3 from '../../images/s5.jpg'

const Header = () => {
    return (
        <div className="header-area">
           <Carousel>
                <Carousel.Item className="s-area">
                    <img
                    className="mx-auto d-block w-100"
                    src={s1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="text-clr">THE BEST FITNESS</h3>
                    <p className="text-info">Grow your Strength Body</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="s-area">
                    <img
                    className="mx-auto d-block w-100"
                    src={s2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-clr">THE BEST FITNESS</h3>
                    <p className="text-info">Grow your Strength Body</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="mx-auto s-area">
                    <img
                    className="d-block w-100"
                    src={s3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className="text-clr">THE BEST FITNESS</h3>
                    <p className="text-info">Grow your Strength Body</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Header;