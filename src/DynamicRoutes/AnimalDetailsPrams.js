import React, { useState, useEffect } from "react"
import AnimalSlider from './AnimalSlider'
import { Link } from 'gatsby'
import axios from 'axios';
import styled from 'styled-components'
const StyledAnimalDetailsPramsSection = styled.section`
    padding: 1rem;
    article {
        h2 {
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

        p {
           margin-bottom: 1rem;

        }
    }
`

const AnimalDetailsPrams = ({ urlParam }) => {
    const [loading, setLoading] = useState(false);
    const [animal, setAnimal] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSinglePost = async () => {
            try {
                setLoading(true);
                setError(null)
                let response = await axios.get(`https://dyrevelfaerd.herokuapp.com/api/v1/animals/${urlParam}`);
                setAnimal(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setAnimal(null)
                setError(error)
            }
        }
        fetchSinglePost()
    }, [urlParam])


    // console.log("urlParam", urlParam);
    // console.log("animal", animal);
    return (
        <StyledAnimalDetailsPramsSection>
            {loading
                ? <p>Loading...</p>
                : animal
                    ? <AnimalItem animal={animal} />
                    : <ErrorlItem urlParam={urlParam} error={error} />
            }
        </StyledAnimalDetailsPramsSection>
    )
}

export default AnimalDetailsPrams





const AnimalItem = ({ animal }) => {
    return (
        <>
            <article>
                <h2 className="sub-title">{`${animal.name}, ${animal.age} år.`}</h2>
                <p>{animal.description}</p>
                <img src={animal.asset.url.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com").replace("jfif", "jpg")} alt={animal.name} />
            </article>
            <Link to="/vores-dyr">Se alle vores dyr i slider</Link>
        </>

    )
}


const ErrorlItem = ({ urlParam, error }) => {
    return (
        <>
            <h2 className="sub-title" style={{ textAlign: 'center' }}>{`Der er desværre ikke noget data med id: ${urlParam}`} </h2>
            <AnimalSlider />
            {/* {error && <pre style={{ overflowX: "scroll", overflowY: "hidden" }}>{JSON.stringify(error, null, 2)}</pre>} */}
        </>
    )
}




