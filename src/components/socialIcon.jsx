import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  text-decoration: none;
  user-select: none;
  display: inline-block;
  width: 180px;
  padding: 8px 12px;
  border-radius: 7.5px;
  height: calc(30px + 2vmin);
  font-size: 18px;
  color: white;
  margin: 0 15px 0 15px;
  background: rgb(75, 75, 75);
  img {
    width: calc(30px + 2vmin);
    height: calc(30px + 2vmin);
  }
`

const SocialIcon = (props) => {
  return (
    <Container className='connection' href={props.url || ''} iconURL={props.iconURL}>
      <div className='linknamecontainer'>
        <img title={props.name} alt='Social Icon' src={props.iconURL} />
        <span>{props.name}</span>
      </div>
    </Container>
  )
}

export default SocialIcon
