import React from 'react';
import './Discount.css'
import discount from '../../images/fitness-class-1.png'
const Discount = () => {
    return (
        <div className="overflow-hidden discount-area">
                <div className="pt-5 row d-flex align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className="dis-img" src={discount} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5 ms-auto dis-text">
                        <h1 className="fw-bold text-light">FITNESS CLASSES THIS SUMMER. PAY NOW AND GET <span style={{color: 'tomato'}}>25% DISCOUNT</span></h1>
                        <h3 className="py-2 text-info">Stay active and earn with Fitness Incentive</h3>
                        <p className="text-white-50">Healthy choices can be made every day, regardless of where you live, work and play. That's why our Fitness Incentive program supports good choices 24/7, 365 days a year via a health and wellbeing platform called Sharecare. It uses your interests, activity report and overall health information to provide relevant resources and advice.</p>
                        <button className="discount-btn">BECOME A MEMBER</button>
                    </div>
                </div>
        </div>
    );
};

export default Discount;