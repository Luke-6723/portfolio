import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-bottom: 25px;
    background: rgb(55,55,55);
`

const AboutMe = () => {
  const lukesBday = new Date('7-6-2001')
  const now = new Date()
  const age = Math.floor((Math.floor(now.getTime() / 1000) - Math.floor(lukesBday.getTime() / 1000)) / 3.154e+7)

  return (
    <Container>
      <div className='header'>
        <span id='text'>About me</span>
        <div id='underline' />
      </div>
      <div className='content'>
        <div className='imgcontainer'>
          <img id='pfp' alt='Luke' src='/images/luke.png' />
        </div>
        <div className='information'>
          <div className='infobox'>
            <div className='listopt'>Name:</div> <div className='listval'>Luke Stoodley</div>
          </div>
          <div className='infobox'>
            <div className='listopt'>Age:</div> <div className='listval' id='age'>{age}</div>
          </div>
          <div className='infobox'>
            <div className='listopt'>Birthday:</div> <div className='listval'>6th July 2001</div>
          </div>
          <div className='infobox'>
            <div className='listopt'>Current Job:</div> <div className='listval'>Support Worker</div>
          </div>
          <div className='infobox'>
            <div className='listopt'>Hobbies:</div>
            <div className='listval'>
              • Programming<br />
              • Motorcycle riding<br />
              • Gaming<br />
            </div>
          </div>
          <div className='infobox'>
            <div className='listopt'>Currently Learning:</div>
            <div className='listval'>
              • React (Front End Development)<br />
              • Racing on a 125cc (Moto racing)<br />
            </div>
          </div>
          <div className='infobox'>
            <div className='listopt'>Extra:</div>
            <div className='listval'>
              I'm an aspiring programmer who works on random but also large projects. I also do extensive front end development that sometimes requires me to learn new things and look into things that I may not have known before.
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutMe
