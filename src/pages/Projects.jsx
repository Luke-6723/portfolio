import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../components/projectcard'

const Container = styled.div`
    padding-bottom: 25px;
    background: rgb(55,55,55);
`

const AboutMe = () => {
  return (
    <Container>
      <div className='header'>
        <span id='text'>Projects</span>
        <div id='underline' />
      </div>
      <div className='projects'>
        <ProjectCard url='https://hellhouse.xyz/' name='Hellhouse' description='A community I made for people to chill and hangout' iconURL='/images/hellhouse.png' />
        <ProjectCard url='https://github.com/Luke-6723/hellhouse-minion' name='Hellhouse Minion' description='A discord moderation bot that is made for Hellhouse but completely open source.' iconURL='/images/hellhouse.png' />
        <ProjectCard url='https://dblstats.com/' name='DBL Statistics' description='An analytics site for bots on top.gg' iconURL='https://dblstatistics.com/images/DBLStatsBlue.png' />
        <ProjectCard url='https://github.com/Luke-6723/Node-Link-Shortner' name='Node Link Shortner' description='A self-hosted link shortner with a front-end for analytics.' iconURL='/images/link-symbol.png' />
      </div>
    </Container>
  )
}

export default AboutMe
