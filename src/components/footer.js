import React from 'react'
import SocialMediaLiLinks from './SocialMediaLiLinks'
import { Wrapper } from '../components/page-elements'
import styled from 'styled-components'

const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.getAttribute("data-theme") === null) {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem('theme', html.getAttribute('data-theme'));
    } else {
        html.removeAttribute("data-theme");
        localStorage.removeItem('theme');
    }
}

const StyledFooterWrapper = styled(Wrapper)`
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-social-media{
        display: flex;
        svg {
            font-size: var(--menu-icon-size)
        }
    }
`

const Footer = () => {
    return (
        <footer>
            <StyledFooterWrapper>
                <h5>Footer&copy;</h5>
                <ul className="footer-social-media">
                    <SocialMediaLiLinks />
                </ul>
                <button style={{ color: 'var(--theme-color)' }} onClick={() => { toggleDarkMode() }}>theme changer</button>
            </StyledFooterWrapper>
        </footer>
    )
}

export default Footer
