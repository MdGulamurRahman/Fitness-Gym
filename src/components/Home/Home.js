import React from 'react';
import Discount from '../Discount/Discount';
import Header from '../Header/Header';
import People from '../People/People';
import Trainers from '../Trainers/Trainers/Trainers';
import Works from '../WorkOut/Works/Works';
import Contact from '../Contact/Contact'
import WorkTime from '../WorkTime/WorkTime';
const Home = () => {
    return (
        <div>
            <Header></Header>
           <Works></Works>
           <Discount></Discount>
           <Trainers></Trainers>
           <People></People>
           <WorkTime></WorkTime>
           <Contact></Contact>
        </div>
    );
};

export default Home;