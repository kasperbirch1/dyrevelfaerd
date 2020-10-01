import React from 'react'
import { Wrapper } from '../components/page-elements'
import { Router } from "@reach/router"
import AnimalSlider from "../components/AnimalSlider"
import AnimalDetailsPrams from "../components/AnimalDetailsPrams"
const AnimalDetails = () => {
    return (
        <Wrapper>
            <Router basepath="/vores-dyr">
                <AnimalSlider path="/" />
                <AnimalDetailsPrams path="/:urlParam" />
            </Router>
        </Wrapper>
    )
}
export default AnimalDetails