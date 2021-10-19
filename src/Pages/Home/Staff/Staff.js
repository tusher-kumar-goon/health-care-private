import React from 'react';
import './Staff.css'


const Staff = ({ staff }) => {
    const { name, img, Room } = staff;
    return (
        <div className=' staff-cont col-lg-4 col-md-6 col-sm-6'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>Room No {Room}</h5>
        </div>
    );
};

export default Staff;