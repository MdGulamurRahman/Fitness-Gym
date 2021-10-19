import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Benifit.css'

const Benifit = (props) => {
    const {name, text} = props.benifit;
    return (
        <CardGroup>
            <Card className="benifit-card">
                <Card.Body>
                <Card.Title className="text-dark text-card "><h3>{name}</h3></Card.Title>
                <Card.Text className="text-secondary">
                  {text}
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
    );
};

export default Benifit;