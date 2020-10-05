import React from 'react'
import { breakpoints } from '../theme/breakpoints'

import styled from 'styled-components'
const StyledFooter = styled.footer`
      background-color: var(--theme-background-color);
      section {
        padding: var(--section-padding);
        display: grid; 
        grid-gap: 1rem;
        h5 {
            font-size: 1rem;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: .5rem;
        }
        a {
            text-transform: capitalize;
            display: block;
            color: var(--link-color-blue);
        }
        @media ${breakpoints.md} {
            grid-template-columns: repeat(2, 1fr);
            .partners {
                justify-self: flex-end;
            }
            .copyright {
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
                    <h5>Kontakt</h5>
                    <p>Tornebuskvej 22, 1.</p>
                    <p>1131 København K</p>
                    <p>CVR: 22446187</p>
                    <p>Husk at du kan få fradrag for donationer på op til 16.600 kr</p>
                </div>
                <div className="partners">
                    <h5>Partnere</h5>
                    <a href="https://anima.dk/" target="_blank" rel="noreferrer">Anima</a>
                    <a href="https://www.worldanimalprotection.dk/" target="_blank" rel="noreferrer">World animal protection</a>
                    <a href="https://www.foedevarestyrelsen.dk/" target="_blank" rel="noreferrer">fødevarestyrelsen</a>
                    <a href="https://faktalink.dk/" target="_blank" rel="noreferrer">faktalink</a>
                </div>
                <p className="copyright">&copy;Copyright </p>
            </section>
        </StyledFooter>
    )
}

export default Footer