import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Trainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faPhone, faGrinHearts} from '@fortawesome/free-solid-svg-icons'
const Trainer = ({trainer}) => {
    const {img, name, ceo, detail, number, practice} = trainer;
    return (
        <CardGroup className="overflow-hidden">
            <Card className="train-card">
                <Card.Img className="t-img" src={img} />
                <Card.Body>
                <Card.Title className="fw-bold">{name} <FontAwesomeIcon className="train-icon" icon={faDumbbell}/></Card.Title>
                <Card.Text className="text-success">
                   {ceo}
                </Card.Text>
                <Card.Text className="text-secondary">
                  {detail}
                </Card.Text>
                <Card.Text className="">
                <h6><FontAwesomeIcon className="work-icon2" icon={faPhone}/> {number}</h6>
                </Card.Text>
                <Card.Text className="">
                  {practice} <FontAwesomeIcon className="train-icon" icon={faGrinHearts}/>
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
    );
};

export default Trainer;