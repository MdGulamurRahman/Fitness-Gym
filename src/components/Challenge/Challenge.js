import React from 'react';
import { Link } from 'react-router-dom';
import './Challenge.css'
const Challenge = () => {
    return (
        <div className="overflow-hidden challenge-area">
            <h1 className="py-5 text-center fw-bold text-light">8-WEEK'S <span>CHALLENGE</span></h1>
            <div className="container chal-container">
                <div className="row">
                    <div className=" col-sm-12 col-md-5 col-lg-6 d-grid g-3">
                       <div className="mb-5 challenge-card">
                            <h1 className="text-light fw-bold">8-Week's Weight Loss Challenge</h1>
                            <p className="text-info"><span>20 OCT</span> <span>16:00 - 20:00</span></p>
                            <p className="text-white-50">Deciding what to do in the last few days of the year can be a difficult task since there is so much we want to achieve.</p>
                            <Link to="/details"><button className="more-btn me-5">MORE DETAILS</button></Link>
                            <button className="buy-btn">BUY NOW</button>
                        </div>
                         <div className=" challenge-card">
                            <h1 className="text-light fw-bold">10 Best Muscle-Building Biceps Exercises</h1>
                            <p className="text-info"><span>20 FAB</span> <span>16:00 - 20:00</span></p>
                            <p className="text-white-50">Deciding what to do in the last few days of the year can be a difficult task since there is so much we want to achieve.</p>
                            <Link to="/details"><button className="more-btn me-5">MORE DETAILS</button></Link>
                            <button className="buy-btn">BUY NOW</button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-6 d-grid g-3">
                       <div className="mb-5 challenge-card">
                            <h1 className="text-light fw-bold">9 Ways You're Sabotaging Your Fat Lost</h1>
                            <p className="text-info"><span>20 OCT</span> <span>16:00 - 20:00</span></p>
                            <p className="text-white-50">Deciding what to do in the last few days of the year can be a difficult task since there is so much we want to achieve.</p>
                            <Link to="/details"><button className="more-btn me-5">MORE DETAILS</button></Link>
                            <button className="buy-btn">BUY NOW</button>
                        </div>                    
                            <div className="challenge-card">
                                <h1 className="text-light fw-bold">Two Proven Muscle Recovery Tips</h1>
                                <p className="text-info"><span>20 OCT</span> <span>16:00 - 20:00</span></p>
                                <p className="text-white-50">Deciding what to do in the last few days of the year can be a difficult task since there is so much we want to achieve.</p>
                                <Link to="/details"><button className="more-btn me-5">MORE DETAILS</button></Link>
                                <button className="buy-btn">BUY NOW</button>
                            </div>                  
                    </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Challenge;






