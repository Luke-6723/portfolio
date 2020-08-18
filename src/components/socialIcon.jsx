import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  user-select: none;
  display: inline-block;
  width: calc(30px + 2vmin);
  height: calc(30px + 2vmin);
  margin: 0 15px 0 15px;
  img {
    width: calc(30px + 2vmin);
    height: calc(30px + 2vmin);
  }
`

const SocialIcon = (props) => {
  return (
    <Container href={props.url || ''} iconURL={props.iconURL}>
      <img title={props.name} alt='Social Icon' src={props.iconURL} />
    </Container>
  )
}

export default SocialIcon
