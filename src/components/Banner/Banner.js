import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../theme/breakpoints'
const StyledBannerSection = styled.section`
    height: 10rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    align-content: center;
    article {
      color: white;
      font-weight: bold;
      > :first-child {
        font-size: 1.5rem;
        text-transform: capitalize;
        margin-bottom: .5rem;
      }
    }
    @media ${breakpoints.md} {
        height: 15rem;
        article {
            > :first-child {
                font-size: 2.5rem;
            }
        }
    }
`

const Banner = ({ img, title, content }) => {
    return (
        <StyledBannerSection style={{ backgroundImage: `url(${img})` }}>
            <article className="wrapper">
                <h3>{title}</h3>
                <p>{content}</p>
            </article>
        </StyledBannerSection>
    )
}

export default Banner