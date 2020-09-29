import React from 'react'

import Menu from './Menu/Menu'
import { Wrapper } from '../components/page-elements'
import { motion } from 'framer-motion'
import styled from 'styled-components'
const StyledHeader = styled(motion.header)`
  position: sticky;
  top: 0; 
  z-index: 100;
  background-color: var(--header-background-color);
  color: var(--menu-text-color);
`

const Header = () => {
  const headervariants = {
    hidden: {
      y: -200,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <StyledHeader initial="hidden" animate="show" exit="hidden" variants={headervariants} >
      <Wrapper>
        <Menu />
      </Wrapper>
    </StyledHeader >
  )
}



export default Header
