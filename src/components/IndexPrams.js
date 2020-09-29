import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import axios from 'axios';
import styled from 'styled-components'
const StyledIndexPramsSection = styled.section`

`

const IndexPrams = ({ urlParam }) => {
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchSinglePost = async () => {
            try {
                setLoading(true);
                setError(null)
                let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${urlParam}`);
                setPerson(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setPerson(null)
                setError(error)
            }
        }
        fetchSinglePost()
    }, [urlParam])

    console.log("error LOG", error)

    // console.log("urlParam", urlParam);
    // console.log("person", person);
    return (
        <StyledIndexPramsSection>
            <h2>Find data with prams</h2>
            {loading ?
                <h2>Loading...</h2>
                :
                person ?
                    <pre>{JSON.stringify(person, null, 2)}</pre>
                    : <p>ingen person</p>
            }
            {error && <p>fejl</p>}
            <Link to="/app/1" >Link to app1</Link>
            <Link to="/app/2" >Link to app2</Link>
        </StyledIndexPramsSection>
    )
}

export default IndexPrams
