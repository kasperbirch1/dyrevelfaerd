import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import useApi from '../../hooks/useApi'
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'
import { List } from './List'
import AddNew from './AddNew'
const StyledUserDashboardSection = styled.section`
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: auto 1fr;
        grid-template-areas:
        "usher headline"
        "side-menu side-menu"
        "content content";
    @media ${breakpoints.md} {
        grid-template-areas:
        "usher headline"
        "side-menu content"
        "side-menu content";
    }

    .sub-title {
        margin-bottom: 0;
    }
    .Logout-btn {
        padding: .25rem;
        padding-left: 0 ;
        color: red;
    }
`

const UserDashboard = ({ UserInfo }) => {
    const [resourceType, setResourceType] = useState("/animals");
    const [response, loading] = useApi(resourceType);
    // console.log("response", response);

    const handleLogout = (e) => {
        window.sessionStorage.removeItem("UserInfo");
    }

    return (
        <StyledUserDashboardSection className="wrapper">
            <div style={{ gridArea: 'usher' }}>
                <h3 className="sub-title">{UserInfo.username}</h3>
                <Link to="/" className="Logout-btn" onClick={handleLogout}>Log out</Link>
            </div>
            <div style={{ gridArea: 'side-menu', display: 'flex', flexDirection: 'column' }}>
                <h4 className="sub-title">endpoints:</h4>
                <button onClick={() => { setResourceType("/adoptsections") }}>adoptsections</button>
                <button onClick={() => { setResourceType("/abouts") }}>abouts</button>
                <button onClick={() => { setResourceType("/animals") }}>animals</button>
                <button onClick={() => { setResourceType("/volunteers") }}>volunteers</button>
            </div>
            <h4 style={{ gridArea: 'headline' }} className="sub-title">{resourceType}</h4>
            <div style={{ gridArea: 'content' }}>
                {loading
                    ? <p>loading</p>
                    : <>
                        <AddNew response={response} resourceType={resourceType} UserInfo={UserInfo} />
                        <List response={response} resourceType={resourceType} UserInfo={UserInfo} />
                    </>
                    // : <pre style={{ overflowX: 'scroll', maxWidth: '80vw', margin: '0 auto' }}>{JSON.stringify(response, null, 2)}</pre>
                }
            </div>
        </StyledUserDashboardSection>
    )
}

export default UserDashboard



