import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {img, name, text} = service;
    return (
        <CardGroup>
            <Card className="service-card">
                <Card.Img className="mx-auto service-img" src={img} />
                <Card.Body>
                <Card.Title className="text-center text-info">{name}</Card.Title>
                <Card.Text className="text-center text-white-50">
                   {text}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Link to="/details"><button className="service-btn">More Service</button></Link>
                </Card.Footer>
            </Card>
            </CardGroup>
    );
};

export default Service;