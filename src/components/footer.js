import React from 'react'
import { breakpoints } from '../theme/breakpoints'

import styled from 'styled-components'
const StyledFooter = styled.footer`
      background-color: var(--theme-background-color);
      section {
        @media ${breakpoints.md} {
            display: grid;  
            grid-template-columns: repeat(2, 1fr);
            .partners {
                margin-left: 10rem;
            }
            p {
                grid-column: 1/-1;
                text-align: center;
            }
        }
      }
`

const Footer = () => {
    return (
        <StyledFooter>
            <section className="wrapper">
                <div className="contacts">
                    <h5>contacts</h5>
                </div>
                <div className="partners">
                    <h5>partners</h5>
                </div>
                <p>&copy;Copyright </p>
            </section>
        </StyledFooter>
    )
}

export default Footer