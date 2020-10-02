import React from 'react'
import useApi from '../../hooks/useApi'
import Loading from '../Loading'
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
            <h2 className="sub-title">om os</h2>
            {loading
                ? <Loading />
                : response && response.map(element => {
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
