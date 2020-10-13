import React from 'react'
import styled from 'styled-components'
import SocialIcon from '../components/socialIcon'

const Container = styled.div`
  background-color: rgb(40, 40, 40);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  .subheader {
    font-size: 16px;
  }
`

const SocialContainer = styled.div`
  display: flex;
`

const MainBlock = () => {
  return (
    <Container>
      <p> Luke Stoodley </p>
      <p className='subheader'> Programmer and Motorcycle enthusiast </p>
      <SocialContainer>
        <SocialIcon name='Twitter' iconURL='/images/twitter.png' url='https://twitter.com/CrystalReflex' />
        <SocialIcon name='Discord' iconURL='/images/discord.png' url='https://discord.gg/UV9pWHD' />
        <SocialIcon name='GitHub' iconURL='/images/github.png' url='https://github.com/Luke-6723' />
        <SocialIcon name='Instagram' iconURL='/images/instagram.png' url='https://instagram.com/lukey.stoodley' />
      </SocialContainer>
    </Container>
  )
}

export default MainBlock
