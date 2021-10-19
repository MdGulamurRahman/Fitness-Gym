import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Trainer from '../Trainer/Trainer';
import './Trainers.css'
const Trainers = () => {
    const [trainers, setTrainers] = useState([])
    useEffect(()=>{
        fetch('trainer.json')
        .then(res => res.json())
        .then(data => setTrainers(data))
    },[])
    return (
        <div className="overflow-hidden trainers-area">
            <h1 className="py-5 text-center fw-bold text-dark">OUR EXPERIENCED <span>TRAINERS</span></h1>
            <div className="container trainer-container">
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer}></Trainer>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Trainers;