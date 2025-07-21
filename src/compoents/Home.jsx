import React from 'react'
import './Home.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const home = {
    name: 'KARTHICK',
    para: 'I’m Karthick, a passionate Web Developer.I specialize in creating responsive, user-friendly websites.With a strong foundation in HTML, CSS, JavaScript, and React,I build clean and efficient web solutions tailored to user needs.Let’s work together to bring your digital ideas to life! ',
    role1: 'Web Developer',
    role2: 'UX Designer',
    image: 'p1.png',
  }
  const homeiconLink={
     linkFB:'https://www.facebook.com/share/1Bbk6yLJWu/',
     linkInsta:'https://www.instagram.com/karxx._k?igsh=MTdud3RlODVrNGp1bg==',
    linklinkedin:'https://www.linkedin.com/in/karthick-m-5b03a1300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    linkGitup:'https://github.com/karthick030609',
  }

  return (
    <>
      <div className='main'>
        <div className='box1'>
          <h4>I am {home.name}</h4>
          <div className='web'>
            <h1 >{home.role1}</h1>
            <h1>{home.role2}</h1>
          </div>
          <p>{home.para}</p>
          <div className='icons'>
            <a href={homeiconLink.linkFB} className='a' target='blank'><FaFacebook className='a' size={30} color='aliceblue' /></a>
            <a href={homeiconLink.linkInsta} target='blank'><FaInstagram className='a' size={30} color='aliceblue' /></a>
            <a href={homeiconLink.linklinkedin} target='blank'><FaLinkedin className='a' size={30} color='aliceblue' /></a>
            <a href={homeiconLink.linkGitup} target='blank'><FaGithub className='a' size={30} color='aliceblue' /></a>
          </div>
          <div className='button'>
            <a href="#About"><button >More About Me</button></a>
          </div>

        </div>
        <div className='box2'>
          <img src={home.image} alt="peofile" />

        </div>
      </div>
    </>
  )
}

export default Home
