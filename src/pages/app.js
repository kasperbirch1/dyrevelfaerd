import React from 'react'
import { Wrapper } from '../components/page-elements'
import { Router } from "@reach/router"
import AppDefault from "../components/AppDefault"
import AppPrams from "../components/AppPrams"
const App = () => {
    return (
        <Wrapper>
            <Router basepath="/app">
                <AppDefault path="/" />
                <AppPrams path="/:urlParam" />
            </Router>
        </Wrapper>
    )
}
export default App