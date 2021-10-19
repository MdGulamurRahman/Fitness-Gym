import React from 'react';
import './WorkTime.css'
import workTime from '../../images/img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faCalculator, faCodeBranch, faUser} from '@fortawesome/free-solid-svg-icons'
const WorkTime = () => {
    return (
        <div className="workTime-area">
            <div className="container time-container">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <img src={workTime} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                            <FontAwesomeIcon className="time-icon" icon={faDatabase}/> 
                                <h2 className="text-light">Responsive Layout</h2>
                                <p className="text-secondary">Visual Composer is a drag and drop frontend and backend page builder that will save you tons of time working on our site content</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                            <FontAwesomeIcon className="time-icon" icon={faCalculator}/>
                                <h2 className="text-light">BMI & IWC Calculator</h2>
                                <p className="text-secondary">The Events Calendar is built to work out of the box configure the settings to match your needs and you'll be making events within less than 5 minutes.</p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                            <FontAwesomeIcon className="time-icon" icon={faCodeBranch}/>
                                <h2 className="text-light">Premium Plugins Free</h2>
                                <p className="text-secondary">WooCommerce is built with developers in mind. It provides a strong, robust frame- work which you can create online store - or extend it.</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                            <FontAwesomeIcon className="time-icon" icon={faUser}/>
                                <h2 className="text-light">Free Customer Support</h2>
                                <p className="text-secondary">Fitness Care is always up to date. We constantly listen to our customers and we add new features every week. We take good care of your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTime;