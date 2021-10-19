import React from 'react';
import './People.css'
import people1 from '../../images/testmonial2-1.jpg'
import people2 from '../../images/testmonial1-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
const People = () => {
    return (
        <div className="overflow-hidden people-area">
            <div className="container p-container">
                <h1 className="pt-5 text-center text-light fw-bold">WHAT <span>PEOPLE</span> SAYS</h1>
                <p className="pb-5 text-center text-white-50">LATEST TESTIMONIAL FROM OUR STUDENTS</p>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <div>
                            <img className="people-img" src={people1} alt="" />
                        </div>
                        <div className="ms-4">
                        <FontAwesomeIcon className="mb-1 work-icon1" icon={faQuoteLeft}/>
                            <h6 className="p-text">I have already experienced their services twice. They are very helpful and understand customers need.</h6>
                            <small className="text-white-50">- Margina Begum</small>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center people">
                        <div>
                            <img className="people-img" src={people2} alt="" />
                        </div>
                        <div className=" ms-4">
                        <FontAwesomeIcon className="mb-1 work-icon1" icon={faQuoteLeft}/>
                            <h6 className="p-text ">We had a wonderful honeymoon in thailand with Journey2thailand, Everything was very well organized.</h6>
                            <small className="text-white-50">- Abul Kashem</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;