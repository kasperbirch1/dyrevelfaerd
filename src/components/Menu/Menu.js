import React, { useState } from 'react'
import { Link } from "gatsby"
import Modal from 'react-modal';
import { breakpoints } from "../../theme/breakpoints"
import MenuLiLinks from './MenuLiLinks'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../images/logo.png'

import styled from 'styled-components'
const StyledMenuNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    align-items: center;
    padding: 1rem 0 ;

    .menu-logo-container {
        display: flex;
        align-items: center;
        img {
            margin-right: .75rem;
            width: 2.5rem;
        }
    }

    ul {
        display: none;
        grid-column: 3/-1;
        @media ${breakpoints.md} {
            width: 100%;
            display: flex;
            justify-content: space-between;
            text-transform: capitalize;
            li {
                color: var(--link-color);
                font-size: .75rem;
                padding-right: .5rem;
            }
        }
    }

    .menu-icon {
        grid-column: 3/-1;
        justify-self: flex-end;
        font-size: var(--menu-icon-size);
        @media ${breakpoints.md} {
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
            <StyledMenuNav className="wrapper">
                <Link to="/" className="menu-logo-container">
                    <img src={Logo} alt="Foreningen for Dyrevelfærd logo" />
                    <h2>Foreningen for Dyrevelfærd</h2>
                </Link>
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
