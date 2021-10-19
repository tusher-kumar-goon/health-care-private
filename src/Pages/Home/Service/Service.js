import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // cpnst {service}= props;
    const { img, name, visit, from, specilist } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4> {name}</h4>
            <h6>Visit {visit} Taka</h6>
            <h5>From {from}</h5>
            <h6>{specilist}</h6>
        </div>
    );
};

export default Service;