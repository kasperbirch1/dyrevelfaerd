import React from 'react'
import SEO from '../components/seo'
import { Wrapper } from '../components/page-elements'
import { Router } from "@reach/router"
import AnimalDetailsPrams from "../DynamicRoutes/AnimalDetailsPrams"
import VoresDyr from "../DynamicRoutes/VoresDyr"
const AnimalDetails = () => {
    return (
        <>
            <SEO title="vores-dyr" />
            <Wrapper>
                <Router basepath="/vores-dyr">
                    <VoresDyr path="/" />
                    <AnimalDetailsPrams path="/:urlParam" />
                </Router>
            </Wrapper>
        </>
    )
}
export default AnimalDetails