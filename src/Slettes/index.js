import React from 'react'
import { Link } from 'gatsby'
import { AddAnimals } from './AddAnimals';
import { AddVolunteer } from './AddVolunteer';
import EditAnimals from './EditAnimals';
import DashboardMenu from './DashboardMenu'
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'
const StyledUserDashboardSection = styled.section`
    display: grid;
    grid-column-gap: 1rem;
    @media ${breakpoints.md} {
        grid-template-columns: auto repeat(2, 1fr);
    }
    .Logout-btn,
    .form-errors {
        color: red;
    }
    form {
        display: grid;
        grid-gap: .5rem;
    }
`

const UserDashboard = ({ UserInfo }) => {
    const handleLogout = (e) => {
        window.sessionStorage.removeItem("UserInfo");
    }

    return (
        <StyledUserDashboardSection>
            <DashboardMenu />
            <div style={{ gridColumn: '2/-1', border: '1px solid black', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="userInfoContainer">
                <h1>Du er logget ind med: {UserInfo.username}</h1>
                {/* <p>{`Token: ${UserInfo.token}`}</p> */}
                <Link to="/" className="Logout-btn" onClick={handleLogout}>Log out</Link>
            </div>
            <EditAnimals UserInfo={UserInfo} />
            {/* <AddVolunteer style={{ gridArea: 'AddVolunteer' }} UserInfo={UserInfo} /> */}
            <AddAnimals UserInfo={UserInfo} />
        </StyledUserDashboardSection>
    )
}

export default UserDashboard


