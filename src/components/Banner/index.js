import React from 'react'
import useApi from '../../hooks/useApi'
import Loading from '../Loading'
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

const Banner = ({ fetchID, navID }) => {
    const [response, loading] = useApi(`/adoptsections/${fetchID}`)
    return (
        <>
            {
                loading
                    ? <Loading />
                    : <StyledBannerSection style={{ backgroundImage: `url(${response && response.asset.url.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com")})` }} id={navID && navID}>
                        <article className="wrapper">
                            <h3>{response && response.title}</h3>
                            <p>{response && response.content}</p>
                        </article>
                    </StyledBannerSection>
            }
        </>
    )
}
export default Banner