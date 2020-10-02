import React from 'react'
import DeleteSubscribers from '../components/DeleteSubscribers/DeleteSubscribers'
import styled from 'styled-components'
const StyledafmeldNyhedsbrevSection = styled.section`
    display: grid;
    place-content: center;
    height: 100%;
    > :first-child {
        text-transform: uppercase;
        font-size: 2.5rem; 
    }
`

const afmeldNyhedsbrev = () => {
    return (
        <StyledafmeldNyhedsbrevSection>
            <h2 className="sub-title">Afmeld Nyhedsbrev</h2>
            <DeleteSubscribers />
        </StyledafmeldNyhedsbrevSection>
    )
}

export default afmeldNyhedsbrev