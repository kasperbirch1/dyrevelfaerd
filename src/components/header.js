import React from 'react'
import Menu from './Menu/Menu'
import styled from 'styled-components'
const StyledHeader = styled.header`
  position: sticky;
  top: 0; 
  z-index: 100;
  /* background-color: var(--header-background-color); */
  background-color: white;
  color: var(--menu-text-color);
`

const Header = () => {
  return (
    <StyledHeader  >
      <Menu />
    </StyledHeader >
  )
}



export default Header
