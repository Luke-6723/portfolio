import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  height: 56px;
  background: rgb(40, 40, 40);
`

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  height: 56px;
  width: fit-content;
  padding: 0 18px 0 18px;
  line-height: 56px;
  font-size: 18px;
  text-align: center;
  &:hover {
    background: rgb(30, 30, 30);
  }
  &#header {
    user-select: none !important;
    pointer-events: none;
    font-weight: 600;
  }
`

const NavBar = () => {
  return (
    <NavContainer>
      <NavItem id='header'>Luke Stoodley</NavItem>
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/projects'>Projects</NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </NavContainer>
  )
}

export default NavBar
