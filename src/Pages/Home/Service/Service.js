import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // cpnst {service}= props;
    const { id, img, name, visit, from, specilist } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4> {name}</h4>
            <h6>Visit {visit} Taka</h6>
            <h5>From {from}</h5>

            <Link to={`/booking/${id}`}><button className='btn-doctor'>Book: {specilist}</button></Link>
        </div>
    );
};

export default Service;