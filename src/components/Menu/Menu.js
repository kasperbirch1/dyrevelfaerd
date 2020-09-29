import React, { useState } from 'react'
import { Link } from "gatsby"
import Modal from 'react-modal';
import { breakpoints } from "../../theme/breakpoints"
import MenuLiLinks from './MenuLiLinks'
import { FaBars, FaTimes } from 'react-icons/fa';

import styled from 'styled-components'
const StyledMenuNav = styled.nav`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 ;

    .menu-logo-container {
        display: grid;
        place-content: center;
        width: 200px;
    }

    ul {
        display: none;
        @media ${breakpoints.sm} {
            width: 100%;
            display: flex;
            justify-content: space-around;
            text-transform: capitalize;
        }
    }

    .menu-icon {
        font-size: var(--menu-icon-size);
        @media ${breakpoints.sm} {
        display: none;
        }
    }
`

const StyledModal = styled(Modal)`
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.75);
    color: white;
    position: relative;
    display: grid;
    place-content: center;
    .modal-nav {
        .modal-menu-icon {
            font-size: var(--menu-icon-size);
            position: absolute;
            top: 1.25rem; 
            right: .5rem;
        }
        ul {
           li {
            text-align: center;
            text-transform: capitalize;
            padding: .5rem 0;
            font-size: 3rem;
           }
        }
    }
`


function Menu() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <>
            <StyledMenuNav>
                <div className="menu-logo-container">
                    <Link to="/">
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--cUONk15K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/rdckude3n23s9gnbb2mg.png" alt="Logo" />
                    </Link>
                </div>
                <ul>
                    <MenuLiLinks setMenuIsOpen={setMenuIsOpen} />
                </ul>
                <FaBars className="menu-icon" style={menuIsOpen ? { color: 'transparent' } : { color: 'inherit' }} onClick={() => setMenuIsOpen(true)} />
            </StyledMenuNav>
            <StyledModal isOpen={menuIsOpen} onRequestClose={() => setMenuIsOpen(false)}>
                <nav className="modal-nav">
                    <FaTimes className="modal-menu-icon" onClick={() => setMenuIsOpen(false)} />
                    <ul>
                        <MenuLiLinks setMenuIsOpen={setMenuIsOpen} />
                    </ul>
                </nav>
            </StyledModal>
        </>
    )
}

export default Menu
