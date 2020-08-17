import React from 'react'
import styled from 'styled-components'
import SocialIcon from '../../components/socialIcon'

const Container = styled.div`
  background-color: rgb(40, 40, 40);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const MainBlock = () => {
  return (
    <Container>
      <p> Luke Stoodley </p>
      <SocialIcon />
    </Container>
  )
}

export default MainBlock
