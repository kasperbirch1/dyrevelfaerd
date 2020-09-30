import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useApi from '../../hooks/useApi'
import { breakpoints } from '../../theme/breakpoints'
const StyledAnimalsSection = styled.section`
    padding: var(--section-padding);
    display: grid;
    grid-gap: 1rem;
    @media ${breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
   article {
       border: var(--theme-border);
       display: flex;
       img {
           object-fit: cover;
           max-width: 200px;
       }
       div {
           padding: var(--small-padding);
       }
   }
`

const Animals = () => {
    const [response, loading] = useApi("https://dyrevelfaerd.herokuapp.com/api/v1/animals")

    return (
        <StyledAnimalsSection className="wrapper" id="#Animals-Section" >
            <h2 className="sub-title">Dyr hos os</h2>
            {loading
                ? <p>LOADING</p>
                : response && response.data.map(element => {
                    return (
                        <AnimalItem key={element.id} id={element.id} name={element.name} description={element.description} img={element.asset.url} />
                    )
                })}
        </StyledAnimalsSection>
    )
}

export default Animals

const AnimalItem = ({ id, name, description, img }) => {
    return (
        <Link to={`/animal-details/${id}`} >
            <article>
                <img src={img.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com").replace("jfif", "jpg")} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </article>
        </Link>
    )
}
