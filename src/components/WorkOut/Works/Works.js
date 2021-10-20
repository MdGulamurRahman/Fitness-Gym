import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Work from '../Work/Work';
import './Works.css'
const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(()=>{
        fetch("work.json")
        .then(res => res.json())
        .then(data => setWorks(data))
    },[])
    return (
        <div className="overflow-hidden works-area">
            <h1 className="py-5 text-center fw-bold">DAILY <span>WORKOUT</span> SCHEDULES</h1>
            <div className="container works-container">
            <Row xs={1} md={3} className="g-4">
                {
                works.map(work => <Work key={work.id} work={work}></Work>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Works;