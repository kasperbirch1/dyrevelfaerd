import React from 'react'
import { Link } from 'gatsby'
import { AddAnimals } from './AddAnimals';
import { AddVolunteer } from './AddVolunteer';
import EditAnimals from './EditAnimals';
import DashboardMenu from './DashboardMenu'
import styled from 'styled-components'
const StyledUserDashboardSection = styled.section`
/* display: grid; */
/* grid-column-gap: 1rem; */
/* grid-template-columns: auto 1fr 10rem; */
/* grid-template-areas: */
/* "DashboardMenu AddVolunteer userInfoContainer" */
/* "DashboardMenu AddAnimals ." */



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
            {/* <DashboardMenu style={{ gridArea: 'DashboardMenu' }} /> */}
            <div style={{ gridArea: 'userInfoContainer', border: '1px solid black', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className="userInfoContainer">
                <h1>Du er logget ind med: {UserInfo.username}</h1>
                {/* <p>{`Token: ${UserInfo.token}`}</p> */}
                <Link to="/" className="Logout-btn" onClick={handleLogout}>Log out</Link>
            </div>
            <EditAnimals UserInfo={UserInfo} />
            {/* <AddVolunteer style={{ gridArea: 'AddVolunteer' }} UserInfo={UserInfo} /> */}
            {/* <AddAnimals style={{ gridArea: 'AddAnimals' }} UserInfo={UserInfo} /> */}


        </StyledUserDashboardSection>
    )
}

export default UserDashboard


