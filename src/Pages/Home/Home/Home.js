import React from 'react';
import Staffs from '../Staffs/Staffs';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Staffs></Staffs>
            <Footer></Footer>

        </div>
    );
};

export default Home;