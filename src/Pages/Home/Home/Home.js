import React from 'react';
import Staffs from '../Staffs/Staffs';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Staffs></Staffs>
        </div>
    );
};

export default Home;