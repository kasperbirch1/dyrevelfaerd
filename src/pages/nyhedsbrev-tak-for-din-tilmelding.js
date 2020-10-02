import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
const StyledSection = styled.section`
    display: grid;
    place-content: center;
    height: 100%;
    > :first-child {
        text-transform: uppercase;
        font-size: 2.5rem; 
    }
`

const nyhedsbrev = () => {
    return (
        <>
            <StyledSection className="wrapper">
                <h2 className="sub-title">tak for din tilmelding</h2>

                <Link to="/afmeld-nyhedsbrev">Her kan du afmelde nyhedsbrev</Link>
            </StyledSection>
        </>
    )
}


export default nyhedsbrev
