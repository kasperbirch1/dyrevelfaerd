import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
const StyledDashboardMenuNav = styled.nav`
   
`

const DashboardMenu = ({ style }) => {
    return (
        <StyledDashboardMenuNav style={style}>
            <ul>
                <li>
                    <Link to="/">første link</Link>
                </li>
            </ul>
        </StyledDashboardMenuNav>
    )
}

export default DashboardMenu