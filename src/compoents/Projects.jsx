import React from 'react'
import './Projects.css'


const Projects = () => {
    const projects = [
        {
            
            name: 'E-commerse Website',
            para: ' ipsum dolor sit amet consectetur, adipisicing elit. Dicta explicabo cupiditate aut velit non molestias.',
        },
        {
            
            name: 'Login Page',
            para: ' ipsum dolor sit amet consectetur, adipisicing elit. Explicabo cupiditate aut velit non molestias.',
        },]
  return (
    <>
    <div id='Project' className='about'>
                <h1><span style={{color:'violet'}}>My </span>Projects</h1>
            </div>
           

                <div className="skillsBg">
                                {projects.map((project, index) => {
                                  
                                    return (
                                        <div className="card1" key={index}>
                                            <h2>{project.name}</h2>
                                            <p>{project.para}</p>
                                        </div>
                                    );
                                })}
                            </div>
            
    </>

 )
}

export default Projects