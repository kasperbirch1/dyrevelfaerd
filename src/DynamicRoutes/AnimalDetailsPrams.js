import React, { useState, useEffect } from "react"
import AnimalSlider from '../components/AnimalSlider'
import Loading from '../components/Loading'
import axios from 'axios';
import styled from 'styled-components'
import SEO from '../components/seo'
const StyledAnimalDetailsPramsSection = styled.section`
    article {
        h2 {
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

        p {
           margin-bottom: 1rem;

        }
    }

    .sub-title {
        margin-top: 3rem;
        margin-bottom: 1rem;
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
                ? <Loading />
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
            <SEO title={animal.name} />
            <article>
                <h2 className="sub-title">{`${animal.name}, ${animal.age} år.`}</h2>
                <p>{animal.description}</p>
                <img src={animal.asset.url.replace("http://localhost:4000", "https://dyrevelfaerd.herokuapp.com").replace("jfif", "jpg")} alt={animal.name} />
            </article>
            <h3 className="sub-title">Se vores andre dyr her</h3>
            <AnimalSlider id={animal.id} />
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




