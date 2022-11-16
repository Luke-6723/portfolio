import React from 'react'
import './landing.scss'
import backgroundImage from '../../images/bike.jpg'
import me from '../../images/me.png'
import { Discord, Github, Linkedin, Mail, TikTok, Twitter, Waving } from '../../icons'

function anchorClick(e: any) {
  e.preventDefault()

  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  })
}

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
              <div><Waving id='waving' /> Hi, I'm Luke</div>
              <div>I'm a Software Engineer based the United Kingdom</div>

              <div className='socials'>
                <a title="Discord" href='https://discord.com/users/116930717241311236'><Discord /></a>
                <a title="Github" href='https://github.com/Luke-6723'><Github /></a>
                <a title="Twitter" href='https://twitter.com/_LukeStoodley'><Twitter /></a>
                <a title="Linkedin" href='https://www.linkedin.com/in/luke-stoodley-8a6482191/'><Linkedin /></a>
                <a title="TikTok" href='https://www.tiktok.com/@luke_stoodley?lang=en'><TikTok /></a>
                <a title="Email" href='mail:luke@ichigo.uk'><Mail /></a>
              </div>
            </div>
          </div>
          <div className='buttons'>
            <a onClick={anchorClick} href='#aboutme'>About me</a>
            <a onClick={anchorClick} href='#'>My experience</a>
            <a onClick={anchorClick} href='#'>My projects</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
