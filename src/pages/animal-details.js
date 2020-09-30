import React from 'react'
import { Wrapper } from '../components/page-elements'
import { Router } from "@reach/router"
import AnimalDetailsDefault from "../components/AnimalDetailsDefault"
import AnimalDetailsPrams from "../components/AnimalDetailsPrams"
const AnimalDetails = () => {
    return (
        <Wrapper>
            <Router basepath="/animal-details">
                <AnimalDetailsDefault path="/" />
                <AnimalDetailsPrams path="/:urlParam" />
            </Router>
        </Wrapper>
    )
}
export default AnimalDetails