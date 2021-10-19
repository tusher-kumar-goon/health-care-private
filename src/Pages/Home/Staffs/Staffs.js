import React from 'react';
import Staff from '../Staff/Staff';



const staffs = [
    {
        key: 1,
        name: 'Choate',
        Room: 404,
        img: 'https://i.ibb.co/gtFqGnh/staff1.png',

    },
    {
        key: 2,
        name: 'SHILA',
        Room: 505,
        img: 'https://i.ibb.co/kDs5psn/staff2.png',

    },
    {
        key: 3,
        name: 'Schmidt',
        Room: 600,
        img: 'https://i.ibb.co/PDMwYzY/staff6.png',

    },
    {
        key: 4,
        name: 'Fernandez',
        Room: 404,
        img: 'https://i.ibb.co/cr7zzWz/staff4.png',

    },
    {
        key: 5,
        name: 'Anita ',
        Room: 300,
        img: 'https://i.ibb.co/Njh6nBh/staff5.png',

    },
    {
        key: 6,
        name: 'Leslie',
        Room: 700,
        img: 'https://i.ibb.co/WGmjXf6/img66.png',

    },


]

const Staffs = () => {
    return (
        <div className='container'>
            <h2 className='text-primary'>Our Staff</h2>

            <div className="row">
                {
                    staffs.map(staff => <Staff
                        key={staff.key}
                        staff={staff}
                    ></Staff>)
                }
            </div>
        </div>
    );
};

export default Staffs;