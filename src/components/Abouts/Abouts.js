import React from 'react'
import useApi from '../../hooks/useApi'
import styled from 'styled-components'
const StyledAboutsSection = styled.section`
    padding: var(--section-padding);
    article {
        padding: 1rem;
        > :first-child {
            text-transform: uppercase;
            font-weight: bold;
            color: var(--theme-color);
            margin-bottom: .5rem;
        }
       
    }
`

const Abouts = () => {
    const [response, loading] = useApi("https://dyrevelfaerd.herokuapp.com/api/v1/abouts")
    return (
        <StyledAboutsSection className="wrapper grid3column" id="Abouts-Section">
            {loading
                ? <p>LOADING</p>
                : response && response.data.map(element => {
                    return (
                        <AboutItem key={element.id} title={element.title} content={element.content} />
                    )
                })
            }


        </StyledAboutsSection>
    )
}

export default Abouts


const AboutItem = ({ title, content }) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    )
}
