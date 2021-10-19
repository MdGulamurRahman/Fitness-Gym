import React from 'react';
import './Fitness.css'
import fitness from '../../images/fitness-man-1.png'
import { Link } from 'react-router-dom';
const Fitness = () => {
    return (
        <div className="overflow-hidden fitness-area">
            <h1 className="py-5 text-center text-light fw-bold"><span>HEALTH & FITNESS</span> GUIDE</h1>
            <div className="container">
               <div className="row d-flex align-items-center">
                  <div className="mx-2 col-sm-12 col-md-7 col-lg-7">
                        <div className="fitness-text">
                        <h3 className="py-3 text-info">The ultimate resource for maximizing your exercise and nutrition efforts.</h3>
                        <p className="text-white-50">Fitness involves activity of some sort that stimulates various systems of the body and maintains a certain condition within the body. Health, on the other hand, involves every system of the body and is only achieved through a lifestyle that supports health. The ultimate resource for maximizing your exercise and nutrition efforts. In this new edition of ACSM's Complete Guide to Fitness & Health, you have an authoritative reference that allows you to apply research-based guidance to your unique health and fitness needs. </p>
                        </div>
                        <Link to="/package"><button className="fitness-btn">START YOUR TRAINING TODAY</button></Link>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-4 ">
                        <img className="fitness-img" src={fitness} alt="" />
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Fitness;