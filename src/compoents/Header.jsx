import React from 'react'
import './Header.css'


const Header = () => {

  const header={
    name:'karlogo.png',
  }
  return (
  <header className='header'>
    <h1><img src={header.name} alt="" /></h1>
    <ul className='headElement'>
       <li><a href="/">Home</a> </li>
       <li><a href='#About'>About </a> </li>
       <li><a href="#Services">Service</a> </li>
       <li><a href="#Skills">Skills</a> </li>
       <li><a href="#Project">Project</a> </li>
       <li><a href="#Contact">Contact</a></li>
       
    </ul>
  </header>
  )
}

export default Header
