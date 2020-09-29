import React from 'react'
import styled from 'styled-components'
const StyledNewsletterSection = styled.section`
   background-color: var(--theme-background-color);
`

const Newsletter = () => {
    return (
        <StyledNewsletterSection>
            <div className="wrapper">
                <h2 className="sub-title">Newsletter</h2>
            </div>
        </StyledNewsletterSection>
    )
}

export default Newsletter