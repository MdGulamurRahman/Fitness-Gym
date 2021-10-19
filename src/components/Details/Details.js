import React from 'react';
import './Details.css'
import detailImg from '../../images/banner2.png'
import { Card, CardGroup } from 'react-bootstrap';
const Details = () => {
    return (
        <div className="overflow-hidden details-area">
            <div className="container">
                <div className="row">
                    <div className=" d-grid g-4 weight-card col-sm-12 col-md-6 col-lg-6">
                    <div>
                        <CardGroup>
                            <Card className="benifit-card">
                                <Card.Body>
                                <Card.Title className="text-dark text-card "><h3>HEAVY WEIGHT</h3></Card.Title>
                                <Card.Text className="text-secondary">
                                Boxers who weigh over 200 pounds (91 kg; 14 st 4 lb) are considered heavyweights by 3 of the 4 major professional boxing organizations: the International Boxing Federation,[1] the World Boxing Association,[2] and the World Boxing Organization.When you do that, your hunger levels go down.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup> 
                    </div>
                    <div>
                        <CardGroup>
                            <Card className="benifit-card">
                                <Card.Body>
                                <Card.Title className="text-dark text-card "><h3>INDOOR CYCLING</h3></Card.Title>
                                <Card.Text className="text-secondary">
                                While we all agree that cycling outdoors is wonderful, it’s not always possible to get outside. Indoor training gives you the chance to turn the pedals and top up your fitness when it’s difficult to head out.When you do that, your hunger levels go down, and you generally end up eating fewer calories
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup> 
                    </div>
                    <div>
                        <CardGroup>
                            <Card className="benifit-card">
                                <Card.Body>
                                <Card.Title className="text-dark text-card "><h3>BODY BUILDING</h3></Card.Title>
                                <Card.Text className="text-secondary">
                                Bodybuilding is the use of progressive resistance exercise to control and develop ones muscles (muscle building) by muscle hypertrophy for aesthetic purposes.[1] It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup> 
                    </div>
                    <div>
                        <CardGroup>
                            <Card className="benifit-card">
                                <Card.Body>
                                <Card.Title className="text-dark text-card "><h3>WEIGHT LOSS</h3></Card.Title>
                                <Card.Text className="text-secondary">
                                One way to lose weight quickly is to cut back on sugars and starches, or carbohydrates. This could be with a low carb eating plan or by reducing refined carbs and replacing them with whole grains.When you do that, your hunger levels go down, and you generally end up eating fewer calories
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup> 
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className="detail-img" src={detailImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;