import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import f1 from '../../images/blog_15-150x150-140x140.jpg'
import f2 from '../../images/blog_14-150x150-140x140.jpg'
import f3 from '../../images/f.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faEnvelope, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="overflow-hidden footer-area">
            <div className="container footer-container">
                <div>
                    <div>
                        <img width="15%" className="f-img" src={f3} alt="" />
                        <p className="text-center exercise text-secondary">Exercise is immensely beneficial to your life and should be incorporated into your weekly routine. It’s vital for staying fit, improving your overall well-being, and lowering your chance of health concerns, especially as you age.</p>
                    </div>
                    <div className="fab-icon">
                    <a href="https://www.facebook.com/abrar.fahim.321"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.youtube.com/channel/UC_6uhlpXmT1wpQknmgN7IhQ/videos"><i class="fab fa-youtube px-3"></i></a>
                    <a href="https://www.linkedin.com/in/abrar-fahim-67aa45214/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/033Husam"><i class="fab fa-twitter-square px-3"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-3 col-lg-3 fitness-about">
                        <h3 className="pb-3 fw-bold text-light">About <span className="fit-clr">FitnessGym</span></h3>
                        <div className="">
                            <Link to="/home" className="text-decoration-none text-info">HOME</Link>
                            <Link to="/about" className="mx-4 text-decoration-none text-info">ABOUT</Link>
                            <Link to="/services" className="text-decoration-none text-info">SERVICE</Link>
                        </div> 
                        <div className="">
                            <Link to="/home" className="text-decoration-none text-info">PACKAGES</Link>
                            <Link to="/blog" className="mx-4 text-decoration-none text-info">BLOG</Link>
                            <Link to="/contact" className="text-decoration-none text-info">CONTACT</Link>
                        </div> 
                        <hr className="text-light" />
                        <p className="text-white-50">©️2021.Professional FitnessGym. <br />Abrar Fahim, all rights reserved</p>
                    </div>
                    <div className="col col-md-3 col-lg-3">
                        <h3 className="pb-3 text-light">CLASSES</h3>
                       <ul className="text-white-50">
                           <li>Fitness Classes</li>
                           <li>Aerobics Classes</li>
                           <li>Power Yoga</li>
                           <li>Lean Machines</li>
                           <li>Full-Body Strength</li>
                       </ul>
                    </div>
                    <div className="col col-md-3 col-lg-3">
                        <h3 className="pb-3 text-light"><span className="fit-clr">BLOG</span> POSTS</h3>
                        <div className="d-flex align-items-center">
                            <div>
                                <img className="footer-img" src={f1} alt="" />
                            </div>
                            <div className="ms-3">
                                <h6 className="text-white-50">How To Become A Certified Personal</h6>
                                <p className="text-info">Oct 1, 2021</p>
                            </div>
                        </div>
                        <div className="mt-3 d-flex align-items-center">
                            <div>
                                <img className="footer-img" src={f2} alt="" />
                            </div>
                            <div className="ms-3">
                                <h6 className="text-white-50">How To Become A Certified Personal</h6>
                                <p className="text-info">Oct 1, 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-3 col-lg-3 contact-us">
                        <h3 className="pb-3 text-light"><span className="fit-clr">CONTACT</span> US</h3>
                        <h5 className="text-white-50"><FontAwesomeIcon className="text-info" icon={faMapMarkerAlt}/> 104 Chittagong, Bangladesh</h5>
                        <h5 className="py-2 text-white-50"><FontAwesomeIcon className="text-info" icon={faEnvelope}/> Fahimjahin321@gmail.com</h5>
                        <h5 className="text-white-50"><FontAwesomeIcon className="text-info" icon={faPhoneAlt}/> 1+(880)1829-346731</h5>
                        <h5 className="text-white-50">1+(880)1839-310001</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;