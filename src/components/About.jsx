import React from 'react'
import Aboutitem from './Aboutitem'

const data = [
    {
        id: 1,
        title: 'Name',
        desc: 'Pathum Lakshan',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.'
    },

    {
        id: 2,
        title: 'Age',
        desc: '21',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.'

    },

    {
        id: 3,
        title: 'Email',
        desc: 'pathumlk10158@gmail.com',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.'

    },

    {
        id: 4,
        title: 'Phone',
        desc: '+9477 123 4567',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.'

    },


]

const About = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e'>About</h1>
            {
                data.map((item, idx) => (
                    <Aboutitem
                        key={idx}
                        title={item.title}
                        desc={item.desc}
                        details={item.details}
                    />
                ))}
        </div>
    );
};

export default About
