import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="service-container">
            {
                services.map(service => <Service
                    key={service.key}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;