import React from 'react';
import './Work.css';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser, faCheck} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Work = (props) => {
    const {img, name, duration, step, chest, tricep} = props.work;
    return (
        <CardGroup>
            <Card className="work-card">
                <Card.Img className="h-50" src={img} />
                <Card.Body>
                <Card.Title className="text-success fw-bold"><h4>{name}</h4></Card.Title>
                <Card.Text >
                   <span className="me-3"><FontAwesomeIcon className="work-icon1" icon={faClock}/> Duration: {duration}</span>
                    <span className="ms-2"><FontAwesomeIcon className="work-icon1" icon={faUser}/> {step}</span>
                </Card.Text>
                <Card.Text>
                    <span className="text-secondary"><FontAwesomeIcon className="work-icon2" icon={faCheck}/> Chest: <br />{chest}</span>
                </Card.Text>
                <Card.Text>
                <span className="text-secondary"><FontAwesomeIcon className="work-icon2" icon={faCheck}/> Triceps: <br />{tricep}</span>
                    
                </Card.Text>
                </Card.Body>
                <Card.Text>
                 <Link to="services"><button className="mb-2 work-btn ms-2">More Details</button></Link>
                </Card.Text>
            </Card>
            </CardGroup>
                );
};

export default Work;