import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons'
 
const About = () => {
    return (
        <div className="about-area">
            <h1 className="py-5 text-center text-light fw-bold"><span className="text-clr">ABOUT</span> OF PHYSICAL FITNESS <FontAwesomeIcon className="text-clr" icon={faDumbbell}/></h1>
            <div className="container about">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="about-text">
                            <h3 className="text-dark">Physical Fitness</h3>
                            <p className="text-secondary">To put it simply, physical activity and exercise is important for everyone. Children, adolescents, and adults of all ages need regular physical activity. Physical activity promotes good health, and you should stay active throughout all stages of your life regardless of your body type or BMI.</p>
                        </div>
                        <div className="my-5 about-text">
                            <h3 className="text-dark">Save Money</h3>
                            <p className="text-secondary">According to the Centers for Disease Control and Prevention, chronic diseases cause 7 out of 10 deaths in the U.S., and treating chronic diseases accounts for 86% of U.S. healthcare costs. While some diseases cannot be prevented, you can reduce your risk for certain disease</p>
                        </div>
                        <div className="about-text">
                            <h3 className="text-dark">Improve your health</h3>
                            <p className="text-secondary">There are numerous health advantages to physical fitness. Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health. Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes,</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="about-text2">
                            <h3 className="text-dark">Increase your life Expectancy</h3>
                            <p className="text-secondary">Numerous studies have shown that regular physical activity increases life expectancy and reduces the risk of premature mortality. There’s not a magic formula that translates hours of physical activity into hours of life gained, but research suggests that people</p>
                        </div>
                        <div className="my-5 about-text2">
                            <h3 className="text-dark">Reduce your risk of Injury</h3>
                            <p className="text-secondary">Regular exercise and physical activity increase muscle strength, bone density, flexibility, and stability. Physical fitness can reduce your risk for and resilience to accidental injuries, especially as you get older. For example, stronger muscles and better</p>
                        </div>
                        <div className="about-text2">
                            <h3 className="text-dark">Improve your quality of life</h3>
                            <p className="text-secondary">A sedentary lifestyle and a lack of physical activity can take a toll on a person’s body. Physical inactivity is associated with an increased risk for certain types of cancer, numerous chronic diseases, and mental health issues. Exercise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;