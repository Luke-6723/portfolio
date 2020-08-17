import React from 'react'
import styled from 'styled-components'

const SocialIcon = (iconURL, url = '', name) => {
  const Container = styled.div`
    width: 64px;
    height: 64px;
    background-image: url(${iconURL})
  `

  return (
    <a>
      <Container />
    </a>
  )
}

export default SocialIcon
