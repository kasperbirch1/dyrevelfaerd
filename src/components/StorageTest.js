import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useSessionStorage from '../hooks/useSessionStorage'
import styled from 'styled-components'
const StyledabeSection = styled.section`
   
`

const StorageTest = () => {
    const { useLocalStorageValue, setUseLocalStorageValue } = useLocalStorage("Local-key-name", "initialValue");
    const { useSessionStorageValue, setUseSessionStorageValue } = useSessionStorage("Session-key-name", "initialValue");
    useEffect(() => {

    }, [])
    return (
        <StyledabeSection>
            StorageTest
        </StyledabeSection>
    )
}

export default StorageTest