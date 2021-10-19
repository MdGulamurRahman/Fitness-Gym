import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="services-area">
            <h1 className="py-5 text-center fw-bold text-light">OUR <span>FEATURES</span> CLASSES</h1>
            <div className="container service-container">
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;