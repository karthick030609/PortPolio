import React from 'react'
import './About.css'

const About = () => {
  const about = {
    para: 'I am a Full-Stack developer based in Tamilnadu, India. I am an Information Technology pursuing  KCG College Of Technology.I am very passionate about improving my coding skills & developingapplications & websites. I build  Websites using MERN Stack.Working for myself to improve my skills. Love to build Full-Stack clones',
    Email: 'karthick426855@gmail,com',
    place: 'Tamilnadu, India - 636803',
     resumeLink:'https://drive.google.com/file/d/1E2Bq0D0Yvbmea7Upu6u-j99mtX_AewxQ/view?usp=drivesdk',
  }
  return (
    <>
      <div id='About'>
        <div className='about'>
          <h1 >About <span style={{ color: 'violet' }}>Me</span></h1>
        </div>
        <div className='main'>
          <div className='Box2'>
            <img src="profile.jpg" alt="peofile" />

          </div>
          <div className='Box1'>
            <h2>I am Karthick</h2>
            <p>{about.para}</p>
            <div className='detail'>
              <span >Email : </span><a href="">{about.Email}</a><br />
            </div>
            <div className='place'>
              <span className='placee'>Place : </span><span className=''>{about.place}</span>
            </div>
            <div className='button'>
              <a href={about.resumeLink}><button >Resume</button></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
