import React from 'react'
import './Services.css'
import { FaGithub} from "react-icons/fa";
import * as Icons from 'react-icons/fa';


const Services = () => {
    const services = [
        {
            iconName: 'FaGithub',
            role: 'Web Development',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta explicabo cupiditate aut velit non molestias.',
        },
        {
            iconName: 'FaCode',
            role: 'Designing',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },
        {
            iconName: 'FaCode',
            role: 'Programming java',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },
        {
            iconName: 'FaCode',
            role: 'editting',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },{
            iconName: 'FaCode',
            role: 'Programming',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },{
            iconName: 'FaCode',
            role: 'Programming',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },{
            iconName: 'FaCode',
            role: 'Programming',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },{
            iconName: 'FaCode',
            role: 'Programming',
            para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },
    ];

    return (
        <>
            <div id="Services">
                <div className="skillsHead">
                    <h1 style={{ color: 'white' }}>
                        <span style={{ color: 'violet' }}>My </span> Services
                    </h1>
                </div>
                <div className="skillsBg">
                    {services.map((service, index) => {
                        const IconComponent = Icons[service.iconName];
                        return (
                            <div className="card" key={index}>
                                {IconComponent && <IconComponent className="icon" />}
                                <h2>{service.role}</h2>
                                <p>{service.para}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Services;
