import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Benifit from '../Benifit/Benifit';
import './Benifits.css'
const Benifits = () => {
    const [benifits, setBenifits] = useState([])
    useEffect(()=>{
        fetch('benifit.json')
        .then(res => res.json())
        .then(data => setBenifits(data))
    },[])
    return (
        <div className="benifit-area">
            <h1 className="py-5 text-center fw-bold text-light"><span>BENIFITS</span> OF FITNESS CARE GYM</h1>
            <div className="container benifit-container">
            <Row xs={1} md={2} lg={2} className="g-4">
                {
                 benifits.map(benifit => <Benifit key={benifit.id} benifit={benifit}></Benifit>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Benifits;