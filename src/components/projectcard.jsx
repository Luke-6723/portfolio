import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 12px !important;
  margin-bottom: 12px !important;
  color: white;
  text-decoration: none;
  border-radius: 7.5px;
  background: rgb(75, 75, 75);
  margin: auto;
  user-select: none;
  display: flex;
  width: 70%
`

const ProjectCard = (props) => {
  return (
    <Container iconURL={props.iconURL}>
      <div className='projecticon'>
        <img title={props.name} alt='Project Icon' src={props.iconURL} />
      </div>
      <div className='projectinfo'>
        <div className='projectname'>{props.name}</div>
        <div className='projectdesc'>{props.description}</div>
      </div>
      <a href={props.url || ''} className='viewbtn'>View</a>
    </Container>
  )
}

export default ProjectCard
