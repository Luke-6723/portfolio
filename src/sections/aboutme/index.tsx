import React from 'react'
import './aboutme.scss'

import bike from '../../images/bike.jpg'
import me from '../../images/me.png'

function AboutMe() {
  return (
    <div id="aboutme" className="aboutme">
      <div className='content'>
        <div className='title'>About me</div>
        <div className='description'>
          <div className='text'>
            I'm a Software Engineer, Motorcyclist and Father to one based in the United Kingdom<br /><br />
            <div className='title small'>When did I start programming?</div>
            I started programming when I was 13 where I learned Java.<br />
            I learnt Java because I wanted to get into making <a target="_blank" href="https://minecraft.net">Minecraft</a> mods and server plugins.<br />
            From there I went on to host multiple minecraft servers as well as learning how to interact with different APIs as well and learning how to write plugins for the minecraft server interconnector <a target="_blank" href='https://github.com/SpigotMC/BungeeCord'>BungeeCord</a>.<br /><br />
            <div className='title small'>What do I enjoy doing in my free time?</div>
            I spend a lot of my time at home with my family, gaming when I can and working on my personal projects such as <a href='https://shirobot.org'>Shiro</a> and <a href='https://pyrocdn.com'>PyroCDN</a>.<br /><br />
            <div className='title small'>What motorcycle do I have?</div>
            I have a 2014 Honda CBR 500 R-AE<br /><br />
            <div className='title small'>What games do I like to play?</div>
            My all time favorite has to be Minecraft, even if I only play it every 6 months now.<br />
            I also play War Thunder and Overwatch 2.<br />
            I definately don't game as much as I used to but you can see more on my <a href='https://steamcommunity.com/id/crystalreflex'>Steam</a>
          </div>
          <div></div>
          <div className='images'>
            <div className='image'>
              <img src={me} alt="Me with my newborn daughter" />
              <div>Me with my newborn daughter</div>
            </div>
            <div className='image'>
              <img src={bike} alt="2014 Honda CBR 500 R-AE" />
              <div>My 2014 Honda CBR 500 R-AE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
