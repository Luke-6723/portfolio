import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  display: inline-block;
  width: 56px;
  height: 56px;
  margin: 0 15px 0 15px;
`

const SocialIcon = (props) => {
  return (
    <Container href={props.url || ''} iconURL={props.iconURL}>
      <img title={props.name} width='56' height='56' alt='Social Icon' src={props.iconURL} />
    </Container>
  )
}

export default SocialIcon
