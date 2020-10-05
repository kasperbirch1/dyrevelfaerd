import React from 'react'
import styled from 'styled-components'
const StyledAddNewSection = styled.section`
   
`
const AddNew = ({ response, resourceType, UserInfo }) => {
    return (
        <StyledAddNewSection>
            <pre style={{ overflow: 'scroll', maxWidth: '100%' }}>{JSON.stringify(response, null, 2)}</pre>
            <pre style={{ overflow: 'scroll', maxWidth: '100%' }}>{JSON.stringify(resourceType, null, 2)}</pre>
            <pre style={{ overflow: 'scroll', maxWidth: '100%' }}>{JSON.stringify(UserInfo, null, 2)}</pre>
            <h3 className="sub-title">Add New</h3>
        </StyledAddNewSection>
    )
}

export default AddNew