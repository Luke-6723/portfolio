import React from 'react'
import './landing.scss'
import backgroundImage from '../../images/bike.jpg'
import me from '../../images/me.png'
import { Discord, Github, Linkedin, Mail, TikTok, Twitter } from '../../icons'

function Landing() {
  return (
    <div style={{
      backgroundImage: `url('${backgroundImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }} className="landing">
      <div className="content">
        <div className='introduction'>
          <div className='heading'>
            <img className='me' src={me} />
            <div className='text'>
              <div>Hi, I'm Luke</div>
              <div>I'm a Software Engineer based the United Kingdom</div>

              <div className='socials'>
                <a href='https://discord.com/users/116930717241311236'><Discord /></a>
                <a href='https://github.com/Luke-6723'><Github /></a>
                <a href='https://twitter.com/_LukeStoodley'><Twitter /></a>
                <a href='https://www.linkedin.com/in/luke-stoodley-8a6482191/'><Linkedin /></a>
                <a href='https://www.tiktok.com/@luke_stoodley?lang=en'><TikTok /></a>
                <a href='mail:luke@ichigo.uk'><Mail /></a>
              </div>
            </div>
          </div>
          <div className='buttons'>
            <a href='#'>About me</a>
            <a href='#'>My experience</a>
            <a href='#'>My projects</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
