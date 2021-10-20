import React from 'react';
import Footer from '../Shared/Footer/Footer';
import './About.css'

const About = () => {
    return (

        <div>
            <div className='about-header'>
                <h1 >About Us</h1>
                <p className='description'>We started with one mission: SevenHills Group has over two decades of experience in the healthcare sector, providing quality healthcare and valuable experience, supported by a team of compassionate and dedicated medical professionals. .</p>
            </div>
            <div className="row container-fluid mt-5">
                <div className="col-md-6">
                    <div className="row">
                        <h3>SevenHills Vision</h3>
                        <p>
                            <ul>
                                <li>    SevenHills Vision
                                    To evolve as a benchmark in quality healthcare available to one and all.</li>
                                <li>To ensure accessible and affordable quality healthcare by compassionate medical professionals to all.</li>
                                <li>To cultivate an environment of trust, honesty, mutual respect, equality, and ethics.</li>
                            </ul>
                            <h3>SevenHills Policy</h3>
                            <ul>
                                <li>To provide value added innovative, consistent, and continuously improving health and medical care to sustain and further improve clinical outcomes, patient safety, & patient satisfaction.</li>

                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div >
            <div className='row about-down'>
                <div className="col-md-4">
                    <h4>Our Branch</h4>
                    <p>Sirajgonj,Rajshashi</p>
                </div>
                <div className='col-md-4'>
                    <h4>Our Branch</h4>
                    <p>Dhaka,Mirpur</p>
                </div>
                <div className='col-md-4'>
                    <h4>Our Branch</h4>
                    <p>Pabna,Bera.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;